import styled from 'styled-components';

export const StyledMobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
  margin-top: 80vh;
  height: 700px;
  background: #a3a8d2;
  position: absolute;
  margin: 0;
  min-width: fit-content;
`;

export const StyledMenu = styled.div`
  display: contents;
  .wrapperMenu {
    display: none;
  }

  .wrapperMenu-visible {
    position: absolute;
  }
`;
