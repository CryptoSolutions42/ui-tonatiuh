import styled from 'styled-components';

export const StyledComplianceSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  margin-top: -150px;
  width: 100%;

  @media screen and (max-width: 1100px) {
    flex-direction: column-reverse;
    margin: 0;
  }

  @media screen and (max-width: 428px) {
  }
`;

export const StyledComplianceSectionContent = styled.div`
  padding: 50px;

  @media screen and (max-width: 1100px) {
    padding: 25px;

    img {
      width: 95%;
    }
  }

  @media screen and (max-width: 428px) {
    div {
      margin-bottom: 20px;
    }
  }
`;

export const StyledContent = styled.div`
  margin-bottom: 20px;
`;
