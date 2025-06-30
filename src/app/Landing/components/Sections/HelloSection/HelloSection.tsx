import React, { FC } from 'react';
import { StyledHelloInfo, StyledHelloSection, HeadDescriptionWrapper } from './styled';
import { HelloSectionType } from '../../../types';
import { H1, Body2, Button, Section } from '../../../../../components/Base';

const defaultButtonName = (
  <div
    style={{
      margin: 0,
      display: 'flex',
      gap: '10px',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    Make a Transaction
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.3119 7.99106L12.3288 4.00876L13.3787 2.95898L19.1544 8.73347L13.3787 14.508L12.3288 13.4582L16.3119 9.47588H0.273438V7.99106H16.3119Z"
        fill="white"
      />
    </svg>
  </div>
);
export const HelloSection: FC<HelloSectionType> = ({
  helloSectionContent,
  bigLogoForSection,
  isButtonConnect,
  button,
}) => {
  return (
    <Section
      children={
        <StyledHelloSection>
          <StyledHelloInfo>
            <HeadDescriptionWrapper>
              <H1 color="white">{helloSectionContent.head}</H1>
              <Body2 color="white">{helloSectionContent.description}</Body2>
            </HeadDescriptionWrapper>
            {isButtonConnect && (
              <Button
                typeButton={button.buttonType}
                children={button.buttonName ?? defaultButtonName}
                handleClick={() => {
                  console.log('Click!');
                }}
              />
            )}
          </StyledHelloInfo>
          <img src={bigLogoForSection.imgUrl} alt={bigLogoForSection.altText} />
        </StyledHelloSection>
      }
    />
  );
};
