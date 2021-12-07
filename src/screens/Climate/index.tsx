import TemperatureCard from '#/components/TemperatureCard';
import React from 'react';

import {Container} from './styles';

const Climate: React.FC = () => {
  return (
    <Container>
      <TemperatureCard minMax='26°C - 32°C' day="Hoje" date="Sab, 3 ago" temperature="30°C" currentLocation='Fortaleza' />
    </Container>
  );
};

export default Climate;
