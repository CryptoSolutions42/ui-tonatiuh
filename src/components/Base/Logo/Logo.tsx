import React, { FC } from 'react';
import { LogoPropsType } from '../../../app/Landing/types';
import { StyledLogo } from './styled/Logo.styled';

export const Logo: FC<LogoPropsType> = ({ logo, altText, borderRight }) => {
  return (
    <StyledLogo className="logo" borderRight={borderRight}>
      <img src={logo} alt={altText} />
    </StyledLogo>
  );
};
