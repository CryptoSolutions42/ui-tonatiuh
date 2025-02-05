import styled, { css } from 'styled-components';

export const DashboardToolbar = styled.div<{ width?: string }>`
  ${({ width }: { width?: string }) =>
    css`
      width: ${width ?? '400px'};
    `};
  background-image: linear-gradient(to bottom right, rgba(7, 20, 23, 0.94), rgb(13, 43, 76));
  transition: width 0.2s ease;
  padding: 20px;
`;
