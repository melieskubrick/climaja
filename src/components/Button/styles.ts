import styled, { css } from 'styled-components/native';

interface ContainerProps {
  inverted?: boolean;
  color: string;
  small?: boolean
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  background-color: ${({ inverted, color, small }) =>
    inverted ? 'transparent' : color};
  border-width: 1px;
  border-color: ${({ inverted, color }) => (inverted ? color : 'transparent')};
  align-items: center;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  ${({ small }) => small ? css`
  flex: 1;
  margin: 0 4px;
  height: 46px;
  border-radius: 24px;
  ` : css`
  margin: 8px 24px 0 24px;
  height: 56px;
  border-radius: 10px;
  ` } ;
  padding: 0 16px;

`;

export const TextButton = styled.Text<{ inverted: boolean; color: string; disabled: boolean }>`
  color: ${({ theme, inverted, color, disabled }) =>
    inverted ? color : disabled ? theme.colors.gray : theme.colors.white};
  font-size: 18px;
  position: absolute;
  text-align: center;
  align-self: center;
  width: 100%;
  left: 16px;
`;
