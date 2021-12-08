import React from 'react';

import {Container, Row, Temperature, Vw, Cloud} from './styles';

import PrimaryText from '../PrimaryText';
import SecondaryText from '../SecondaryText';
import Info from '../Info';
import {getCurrentCloud} from '#/utils/helpers/climate';

interface MainCardProps {
  date: string;
  temperature: string;
  currentCity: string;
  currentState: string;
  cloud: string;
  min: string;
  max: string;
  wind: string;
  humidity: string;
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
  humidity,
}: MainCardProps) => {
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
        <Cloud source={getCurrentCloud(cloud)} />
      </Row>
      <Row>
        <Info
          infoTitle="Temp. min"
          infoDescription={min}
          iconName="thermometer"
        />
        <Info
          infoTitle="Temp. max"
          infoDescription={max}
          iconName="thermometer"
        />
      </Row>
      <Row>
        <Info infoTitle="Vento" infoDescription={wind} iconName="wind" />
        <Info
          infoTitle="Umidade"
          infoDescription={humidity}
          iconName="droplet"
        />
      </Row>
    </Container>
  );
};

export default TemperatureCard;
