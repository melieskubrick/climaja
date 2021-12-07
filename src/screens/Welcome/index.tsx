import Button from '#/components/Button';
import Feather from '#/components/Feather';
import PrimaryText from '#/components/PrimaryText';
import SecondaryText from '#/components/SecondaryText';
import theme from '#/global/styles/theme';
import React from 'react';

import Geolocation from 'react-native-geolocation-service';

import {Container, Logo, Texts} from './styles';

import {hasLocationPermission} from '#/utils/helpers/location';
import {getLocationByLatLng} from '#/services/locationApi';

const Welcome: React.FC = ({navigation}: any) => {

  const fetchLocation = async () => {
    const hasPermission = await hasLocationPermission();

    Geolocation.getCurrentPosition(
      async position => {
        const {coords} = position;

        navigation.navigate('Climate', {lat: coords.latitude, lon: coords.longitude});
      },
      error => {
        console.log(error);
        navigation.navigate('Climate', {lat: null, lon: null});
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
        forceRequestLocation: true,
        showLocationDialog: true,
      },
    );
  };

  return (
    <Container>
      <Logo source={require('#/assets/images/partlyCloudy.png')} />
      <Texts>
        <PrimaryText center>ClimaJá</PrimaryText>
        <SecondaryText center>
          Descubra o clima da sua região agora! Permita sua localização abaixo
        </SecondaryText>
      </Texts>
      <Button
        onPress={() => fetchLocation()}
        textButton="PERMITIR LOCALIZAÇÃO"
        color={theme.colors.yellow}>
        <Feather name="navigation" size={24} color={theme.colors.grayDark} />
      </Button>
    </Container>
  );
};

export default Welcome;

