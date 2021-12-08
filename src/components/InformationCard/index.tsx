import React from 'react';
import {getCurrentCloud} from '#/utils/helpers/climate';

import {Container, Cloud, InfoTitle, InfoDescription, Texts} from './styles';

interface InformationCardProps {
  primaryText: string;
  secondaryText: string;
  cloud: string;
}

const InformationCard = ({
  primaryText,
  secondaryText,
  cloud,
}: InformationCardProps) => {
  return (
    <Container>
      <Cloud source={getCurrentCloud(cloud)} />
      <Texts>
        <InfoTitle>{primaryText}</InfoTitle>
        <InfoDescription>{secondaryText}</InfoDescription>
      </Texts>
    </Container>
  );
};

export default InformationCard;
