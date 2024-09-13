import styled from 'styled-components';

export const StyledHeader = styled.div`
  width: 100vw;
  height: 110px;
  position: absolute;
  top: 0;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 130px 1fr 1fr;
  border-bottom: 1px solid white;

  @media screen and (max-width: 980px) {
    display: none;
  }
`;

export const StyledMobileHeader = styled.div`
  display: none;

  @media screen and (max-width: 980px) {
    width: 100vw;
    height: 110px;
    position: absolute;
    top: 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid white;
  }
`;

export const StyledLangAndButton = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HeaderWrapper = styled.div`
  @media screen and (max-width: 980px) {
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
`;
