import React, { FC } from 'react';
import { Section } from '../../../../../components/Section';
import { H1 } from '../../../../../components/Base';
import { Card } from '../CardsSection/components/Card';
import { StyledImgBlock, StyledInfoBlock, StyledInfoSection, StyledPrivacyLabel } from './styled';
import { InfoSectionType } from '../../../types';

export const InfoSection: FC<InfoSectionType> = ({ firstHead, additionInfo, cardsInfoSection }) => {
  return (
    <Section
      children={
        <StyledInfoSection>
          <StyledInfoBlock padding="20px">
            {typeof firstHead === 'string' ? (
              <H1>{firstHead}</H1>
            ) : (
              <H1>
                {firstHead.head}
                <br />
                <span className="colorize">{firstHead.colorizeHead}</span>
              </H1>
            )}
            <StyledImgBlock className="align-self">
              {additionInfo.map(({ name, logoPartner }, index) => (
                <StyledPrivacyLabel key={`privacy_label-${index}`}>
                  <p>{name}</p>
                  <img src={logoPartner} />
                </StyledPrivacyLabel>
              ))}
            </StyledImgBlock>
          </StyledInfoBlock>
          <StyledInfoBlock className="col-rev">
            {cardsInfoSection.map(({ img, title, description }, index) => (
              <Card
                className="info-card"
                key={`card_info-${index}`}
                img={img}
                title={title}
                description={description}
              />
            ))}
          </StyledInfoBlock>
        </StyledInfoSection>
      }
    />
  );
};
