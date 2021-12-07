import styled from 'styled-components/native';

export const PText = styled.Text<{center: boolean}>`
  font-size: 24px;
  color: white;
  text-align: ${({center}) => center && `center`};
`;
