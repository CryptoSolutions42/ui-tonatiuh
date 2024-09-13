import { FC, useState } from 'react';
import { StyledMenu } from '../../../app/Landing/components/Header/components/MobileMenu/styled';
import { MobileMenuType } from '../../../app/Landing/types';

export const Menu: FC<MobileMenuType> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openOrCloseMobileMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <StyledMenu onClick={openOrCloseMobileMenu}>
      <img
        style={{ zIndex: 1000, padding: '36px' }}
        src={!isOpen ? '/images/icons/menu.svg' : '/images/icons/close.svg'}
        alt="menu"
      />
      <div style={{ height: '100%', width: '100%' }} className="wrapperMenu">
        {isOpen && children}
      </div>
    </StyledMenu>
  );
};
