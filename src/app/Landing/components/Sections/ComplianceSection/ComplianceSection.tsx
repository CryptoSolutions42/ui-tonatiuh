import React, { FC } from 'react';

import {
  StyledComplianceSection,
  StyledComplianceSectionContent,
  StyledContent,
} from './styled/ComplianceSection.styled';
import { ComplianceSectionType } from '../../../types';
import { Section } from '../../../../../components';
import { H3, Body3, Button } from '../../../../../components/Base';

const getButtonName = (name: string, isArrowIconInButton: boolean) =>
  isArrowIconInButton ? (
    <div
      style={{
        margin: 0,
        display: 'flex',
        gap: '10px',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
      }}
    >
      {name}
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.3119 7.99106L12.3288 4.00876L13.3787 2.95898L19.1544 8.73347L13.3787 14.508L12.3288 13.4582L16.3119 9.47588H0.273438V7.99106H16.3119Z"
          fill="white"
        />
      </svg>
    </div>
  ) : (
    name
  );
export const ComplianceSection: FC<ComplianceSectionType> = ({
  img,
  head,
  description,
  button,
  isArrowIconInButton,
}) => {
  return (
    <Section
      children={
        <StyledComplianceSection>
          <StyledComplianceSectionContent>
            <StyledContent>
              <H3>{head}</H3>
              <Body3>{description}</Body3>
            </StyledContent>
            <Button
              width="150px"
              handleClick={() => console.log('click')}
              type={button.buttonType}
              children={getButtonName(button.buttonName, isArrowIconInButton)}
            />
          </StyledComplianceSectionContent>
          <StyledComplianceSectionContent>
            <img src={img} />
          </StyledComplianceSectionContent>
        </StyledComplianceSection>
      }
    />
  );
};
