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

const Climate: React.FC = ({navigation, route}: any) => {
  const {lat, lon} = route.params;

  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [climate, setClimate] = useState<Climate>();
  const [climates, setClimates] = useState<Climates>();

  const locationLatLonClimate = async () => {
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

  const locationLatLonClimates = async () => {
    setClimates(undefined);
    if (!lat || !lon) {
      return;
    }

    const {data} = await getLocationByLatLng(lat, lon);
    const firstLocation = data.results.shift().locations.shift();

    setState(firstLocation.adminArea3);
    setCity(firstLocation.adminArea5);

    const currentClimate = await getCurrentClimates(lat, lon);
    setClimates(currentClimate.data);
  };

  const getClimates = () => {
    locationLatLonClimate();
    locationLatLonClimates();
  };

  useEffect(() => {
    locationLatLonClimate();
    locationLatLonClimates();
  }, [lat, lon]);

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
      {!lat || !lon ? (
        <Error />
      ) : climate ? (
        <>
          <TemperatureCard
            min={`${Math.trunc(climate.main.temp_min)}°C`}
            max={`${Math.trunc(climate.main.temp_max)}°C`}
            date={format(Date.now(), 'dd, MMM yy', {locale: pt})}
            temperature={`${Math.trunc(climate.main.temp)}°C` || 'Carregando'}
            currentCity={city}
            currentState={state}
            cloud={climate.weather[0].description}
            wind={`${climate.wind.speed}` || 'Carregando'}
            humidity={`${climate.main.humidity}%` || 'Carregando'}
          />
          {climates?.daily &&
            climates.daily.map(
              (day, index) =>
                index > 0 && (
                  <InformationCard
                    key={day.dt}
                    primaryText={
                      format(day.dt * 1000, 'dd, MMMM, yyyy', {locale: pt}) ||
                      'Carregando'
                    }
                    secondaryText={
                      `${Math.trunc(day.temp.day)}°C` || 'Carregando'
                    }
                    iconName="calendar"
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
