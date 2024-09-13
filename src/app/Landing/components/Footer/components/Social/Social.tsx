import React, { FC } from 'react';
import { StyledSocial } from './styled/Social.styled';
import { SocFooterPropsType } from '../../../../types';

export const Social: FC<SocFooterPropsType> = ({ socials }) => {
  return (
    <StyledSocial {...{}}>
      {socials.map(({ imgUrl, altText }, index) => (
        <img key={`soc_icon-${index}`} src={imgUrl} alt={altText} />
      ))}
    </StyledSocial>
  );
};
