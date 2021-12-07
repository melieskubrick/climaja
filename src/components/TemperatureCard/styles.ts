import theme from '#/global/styles/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${theme.colors.grayLight};
  border-radius: 10px;
  padding: 24px;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Vw = styled.View``

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Temperature = styled.Text`
  font-size: 40px;
  color: white;
  font-family: ${theme.typography.bold};
`;

export const Cloud = styled.Image``
