import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavMenuPropsType } from '../../../../types';
import { StyledNavMenu } from './styled/NavMenu.styled';

export const NavMenu: FC<NavMenuPropsType> = ({ menu }) => {
  const navigate = useNavigate();

  return (
    <StyledNavMenu>
      {menu.map((element, index) => {
        return (
          <div key={`nav_menu-${index}`} onClick={() => navigate(element.path)}>
            {element.title}
          </div>
        );
      })}
    </StyledNavMenu>
  );
};
