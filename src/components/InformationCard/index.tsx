import React from 'react';
import PrimaryText from '../PrimaryText';
import SecondaryText from '../SecondaryText';

import {Container} from './styles';

interface InformationCardProps {
  primaryText: string;
  secondaryText: string;
}

const InformationCard = ({
  primaryText,
  secondaryText,
}: InformationCardProps) => {
  return (
    <Container>
      <PrimaryText>{primaryText}</PrimaryText>
      <SecondaryText>{secondaryText}</SecondaryText>
    </Container>
  );
};

export default InformationCard;
