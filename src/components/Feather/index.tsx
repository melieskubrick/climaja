import React from 'react';
import { IconContainer } from './styles';

interface FeatherProps {
  name: string;
  size: number;
  color: string;
}

const Feather: React.FC<FeatherProps> = ({
  name,
  size,
  color,
}: FeatherProps) => <IconContainer name={name} size={size} color={color} />;

export default Feather;
