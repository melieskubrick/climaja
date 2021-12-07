import React from 'react';
import PrimaryText from '../PrimaryText';
import SecondaryText from '../SecondaryText';

import {Container, Row, Temperature, MinMax, Vw, Cloud} from './styles';

interface MainCardProps {
  day: string;
  date: string;
  temperature: string;
  minMax: string;
  currentLocation: string
}

const TemperatureCard = ({day, date, temperature, minMax, currentLocation}: MainCardProps) => {

  return (
    <Container>
      <Row>
        <PrimaryText>{day}</PrimaryText>
        <SecondaryText>{date}</SecondaryText>
      </Row>
      <Row>
        <Vw>
          <Temperature>{temperature}</Temperature>
          <MinMax>{minMax}</MinMax>
        </Vw>
        <Cloud source={require('#/assets/images/partlyCloudy.png')} />
      </Row>
      <SecondaryText>{currentLocation}</SecondaryText>
    </Container>
  );
};

export default TemperatureCard;
