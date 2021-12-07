import styled from 'styled-components/native';
import theme from '#/global/styles/theme';

export const PText = styled.Text<{center: boolean}>`
  font-size: 16px;
  color: white;
  text-align: ${({center}) => center && `center`};
  font-family: ${theme.typography.regular};
`;
