import React from 'react';
import { ConfigType, IAppState } from '../../redux/types';
import { useSelector } from 'react-redux';
import {
  DashboardBody,
  DashboardToolbar,
  StyledDashboard,
  DashboardList,
  DashboardContainer,
  TradingComponent,
} from './styled/Dashboard.styled';
import { LoggerComponent } from './components/LoggerComponent/LoggerComponent';
import { TradingViewChart } from './components/TradingViewChart/TradingViewChart';
import { ConfigComponent } from './components/ConfigComponent/ConfigComponent';

const Dashboard: React.FC = () => {
  const [toolbarWidth, setToolbarWidth] = React.useState('100px');
  const config: ConfigType = useSelector((state: IAppState) => state.config);

  const toolbarHandleWidth = () => {
    setToolbarWidth(toolbarWidth === '100px' ? '400px' : '100px');
  };

  return (
    <StyledDashboard>
      <DashboardToolbar width={toolbarWidth} onClick={toolbarHandleWidth}></DashboardToolbar>
      <DashboardContainer>
        <DashboardList></DashboardList>
        <DashboardBody>
          <TradingComponent>
            <TradingViewChart symbol="ETH-USDT" interval="1H" />
            <ConfigComponent />
          </TradingComponent>
          <LoggerComponent />
        </DashboardBody>
      </DashboardContainer>
    </StyledDashboard>
  );
};

export default Dashboard;
