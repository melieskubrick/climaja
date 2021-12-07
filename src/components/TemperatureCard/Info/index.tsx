import Feather from '#/components/Feather';
import React from 'react';

import {
  Container,
  ContainerIcon,
  InfoTitle,
  InfoDescription,
  Texts,
} from './styles';

interface InfoProps {
  iconName: string;
  infoTitle: string;
  infoDescription: string;
}

const Info = ({iconName, infoTitle, infoDescription}: InfoProps) => {
  return (
    <Container>
      <ContainerIcon>
        <Feather name={iconName} size={22} color="white" />
      </ContainerIcon>
      <Texts>
        <InfoTitle>{infoTitle}</InfoTitle>
        <InfoDescription>{infoDescription}</InfoDescription>
      </Texts>
    </Container>
  );
};

export default Info;
