import styled, {css} from 'styled-components/native';

interface ContainerProps {
  inverted?: boolean;
  color: string;
  small?: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  background-color: ${({inverted, color, small}) =>
    inverted ? 'transparent' : color};
  border-width: 1px;
  border-color: ${({inverted, color}) => (inverted ? color : 'transparent')};
  align-items: center;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  ${({small}) =>
    small
      ? css`
          flex: 1;
          margin: 0 4px;
          height: 46px;
          border-radius: 24px;
        `
      : css`
          height: 50px;
          border-radius: 10px;
        `};
  padding: 0 16px;
`;

export const TextButton = styled.Text<{
  inverted: boolean;
  color: string;
  disabled: boolean;
}>`
  color: ${({theme, inverted, color, disabled}) =>
    inverted ? color : disabled ? theme.colors.gray : theme.colors.white};
  font-size: 14px;
  position: absolute;
  text-align: center;
  align-self: center;
  font-family: ${({theme}) => theme.typography.bold};
  width: 100%;
  left: 24px;
`;
