import React, { useLayoutEffect } from 'react';

import {Container, NavButton} from './styles';

import Error from '#/components/Error';
import Feather from '#/components/Feather';
import InformationCard from '#/components/InformationCard';
import TemperatureCard from '#/components/TemperatureCard';

const Climate: React.FC = ({navigation}: any) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <NavButton onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color='white' />
        </NavButton>
      ),
    });
  }, [navigation]);

  return (
    <Container contentContainerStyle={{paddingTop: 8}}>
      <TemperatureCard
        minMax="26°C - 32°C"
        day="Hoje"
        date="Sab, 3 ago"
        temperature="30°C"
        currentLocation="Fortaleza"
      />
      <InformationCard primaryText='Descrição' secondaryText='Céu limpo' />
      <InformationCard primaryText='Sensação térmica' secondaryText='100' />
      {/* <Error /> */}
    </Container>
  );
};

export default Climate;
