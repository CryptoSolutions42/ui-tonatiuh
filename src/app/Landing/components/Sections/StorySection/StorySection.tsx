import React, { FC } from 'react';
import { Section } from '../../../../../components/Section';
import { H2, Body2 } from '../../../../../components/Base/Text';
import { Card } from '../CardsSection/components/Card';
import { StyledStorySection, StyledStorySectionContent } from './styled';
import { StorySectionType } from '../../../types';

export const StorySection: FC<StorySectionType> = ({ head, description, directCards }) => {
  return (
    <Section
      children={
        <StyledStorySection>
          <StyledStorySectionContent>
            <H2>{head}</H2>
            <Body2>{description}</Body2>
          </StyledStorySectionContent>
          <StyledStorySectionContent isCard={true}>
            {directCards.map((card, index) => (
              <Card
                className="direct-cart"
                key={`cart_direction-${index}`}
                img={card.img}
                title={card.title}
                description={card.description}
                icon={{ image: '/images/social/linkedin.svg', href: '#' }}
              />
            ))}
          </StyledStorySectionContent>
        </StyledStorySection>
      }
    />
  );
};
