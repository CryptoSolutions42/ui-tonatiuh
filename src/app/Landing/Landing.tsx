import React, { FC } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import {
  HelloSection,
  PartnerSection,
  CardsSection,
  InfoSection,
  HinkalSDKSection,
  PrivacySection,
  ComplianceSection,
  StorySection,
} from './components/Sections';
import { StyledBodyLanding, StyledLandingPage, StyledContent, SideBarWrapper, BodyWrapper } from './styled';
import { LandingOptionType } from './types';

export const Landing: FC<LandingOptionType> = ({ content }) => {
  const { header, sections, footer } = content;
  const {
    helloSectionOption,
    partnerSectionOption,
    cardsSectionOption,
    infoSectionOption,
    hinkalSDKSectionOption,
    privacySectionOption,
    complianceSectionOption,
    storySectionOption,
  } = sections;

  return (
    <StyledLandingPage className={'landing'}>
      <StyledContent>
        <Header {...header} />
        <BodyWrapper>
          <SideBarWrapper>
            <SideBar />
          </SideBarWrapper>
          <StyledBodyLanding>
            <span id="hello" />
            <HelloSection {...helloSectionOption} />
            <PartnerSection {...partnerSectionOption} />
            <span id="cards" />
            <CardsSection {...cardsSectionOption} />
            <InfoSection {...infoSectionOption} />
            <span id="hinkalsdk" />
            <HinkalSDKSection {...hinkalSDKSectionOption} />
            <span id="privacy" />
            <PrivacySection {...privacySectionOption} />
            <ComplianceSection {...complianceSectionOption} />
            <span id="story" />
            <StorySection {...storySectionOption} />
          </StyledBodyLanding>
        </BodyWrapper>
        <Footer {...footer} />
      </StyledContent>
    </StyledLandingPage>
  );
};
