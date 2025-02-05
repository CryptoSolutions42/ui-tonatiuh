import { LandingOption } from '../../content/types';

export type LandingOptionType = {
  content: LandingOption;
};

export type NavMenuType = {
  title: string;
  path: string;
};

export type NavMenuPropsType = {
  menu: NavMenuType[];
};

export type LogoPropsType = {
  logo: string;
  altText: string;
  borderRight?: string;
};

export type MobileMenuType = {
  children: JSX.Element;
};

export type HeaderOptionType = {
  logo: LogoType;
  navMenu: NavMenuType[];
  button: ButtonOptionType;
  isMobile: boolean;
};

export type ButtonOptionType = {
  buttonName: string;
  buttonType: TypeButton;
  customProps?: {
    [key: string]: string;
  };
};

export type LogoType = Pick<LogoPropsType, 'altText'> & {
  url: string;
};

export type FooterOptionType = Pick<HeaderOptionType, 'logo'> & {
  companyName: string;
  socials: SocialFooterType[];
};

export type SocFooterPropsType = {
  socials: SocialFooterType[];
};

export type SocialFooterType = {
  imgUrl: string;
  altText: string;
};

export type HelloSectionType = {
  helloSectionContent: HelloType;
  bigLogoForSection: BigLogoType;
  isButtonConnect: boolean;
  button: ButtonOptionType;
};

export type PartnerSectionType = {
  urlImgs: string[];
};

export type CardSectionType = {
  cards: CardsType[];
};

export type InfoSectionType = {
  firstHead:
    | string
    | {
        head: string;
        colorizeHead: string;
      };
  additionInfo: AdditionInfo[];
  cardsInfoSection: CardsType[];
};

export type HinkalSDKSectionType = {
  firstBlock: BlockSection;
  secondBlock: BlockSection;
};

export type BlockSection = Pick<HelloSectionType, 'button'> & {
  head: string;
  description: DescriptionType;
  isArrowIconInButton: boolean;
};

export type PrivacySectionType = Pick<CardsType, 'img'> & HelloType;

export type ComplianceSectionType = PrivacySectionType & Pick<BlockSection, 'button' | 'isArrowIconInButton'>;

export type StorySectionType = Pick<BlockSection, 'head' | 'description'> & {
  directCards: CardsType[];
};

type AdditionInfo = {
  name: string;
  logoPartner: string;
};

type CardsType = {
  img: string;
  title: string;
  description: DescriptionType;
};

type HelloType = {
  head: string;
  description: DescriptionType;
};

type BigLogoType = SocialFooterType;

export type DescriptionType = string | JSX.Element;

export type TypeButton = 'primary-l' | 'primary-b' | 'secondary-l' | 'secondary-b';

export type ButtonType = {
  children: JSX.Element | string | any;
  handleClick: () => void;
  type: TypeButton;
  disabled?: boolean;
  width?: string;
};
