import React from 'react';

import {Container, Row, Temperature, Vw, Cloud} from './styles';

import PrimaryText from '../PrimaryText';
import SecondaryText from '../SecondaryText';
import Info from '../Info';

interface MainCardProps {
  date: string;
  temperature: string;
  currentCity: string;
  currentState: string;
  cloud: string;
  min: string;
  max: string;
  wind: string
  humidity: string
}

const TemperatureCard = ({
  date,
  temperature,
  currentCity,
  currentState,
  cloud,
  min,
  max,
  wind,
  humidity
}: MainCardProps) => {
  const currentCloud = () => {
    switch (cloud) {
      case 'broken clouds':
        return require('#/assets/images/partlyCloudy.png');
      case 'scattered clouds':
        return require('#/assets/images/partlyCloudy.png');
      case 'mist':
        return require('#/assets/images/snowy.png');
      case 'haze':
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
        <PrimaryText>{currentCity}</PrimaryText>
        <SecondaryText>{date}</SecondaryText>
      </Row>
      <SecondaryText>{currentState}</SecondaryText>
      <Row>
        <Vw>
          <Temperature>{temperature}</Temperature>
        </Vw>
        <Cloud source={currentCloud()} />
      </Row>
      <Row>
        <Info infoTitle="Temp. min" infoDescription={min} iconName="thermometer" />
        <Info infoTitle="Temp. max" infoDescription={max} iconName="thermometer" />
      </Row>
      <Row>
        <Info infoTitle="Vento" infoDescription={wind} iconName="wind" />
        <Info infoTitle="Umidade" infoDescription={humidity} iconName="droplet" />
      </Row>
    </Container>
  );
};

export default TemperatureCard;
