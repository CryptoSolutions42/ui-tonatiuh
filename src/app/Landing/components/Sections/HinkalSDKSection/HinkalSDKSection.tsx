import React, { FC } from 'react';
import { Section } from '../../../../../components';
import { Button, SH1, Body3 } from '../../../../../components/Base';
import { HorizonOrVerticalLine, StyledContentWrapper, StyledHinkalSDKSection } from './styled';
import { HinkalSDKSectionType } from '../../../types';

const buttonName = (name: string) => (
  <div
    style={{
      margin: 0,
      display: 'flex',
      gap: '10px',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    {name === 'Become Integration Partner' ? 'Become Integration Partner' : 'Become KYC partner'}
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.3119 7.99106L12.3288 4.00876L13.3787 2.95898L19.1544 8.73347L13.3787 14.508L12.3288 13.4582L16.3119 9.47588H0.273438V7.99106H16.3119Z"
        fill="white"
      />
    </svg>
  </div>
);

export const HinkalSDKSection: FC<HinkalSDKSectionType> = ({ firstBlock, secondBlock }) => {
  const firstButton = firstBlock.button;
  const secondButton = secondBlock.button;

  return (
    <Section
      children={
        <StyledHinkalSDKSection>
          <StyledContentWrapper>
            <SH1 color="white">{firstBlock.head}</SH1>
            <Body3 color="white" {...{ paddingBottom: '25px' }}>
              {firstBlock.description}
            </Body3>
            <Button
              children={firstBlock.isArrowIconInButton ? buttonName(firstButton.buttonName) : firstButton.buttonName}
              handleClick={() => {
                console.log('Click!');
              }}
              typeButton={firstButton.buttonType}
            />
          </StyledContentWrapper>
          <HorizonOrVerticalLine />
          <StyledContentWrapper>
            <SH1 color="white">{secondBlock.head}</SH1>
            <Body3 color="white" {...{ paddingBottom: '25px' }}>
              {secondBlock.description}
            </Body3>
            <Button
              children={secondBlock.isArrowIconInButton ? buttonName(secondButton.buttonName) : secondButton.buttonName}
              handleClick={() => {
                console.log('Click!');
              }}
              typeButton={secondButton.buttonType}
            />
          </StyledContentWrapper>
        </StyledHinkalSDKSection>
      }
    />
  );
};
