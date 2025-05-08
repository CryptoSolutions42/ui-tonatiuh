import styled, { css } from 'styled-components';

export const StyledDashboard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`;

export const DashboardContainer = styled.div`
  width: 100%;
`;

export const DashboardBody = styled.div`
  width: 100%;
  height: 100%;
  background: #212327;
  overflow-y: 'auto';
`;

export const TradingComponent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  padding: 20px 20px 20px;
`;

export const DashboardTabs = styled.div`
  width: 100%;
  height: 40px;
  background: rgb(26, 28, 31);
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const DashboardEmpty = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DashboardEmptyImage = styled.img`
  width: 30%;
  opacity: 0.2;
  transition: width 0.1s ease;
  cursor: pointer;

  :hover {
    width: 40%;
    opacity: 0.4;
    transition: width 1s ease;
  }
`;
