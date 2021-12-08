import theme from '#/global/styles/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.grayLight};
  border-radius: 10px;
  margin: 8px 0;
  padding: 16px 24px 24px 24px;
  flex-direction: row;
  align-items: center;
`;

export const Cloud = styled.Image`
  width: 60px;
  height: 60px;
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
