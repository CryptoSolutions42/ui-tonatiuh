import styled, { css } from 'styled-components';

export const StyledLogo = styled.div<{ borderRight?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;

  border-right: ${({ borderRight }) => borderRight};

  @media screen and (max-width: 980px) {
    border: none;
  }
`;
