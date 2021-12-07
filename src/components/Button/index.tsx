/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import React, { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, TextButton } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  textButton: string;
  inverted?: boolean;
  color: string;
  children?: ReactNode;
  disabled?: boolean;
  small?: boolean
}

const Button: React.FC<ButtonProps> = ({
  textButton,
  inverted = false,
  color,
  children,
  disabled = false,
  small = false,
  ...rest
}: ButtonProps) => {
  return (
    <Container small={small} disabled={disabled} color={color} inverted={inverted} {...rest}>
      {children}
      <TextButton disabled={disabled} color={color} inverted={inverted}>
        {textButton}
      </TextButton>
    </Container>
  );
};

export default Button;
