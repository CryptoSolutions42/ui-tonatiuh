import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { navMenu } from '../NavMenu/content';
import { StyledMobileMenu } from './styled';
import { Menu, Button } from '../../../../../../components/Base';
import { SelectLanguageContainer } from '../../../../../../components/Base/SelectLanguage';

export const MobileMenu: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Menu
        children={
          <StyledMobileMenu>
            {navMenu.map((element, index) => (
              <Button
                key={`mobile_menu-${index}`}
                children={element.title}
                typeButton={'primary-l'}
                handleClick={() => {
                  navigate(element.path);
                }}
              />
            ))}
          </StyledMobileMenu>
        }
      />
      <SelectLanguageContainer />
    </>
  );
};
