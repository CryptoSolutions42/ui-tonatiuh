import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { RootState } from '../../redux/store';
import {
  DashboardBody,
  StyledDashboard,
  DashboardTabs,
  DashboardContainer,
  TradingComponent,
  DashboardEmpty,
  DashboardEmptyImage,
} from './styled/Dashboard.styled';
import { TradingViewChart } from './components/TradingViewChart/TradingViewChart';
import { ConfigComponent } from './components/ConfigComponent/ConfigComponent';
import { PanelComponent } from './components/PanelComponent/PanelComponent';
import { SelectLanguageContainer } from '../../components/Base/SelectLanguage/SelectLanguage';
import { convertSymbol } from '../../utils/helper';
import { DashboardToolbarComponent } from './components/DashboardComponents/DashboardToolbar/DashboardToolbar';
import { Tabs } from './components/DashboardComponents/Tabs/Tabs';

const Dashboard: React.FC = () => {
  const { currentConfig } = useSelector((state: RootState) => state.AppReducer);
  const { configs } = useSelector((state: RootState) => state.AppReducer);

  return (
    <StyledDashboard>
      <DashboardToolbarComponent />
      <DashboardContainer>
        <DashboardTabs>
          <Tabs currentTab={currentConfig?.id} />
          <SelectLanguageContainer />
        </DashboardTabs>
        <DashboardBody>
          <Routes>
            <Route
              path="/dashboard"
              element={
                configs.length && currentConfig ? (
                  <>
                    <TradingComponent>
                      <TradingViewChart symbol={convertSymbol(currentConfig.symbol)} interval="1H" />
                      <ConfigComponent config={currentConfig} />
                    </TradingComponent>
                    <PanelComponent />
                  </>
                ) : (
                  <>
                    <DashboardEmpty>
                      <DashboardEmptyImage src="/images/icons/plus-file.svg" />
                    </DashboardEmpty>
                  </>
                )
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
