import React, { FC } from 'react';
import { Section } from '../../../../../components/Base';
import { Card } from './components/Card';
import { StyledCardsSection } from './styled';
import { CardSectionType } from '../../../types';

export const CardsSection: FC<CardSectionType> = ({ cards }) => {
  return (
    <Section
      children={
        <StyledCardsSection>
          {cards.map(({ img, title, description }, index) => (
            <Card key={`card_id-${index}`} img={img} title={title} description={description} />
          ))}
        </StyledCardsSection>
      }
    />
  );
};
