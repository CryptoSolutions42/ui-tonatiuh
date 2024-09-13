import { DescriptionType } from '../../../types';

export type CardType = {
  img: string;
  title: string;
  description: DescriptionType;
  className?: string;
  icon?: IconCardType;
};

export type IconCardType = {
  image: string;
  href: string;
};
