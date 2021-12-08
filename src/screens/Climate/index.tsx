import React, {useEffect, useLayoutEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';

import {Container, NavButton} from './styles';

import Feather from '#/components/Feather';
import InformationCard from '#/components/InformationCard';
import TemperatureCard from '#/components/TemperatureCard';
import Error from '#/components/Error';

import {getLocationByLatLng} from '#/services/locationApi';
import {getCurrentClimate, getCurrentClimates} from '#/services/climate';

import {format} from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

const Climate = ({navigation, route}: any) => {
  const {latitude, longitude} = route.params;

  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [climate, setClimate] = useState<Climate>();
  const [climates, setClimates] = useState<Climates>();

  const getClimates = async () => {
    setClimate(undefined);
    setClimates(undefined);

    if (!latitude || !longitude) {
      return;
    }

    const {data} = await getLocationByLatLng(latitude, longitude);
    const location = data.results.shift().locations.shift();

    setState(location.adminArea3);
    setCity(location.adminArea5);

    const currentClimate = await getCurrentClimate(latitude, longitude);
    setClimate(currentClimate.data);

    const currentClimates = await getCurrentClimates(latitude, longitude);
    setClimates(currentClimates.data);
  };

  useEffect(() => {
    getClimates();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <NavButton onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="white" />
        </NavButton>
      ),
      headerRight: () => (
        <NavButton onPress={() => getClimates()}>
          <Feather name="refresh-ccw" size={24} color="white" />
        </NavButton>
      ),
    });
  }, [navigation]);

  return (
    <Container contentContainerStyle={{paddingTop: 8, paddingBottom: 16}}>
      {!latitude || !longitude ? (
        <Error />
      ) : climate && climates?.daily ? (
        <>
          <TemperatureCard
            min={`${Math.trunc(climate.main.temp_min)}°C` || 'Carregando'}
            max={`${Math.trunc(climate.main.temp_max)}°C` || 'Carregando'}
            date={format(Date.now(), 'dd, MMM yy', {locale: pt})}
            temperature={`${Math.trunc(climate.main.temp)}°C` || 'Carregando'}
            currentCity={city || 'Carregando'}
            currentState={state || 'Carrregado'}
            cloud={climate.weather[0].description}
            wind={`${climate.wind.speed}` || 'Carregando'}
            humidity={`${climate.main.humidity}%` || 'Carregando'}
          />
          {climates.daily.map(
            (day: any, index) =>
              index > 0 && (
                <InformationCard
                  cloud={day.weather[0].description}
                  key={day.dt}
                  primaryText={
                    format(day.dt * 1000, 'dd, MMMM, yyyy', {locale: pt}) ||
                    'Carregando'
                  }
                  secondaryText={
                    `${Math.trunc(day.temp.day)}°C` || 'Carregando'
                  }
                />
              ),
          )}
        </>
      ) : (
        <ActivityIndicator size="large" color="white" animating />
      )}
    </Container>
  );
};

export default Climate;
