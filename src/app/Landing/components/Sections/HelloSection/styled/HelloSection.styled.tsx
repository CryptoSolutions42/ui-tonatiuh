import styled from 'styled-components';

export const StyledHelloSection = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;

  img {
    width: 560px;
    height: 560px;
    margin-top: -100px;
  }

  @media screen and (max-width: 980px) {
    flex-flow: column-reverse;
    margin: -100px auto;

    img {
      margin: 0 auto;
      width: 264px;
      height: 264px;
    }
  }
`;

export const StyledHelloInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 560px;
  width: -webkit-fill-available;
  color: white;

  @media screen and (max-width: 980px) {
    margin: 0 auto;
    text-align: center;
    align-items: center;
    padding: 20px;
  }
`;

export const HeadDescriptionWrapper = styled.div`
  margin-bottom: 30px;
`;
