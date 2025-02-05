import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import { RootState } from '../../redux/store';
import {
  DashboardBody,
  StyledDashboard,
  DashboardList,
  DashboardContainer,
  TradingComponent,
} from './styled/Dashboard.styled';
import { TradingViewChart } from './components/TradingViewChart/TradingViewChart';
import { ConfigComponent } from './components/ConfigComponent/ConfigComponent';
import { PanelComponent } from './components/PanelComponent/PanelComponent';
import { SelectLanguageContainer } from '../../components/Base/SelectLanguage/SelectLanguage';
import { convertSymbol } from '../../utils/helper';
import { DashboardToolbarComponent } from './components/DashboardComponents/DashboardToolbar/DashboardToolbar';

const Dashboard: React.FC = () => {
  const { config } = useSelector((state: RootState) => state.AppReducer);

  return (
    <StyledDashboard>
      <DashboardToolbarComponent />
      <DashboardContainer>
        <DashboardList>
          <SelectLanguageContainer />
        </DashboardList>
        <DashboardBody>
          <Routes>
            <Route
              path="/dashboard"
              element={
                <>
                  <TradingComponent>
                    <TradingViewChart symbol={convertSymbol(config.symbol)} interval="1H" />
                    <ConfigComponent config={config} />
                  </TradingComponent>
                  <PanelComponent />
                </>
              }
            />
            <Route path="/statistic" element={<h1>Statistic</h1>} />
            <Route path="/history" element={<h1>History</h1>} />
            <Route path="/license" element={<h1>License</h1>} />
            <Route path="/payment" element={<h1>Payment</h1>} />
          </Routes>
        </DashboardBody>
      </DashboardContainer>
    </StyledDashboard>
  );
};

export default Dashboard;
