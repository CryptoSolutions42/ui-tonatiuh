import styled from 'styled-components';

export const StyledLandingPage = styled.div``;

export const StyledContent = styled.div`
  display: grid;
  grid-template-rows: 110px 1fr 110px;
`;

export const StyledBodyLanding = styled.div`
  display: flex;
  margin-top: 110px;
  height: max-content;
  width: 100%;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 980px) {
    margin: 0 auto;
  }
`;

export const SideBarWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  border-right: 1px solid white;
`;

export const BodyWrapper = styled.div`
  display: grid;
  grid-template-columns: 130px 1fr;

  @media screen and (max-width: 980px) {
    display: flex;
  }
`;
