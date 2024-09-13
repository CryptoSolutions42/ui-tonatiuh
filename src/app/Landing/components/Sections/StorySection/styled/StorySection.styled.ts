import styled, { css } from 'styled-components';

export const StyledStorySection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-bottom: 70px;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    margin: 0;
    width: 88%;
    div {
      margin-bottom: 25px;
    }
  }

  @media screen and (max-width: 428px) {
  }
`;

export const StyledStorySectionContent = styled.div`
  max-width: 600px;

  ${({ isCard }: { isCard?: boolean }) =>
    isCard &&
    css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 20px;

      @media screen and (max-width: 820px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      @media screen and (max-width: 428px) {
        div {
          margin-bottom: 20px;
        }
      }
  `}

  @media screen and (max-width: 1100px) {
  }

  @media screen and (max-width: 428px) {
    div {
      margin-bottom: 20px;
    }

    img {
      width: 100%;
    }
  }
`;
