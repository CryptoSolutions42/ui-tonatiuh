import React, { FC } from 'react';
import { IconCardType } from '../../types';
import { StyledCardIcon } from './styled';

export const Icon: FC<IconCardType> = ({ image, href }) => {
  return (
    <StyledCardIcon href={href}>
      <img src={image} />
    </StyledCardIcon>
  );
};
