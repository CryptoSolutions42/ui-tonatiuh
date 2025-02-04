import styled, { css } from 'styled-components';

export const StyledDashboard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
`;

export const DashboardToolbar = styled.div<{ width?: string }>`
  ${({ width }: { width?: string }) =>
    css`
      width: ${width ?? '400px'};
    `};
  background-image: linear-gradient(to bottom right, rgba(7, 20, 23, 0.94), rgb(13, 43, 76));
  transition: width 0.2s ease;
  padding: 20px;
`;

export const DashboardContainer = styled.div`
  width: 100%;
`;

export const DashboardBody = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to bottom right, rgba(7, 20, 23, 0.94), rgb(13, 43, 76));
  padding: 20px;
`;

export const DashboardList = styled.div`
  width: 100%;
  height: 85px;
  background-image: linear-gradient(to bottom right, rgb(13, 43, 76), rgba(4, 47, 57, 0.94));
  opacity: 0.9;
`;

export const TradingComponent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  padding: 0 20px 20px 20px;
`;
