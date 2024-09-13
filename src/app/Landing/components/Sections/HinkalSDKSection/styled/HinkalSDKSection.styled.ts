import styled from 'styled-components';

export const StyledHinkalSDKSection = styled.div`
  width: 100vw;
  height: 420px;
  background: linear-gradient(240.91deg, #98a0eb 15.14%, #fc81ff 133.61%);
  margin: -150px 0 0 0;

  display: flex;
  -webkit-box-align: center;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 980px) {
    flex-flow: column;
    justify-content: center;
    align-items: center;
    align-content: flex-start;
    height: max-content;
    padding-top: 70px;
    padding-bottom: 70px;
  }
`;

export const StyledContentWrapper = styled.div`
  color: white;
  width: 30%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
  gap: 10px;

  @media screen and (max-width: 980px) {
    width: 86%;
    display: block;
  }
`;

export const HorizonOrVerticalLine = styled.span`
  margin: 70px 0 70px 0;
  background: white;
  width: 1px;
  height: 85%;

  @media screen and (max-width: 980px) {
    width: 75%;
    height: 1px;
  }
`;
