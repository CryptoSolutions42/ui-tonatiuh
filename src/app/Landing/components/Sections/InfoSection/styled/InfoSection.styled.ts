import styled from 'styled-components';

export const StyledInfoSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: white;
  width: 100vw;
  padding-top: 100px;

  @media screen and (max-width: 1200px) {
    flex-flow: column;
    margin: 0 auto;

    img {
      margin: 0 auto;
    }
  }
`;

export const StyledInfoBlock = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  color: #38375a;
  width: 42vw;
  margin: 0 auto;
  flex-wrap: wrap;

  .colorize {
    color: rgba(98, 75, 255, 1);
  }

  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
    flex-flow: column;
    margin: 0 auto;
    width: 100%;
    align-items: center;
    height: max-content;

    h1 {
      ${({ padding }: { padding?: string }) => `padding-left: ${padding};`}
    }

    padding-bottom: 30px;

    img {
      margin: 0 auto;
    }
    .align-self {
      width: 589px;
    }
  }

  @media screen and (max-width: 660px) {
    margin: 0 auto;

    .align-self {
      width: 217px;
    }
  }

  @media screen and (max-width: 437px) {
    margin: 0 auto;
  }
`;

export const StyledImgBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const StyledPrivacyLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  & p {
    font-family: 'Mazzard';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
    color: #999eca;
  }

  & img {
    width: 82px;
    height: 20px;
  }
`;
