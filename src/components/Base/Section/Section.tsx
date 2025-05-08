import React, { FC } from 'react';
import { StyledSection } from './styled';
import { SectionType } from './types';

export const Section: FC<SectionType> = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};
