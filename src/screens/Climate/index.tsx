import Error from '#/components/Error';
import InformationCard from '#/components/InformationCard';
import TemperatureCard from '#/components/TemperatureCard';
import React from 'react';

import {Container} from './styles';

const Climate: React.FC = () => {

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
