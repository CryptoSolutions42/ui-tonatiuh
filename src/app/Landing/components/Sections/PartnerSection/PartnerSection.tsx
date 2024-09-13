import React, { FC } from 'react';
import { Section } from '../../../../../components/Section';
import { StyledPartnerSection } from './styled';
import { PartnerSectionType } from '../../../types';

export const PartnerSection: FC<PartnerSectionType> = ({ urlImgs }) => {
  return (
    <Section
      children={
        <StyledPartnerSection className="partners-logo">
          {urlImgs.map((partner) => (
            <img src={partner} />
          ))}
        </StyledPartnerSection>
      }
    />
  );
};
