import React, { FC } from 'react';
import { Logo, Body3 } from '../../../../components/Base';
import { Social } from './components/Social';
import { StyledFooter } from './styled';
import { FooterOptionType } from '../../types';

export const Footer: FC<FooterOptionType> = ({ logo, companyName, socials }) => {
  return (
    <StyledFooter>
      <Logo borderRight="1px solid white" logo={logo.url} altText={logo.altText} />
      <Body3 color="white" textAlign="center">
        {companyName}
      </Body3>
      <Social socials={socials} />
    </StyledFooter>
  );
};
