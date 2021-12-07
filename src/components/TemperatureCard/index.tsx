import React from 'react';
import PrimaryText from '../PrimaryText';
import SecondaryText from '../SecondaryText';

import {Container, Row, Temperature, MinMax, Vw, Cloud} from './styles';

interface MainCardProps {
  day: string;
  date: string;
  temperature: string;
  minMax: string;
  currentLocation: string;
  cloud: string;
}

const TemperatureCard = ({
  day,
  date,
  temperature,
  minMax,
  currentLocation,
  cloud,
}: MainCardProps) => {
  const currentCloud = () => {
    switch (cloud) {
      case 'broken clouds':
        return require('#/assets/images/partlyCloudy.png');
      case 'scattered clouds':
        return require('#/assets/images/partlyCloudy.png');
      case 'mist':
        return require('#/assets/images/snowy.png');
      case 'clear sky':
        return require('#/assets/images/sunny.png');
      case 'rain and drizzle':
        return require('#/assets/images/rainThunder.png');
      case 'light intensity drizzle':
        return require('#/assets/images/rainy.png');
      default:
        break;
    }
  };

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
        <Cloud source={currentCloud()} />
      </Row>
      <SecondaryText>{currentLocation}</SecondaryText>
    </Container>
  );
};

export default TemperatureCard;
