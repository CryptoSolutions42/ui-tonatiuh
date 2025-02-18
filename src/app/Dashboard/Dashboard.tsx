import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
import { convertSymbol, startsWithIs } from '../../utils/helper';
import { DashboardToolbarComponent } from './components/DashboardComponents/DashboardToolbar/DashboardToolbar';
import { Tabs } from './components/DashboardComponents/Tabs/Tabs';
import { Button, ModalWindow, SH1 } from '../../components/Base';
import { appStoreActions } from '../../redux/reducer/app-reducer/reducer';
import { FormGroup, InputForm, LabelForm } from './components/ConfigComponent/styled/ConfigComponent.styled';

const createConfigFields = [
  'apiKey',
  'privateKey',
  'password',
  'symbol',
  'positionSize',
  'percentBuyBackStep',
  'isFibonacci',
  'percentProfit',
  'candlePriceRange',
  'isPercentTargetAfterTakeProfit',
  'isCapitalizeDeltaFromSale',
  'isCoinAccumulation',
  'isAutoStartTrading',
  'percentTargetAfterTakeProfit',
  'exchange',
];

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { currentConfig, configs, modalWindow } = useSelector((state: RootState) => state.AppReducer);

  function toogleCreateConfigWindow() {
    dispatch(
      appStoreActions.toggleModal({
        modalType: 'create-config',
        isOpenModal: !modalWindow.isOpenModal,
      }),
    );
    console.log('createConfig');
  }

  function generateConfigFormForCreate() {
    return (
      <>
        <SH1 color="#add6dd">{t('Create Config')}</SH1>
        <form>
          {createConfigFields.flatMap((configName, index) => (
            <FormGroup key={`input-config-${index + 1}`}>
              <LabelForm children={`${t(configName)}:`} />
              <InputForm
                type={startsWithIs(configName) ? 'checkbox' : 'text'}
                name={configName}
                placeholder={configName}
              />
            </FormGroup>
          ))}
          <Button
            children={t('Create Config')}
            handleClick={() => {
              console.log('create config!');
              toogleCreateConfigWindow();
            }}
            type={'primary-b'}
          />
        </form>
      </>
    );
  }

  return (
    <StyledDashboard>
      {modalWindow.isOpenModal && modalWindow.modalType === 'create-config' ? (
        <ModalWindow children={generateConfigFormForCreate()} />
      ) : (
        <></>
      )}
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
                    <PanelComponent config={currentConfig} />
                  </>
                ) : (
                  <>
                    <DashboardEmpty>
                      <DashboardEmptyImage onClick={toogleCreateConfigWindow} src="/images/icons/plus-file.svg" />
                    </DashboardEmpty>
                  </>
                )
              }
            />
            <Route path="/statistic" element={<h1>Statistic</h1>} />
            <Route path="/history" element={<h1>History</h1>} />
            <Route path="/license" element={<h1>License</h1>} />
            <Route path="/payment" element={<h1>Payment</h1>} />
            <Route path="/setting" element={<h1>Setting</h1>} />
          </Routes>
        </DashboardBody>
      </DashboardContainer>
    </StyledDashboard>
  );
};

export default Dashboard;
