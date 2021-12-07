import Button from '#/components/Button';
import PrimaryText from '#/components/PrimaryText';
import SecondaryText from '#/components/SecondaryText';
import theme from '#/global/styles/theme';
import React from 'react';

import {Container, Logo, Texts} from './styles';

const Welcome: React.FC = ({navigation}: any) => {
  return (
    <Container>
      <Logo source={require('#/assets/images/partlyCloudy.png')} />
      <Texts>
        <PrimaryText center>ClimaJá</PrimaryText>
        <SecondaryText center>
          Descubra o clima da sua região agora! Permita sua localização abaixo
        </SecondaryText>
      </Texts>
      <Button onPress={() => navigation.navigate('Climate')} textButton='Permitir localização' color={theme.colors.yellow}></Button>
    </Container>
  );
};

export default Welcome;
