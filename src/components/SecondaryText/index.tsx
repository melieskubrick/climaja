import React, { ReactNode } from 'react';

import { PText } from './styles';

interface SecondaryTextProps {
  children: ReactNode;
  center?: boolean
}

const SecondaryText = ({children, center}: SecondaryTextProps) => {
  return <PText center={center}>{children}</PText>;
};

export default SecondaryText;
