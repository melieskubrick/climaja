import theme from '#/global/styles/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
  width: 50%;
`;

export const ContainerIcon = styled.View`
  padding: 8px;
  background-color: ${theme.colors.grayLightSecondary};
  height: 50px;
  width: 50px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`;

export const Texts = styled.View``;

export const InfoTitle = styled.Text`
  font-size: 14px;
  color: white;
  font-family: ${theme.typography.light};
`;

export const InfoDescription = styled.Text`
  font-size: 20px;
  color: white;
  font-family: ${theme.typography.bold};
`;
