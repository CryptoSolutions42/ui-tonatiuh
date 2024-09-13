import styled, { css } from 'styled-components';

export const StyledCard = styled.div`
  width: 292px;
  height: 379px;
  background-color: white;
  flex-direction: column;
  border: none;

  img {
    margin-top: -13%;
    margin-left: -7%;
  }

  ${({ className }) =>
    (className === 'info-card' &&
      css`
      img {
        margin: 30px;
      }
      :hover {
        background: linear-gradient(203.28deg, #88a9ff 0%, #7976fd 86.01%);
        box-shadow: 0px 33px 80px rgba(66, 79, 236, 0.29), 0px 9.94853px 24.1177px rgba(66, 79, 236, 0.188961),
        0px 4.13211px 10.0172px rgba(66, 79, 236, 0.145), 0px 1.4945px 3.62304px rgba(66, 79, 236, 0.101039);
        div, h1 {
          color: white;
        }
      `) ||
    (className === 'direct-cart' &&
      css`
      background-color: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(21.6772px);
      width: 310px;
      height: 524px;
      align-items: center;
      justify-content: center;
      img {
        margin: 0;
        width: 100%;
      };
      @media screen and (max-width: 1200px) {
        height: max-content;
      }
  `)}
`;

export const ImageCard = styled.img`
  position: relative;
  padding: 0;
  margin: 0;
`;

export const InfoWrapper = styled.div`
  position: relative;
  padding: 25px;

  ${({ className }) =>
    (className === 'info-card' &&
      css`
        display: flex;
        flex-direction: column;

        @media screen and (max-width: 1200px) {
          padding: 10px;
        }
    `) ||
    (className === 'direct-cart' &&
      css`
        display: flex;
        flex-direction: column;
    `)}
  }
`;
export const TitleCard = styled.span`
  position: relative;
`;
export const DescriptionCard = styled.span`
  position: relative;
`;
