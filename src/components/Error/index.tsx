import React from 'react';
import PrimaryText from '../PrimaryText';
import SecondaryText from '../SecondaryText';

import {Container, ErrorImage} from './styles';

const Error: React.FC = () => {
  return (
    <Container>
      <ErrorImage source={require('#/assets/images/error.png')} />
      <PrimaryText center>Opsss!</PrimaryText>
      <SecondaryText center>
        Você precisa permitir acesso a sua localização para ter acesso ao clima
      </SecondaryText>
    </Container>
  );
};

export default Error;
