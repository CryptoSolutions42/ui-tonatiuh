import styled from 'styled-components';

export const StyledFooter = styled.div`
  height: 110px;
  display: grid;
  grid-template-columns: 130px 1fr 230px;
  align-items: center;
  border-top: 1px solid white;

  @media screen and (max-width: 980px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    .logo {
      img {
        width: 30px;
      }
    }
  }
`;
