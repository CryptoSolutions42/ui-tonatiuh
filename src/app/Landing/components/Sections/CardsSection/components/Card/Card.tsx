import React, { FC } from 'react';
import { CardType } from '../../types';
import { SH1, Body3 } from '../../../../../../../components/Base';
import { DescriptionCard, ImageCard, InfoWrapper, StyledCard, TitleCard } from './styled';
import { Icon } from '../Icon';

export const Card: FC<CardType> = ({ className, img, title, description, icon }) => {
  return (
    <StyledCard className={className}>
      <ImageCard src={img} />
      <InfoWrapper className={className}>
        <SH1>
          <TitleCard>{title}</TitleCard>
        </SH1>
        <Body3>
          <DescriptionCard className={className}>{description}</DescriptionCard>
        </Body3>
        {icon && <Icon image={icon.image} href={icon.href} />}
      </InfoWrapper>
    </StyledCard>
  );
};
