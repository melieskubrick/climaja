import React, { ReactNode } from 'react';

import { PText } from './styles';

interface PrimaryTextProps {
  children: ReactNode;
  center?: boolean
}

const PrimaryText = ({children, center}: PrimaryTextProps) => {
  return <PText center={center}>{children}</PText>;
};

export default PrimaryText;
