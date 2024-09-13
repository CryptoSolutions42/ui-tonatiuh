import styled from 'styled-components';

export const StyledPartnerSection = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 1200px;
  gap: 80px;
  margin: 0 auto;

  @media screen and (max-width: 375px) {
    width: 325px;
    gap: 10px;
    justify-content: center;
    img {
      width: 30%;
    }
  }
`;
