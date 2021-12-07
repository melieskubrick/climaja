import { Alert, Linking, PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const hasPermissionIOS = async () => {
  const openSetting = () => {
    Linking.openSettings().catch(() => {
      Alert.alert('Não foi possível abrir as configurações');
    });
  };

  const status = await Geolocation.requestAuthorization('whenInUse');

  if (status === 'granted') {
    return true;
  }

  if (status === 'denied') {
    Alert.alert('Permissão de localização negada');
  }

  if (status === 'disabled') {
    Alert.alert(
      'Ative os Serviços de Localização para permitir que ClimaJá use a sua localização.',
      '',
      [
        {
          text: 'Vá para configurações', onPress: openSetting,
        },
        {
          text: "Não use localização", onPress: () => {},
        },
      ],
    );
  }

  return false;
};

export const hasLocationPermission = async () => {
  if (Platform.OS === 'ios') {
    const hasPermission = await hasPermissionIOS();
    return hasPermission;
  }

  if (Platform.OS === 'android' && Platform.Version < 23) {
    return true;
  }

  const hasPermission = await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );

  if (hasPermission) {
    return true;
  }

  const status = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );

  if (status === PermissionsAndroid.RESULTS.GRANTED) {
    return true;
  }

  if (status === PermissionsAndroid.RESULTS.DENIED) {
    Alert.alert('Permissão de localização negada pelo usuário.');
  } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
    Alert.alert('Permissão de localização revogada pelo usuário.');
  }

  return false;
};
