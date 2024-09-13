import styled from 'styled-components';

export const StyledCardsSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around; // space-between;
  gap: 20px;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
