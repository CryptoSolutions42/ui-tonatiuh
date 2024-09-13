import {
  CardSectionType,
  ComplianceSectionType,
  FooterOptionType,
  HeaderOptionType,
  HelloSectionType,
  HinkalSDKSectionType,
  InfoSectionType,
  PartnerSectionType,
  PrivacySectionType,
  StorySectionType,
} from '../app/Landing/types';

export type LandingOption = {
  sections: SectionOptions;
  header: HeaderLandingType;
  footer: FooterLandingType;
};

type SectionOptions = {
  helloSectionOption: HelloSectionType;
  partnerSectionOption: PartnerSectionType;
  cardsSectionOption: CardSectionType;
  infoSectionOption: InfoSectionType;
  hinkalSDKSectionOption: HinkalSDKSectionType;
  privacySectionOption: PrivacySectionType;
  complianceSectionOption: ComplianceSectionType;
  storySectionOption: StorySectionType;
};

type HeaderLandingType = HeaderOptionType;
type FooterLandingType = FooterOptionType; //TODO write
