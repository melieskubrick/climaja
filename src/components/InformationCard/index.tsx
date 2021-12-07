import React from 'react';
import Info from '../Info';
import PrimaryText from '../PrimaryText';
import SecondaryText from '../SecondaryText';

import {Container} from './styles';

interface InformationCardProps {
  primaryText: string;
  secondaryText: string;
  iconName: string
}

const InformationCard = ({
  primaryText,
  secondaryText,
  iconName
}: InformationCardProps) => {
  return (
    <Container>
      <Info infoTitle={primaryText} infoDescription={secondaryText} iconName={iconName} />
    </Container>
  );
};

export default InformationCard;
