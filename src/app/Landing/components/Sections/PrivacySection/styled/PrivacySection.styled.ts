import styled from 'styled-components';

export const StyledPrivacySection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: -150px;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    width: 88%;
    div {
      margin-bottom: 25px;
    }
  }
`;

export const StyledPrivacySectionContent = styled.div`
  max-width: 600px;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }

  @media screen and (max-width: 428px) {
    div {
      width: 100%;
    }

    img {
      width: 100%;
    }
  }
`;
