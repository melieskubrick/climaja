import React, {useEffect, useLayoutEffect, useState} from 'react';

import {Container, NavButton} from './styles';

import Feather from '#/components/Feather';
import InformationCard from '#/components/InformationCard';
import TemperatureCard from '#/components/TemperatureCard';
import Error from '#/components/Error';
import {getLocationByLatLng} from '#/services/locationApi';
import {getCurrentClimate} from '#/services/api';
import {ActivityIndicator, Alert} from 'react-native';

import {format} from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

const Climate: React.FC = ({navigation, route}: any) => {
  const {lat, lon} = route.params;

  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [climate, setClimate] = useState<Climate>();

  const locationLatLon = async () => {
    setClimate(undefined);
    if (!lat || !lon) {
      return;
    }

    const {data} = await getLocationByLatLng(lat, lon);
    const firstLocation = data.results.shift().locations.shift();

    setState(firstLocation.adminArea3);
    setCity(firstLocation.adminArea5);

    const currentClimate = await getCurrentClimate(lat, lon);
    setClimate(currentClimate.data);
  };

  useEffect(() => {
    locationLatLon();
  }, [lat, lon]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <NavButton onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="white" />
        </NavButton>
      ),
      headerRight: () => (
        <NavButton onPress={() => locationLatLon()}>
          <Feather name="refresh-ccw" size={24} color="white" />
        </NavButton>
      ),
    });
  }, [navigation]);

  return (
    <Container contentContainerStyle={{paddingTop: 8, paddingBottom: 16}}>
      {lat === null || lon === null ? (
        <Error />
      ) : climate ? (
        <>
          <TemperatureCard
            minMax={
              `${climate?.main.temp_min}°C - ${climate?.main.temp_max}°C` ||
              'Carregando'
            }
            day="Hoje"
            date={format(Date.now(), 'dd, MMM yy', {locale: pt})}
            temperature={`${climate.main.temp}°C` || 'Carregando'}
            currentLocation={`${city}-${state}`}
            cloud={climate.weather[0].description}
          />
          <InformationCard
            primaryText="Descrição"
            secondaryText={climate.weather[0].description || 'Carregando'}
          />
          <InformationCard
            primaryText="Sensação térmica"
            secondaryText={`${climate.main.feels_like}°C` || 'Carregando'}
          />
          <InformationCard
            primaryText="Velocidade do tempo"
            secondaryText={`${climate.wind.speed}` || 'Carregando'}
          />
          <InformationCard
            primaryText="Umidade"
            secondaryText={`${climate.main.humidity}` || 'Carregando'}
          />
        </>
      ) : (
        <ActivityIndicator size="large" color="white" animating />
      )}
    </Container>
  );
};

export default Climate;
