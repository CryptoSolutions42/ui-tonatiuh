import React, { FC } from 'react';
import { Button } from '../../../../components/Base/Button';
import { Logo } from '../../../../components/Base/Logo';

import { MobileMenu } from './components/MobileMenu';
import { NavMenu } from './components/NavMenu/NavMenu';
import { StyledLangAndButton, StyledHeader, StyledMobileHeader } from './styled';
import { HeaderOptionType } from '../../types';
import { SelectLanguageContainer } from '../../../../components/Base/SelectLanguage';

export const Header: FC<HeaderOptionType> = ({ logo, navMenu, button, isMobile }) => {
  return (
    <div>
      <StyledHeader>
        <Logo logo={logo.url} altText={logo.altText} borderRight={'1px solid white'} />
        <NavMenu menu={navMenu} />
        <StyledLangAndButton>
          <SelectLanguageContainer />
          <div style={{ display: 'flex', alignItems: 'center', width: '100vw' }}>
            <Button
              typeButton={button.buttonType}
              children={button.buttonName}
              handleClick={() => {
                console.log('Click!');
              }}
            />
          </div>
        </StyledLangAndButton>
      </StyledHeader>
      {isMobile && (
        <StyledMobileHeader>
          <MobileMenu />
        </StyledMobileHeader>
      )}
    </div>
  );
};
