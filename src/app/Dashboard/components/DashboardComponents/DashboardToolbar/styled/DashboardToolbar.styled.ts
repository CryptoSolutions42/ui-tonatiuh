import styled, { css } from 'styled-components';

export const DashboardToolbar = styled.div<{ width?: string }>`
  ${({ width }: { width?: string }) =>
    css`
      width: ${width ?? '400px'};
    `};
  background: rgb(26, 28, 31);
  transition: width 0.05s ease;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
