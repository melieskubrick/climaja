import theme from '#/global/styles/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.grayDark};
  justify-content: center;
  padding: 24px;
`;

export const Logo = styled.Image`
  align-self: center;
`;

export const Texts = styled.View`
  margin: 40px 0;
`;
