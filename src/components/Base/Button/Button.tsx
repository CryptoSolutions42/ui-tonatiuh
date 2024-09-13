import React, { FC } from 'react';
import { StyledButton } from './styled';
import { ButtonType } from '../../../app/Landing/types';

export const Button: FC<ButtonType> = ({ children, handleClick, type, disabled, width }) => {
  return (
    <StyledButton {...{ disabled: disabled, type: type, width: width }} onClick={handleClick}>
      {children}
    </StyledButton>
  );
};
