import React, { FC } from 'react';
import { SH1, Body2, Section } from '../../../../../components/Base';
import { StyledPrivacySection, StyledPrivacySectionContent } from './styled';
import { PrivacySectionType } from '../../../types';

export const PrivacySection: FC<PrivacySectionType> = ({ img, head, description }) => {
  return (
    <Section
      children={
        <StyledPrivacySection>
          <StyledPrivacySectionContent>
            <img src={img} />
          </StyledPrivacySectionContent>
          <StyledPrivacySectionContent>
            <SH1>{head}</SH1>
            <Body2>{description}</Body2>
          </StyledPrivacySectionContent>
        </StyledPrivacySection>
      }
    />
  );
};
