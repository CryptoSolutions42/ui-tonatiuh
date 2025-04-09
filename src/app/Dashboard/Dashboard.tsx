import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

import { RootState } from '@/redux/store';
import { SelectLanguageContainer } from '@/components/Base/SelectLanguage/SelectLanguage';
import { convertSymbol, startsWithIs } from '@/utils/helper';
import { Button, ModalWindow, SH1 } from '@/components/Base';
import { appStoreActions } from '@/redux/reducer/app-reducer/reducer';
import { AppSagaAction } from '@/redux/saga/app-saga/saga-actions';

import {
  DashboardBody,
  StyledDashboard,
  DashboardTabs,
  DashboardContainer,
  TradingComponent,
  DashboardEmpty,
  DashboardEmptyImage,
} from './styled/Dashboard.styled';
import { DashboardToolbarComponent } from './components/DashboardComponents/DashboardToolbar/DashboardToolbar';
import { Tabs } from './components/DashboardComponents/Tabs/Tabs';
import { FormGroup, InputForm, LabelForm } from './components/ConfigComponent/styled/ConfigComponent.styled';
import { ConfigComponent } from './components/ConfigComponent/ConfigComponent';
import { TradingViewChart } from './components/TradingViewChart/TradingViewChart';
import { PanelComponent } from './components/PanelComponent/PanelComponent';
import { StatisticComponent } from './components/StatisticComponent/StatisticComponent';
import { HistoryComponent } from './components/HistoryComponent/HistoryComponent';
import { Payment } from './components/Payment';
import { License } from './components/License';

const createConfigFields = [
  'apiKey',
  'privateKey',
  'password',
  'symbol',
  'positionSize',
  'percentBuyBackStep',
  'percentProfit',
  'candlePriceRange',
  'isFibonacci',
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
  const { currentConfig, configs, modalWindow, orders, allSession } = useSelector(
    (state: RootState) => state.AppReducer,
  );
  const { register, handleSubmit } = useForm<{
    [key: string]: number | string | boolean;
  }>();

  function toggleCreateConfigWindow(data) {
    dispatch(
      appStoreActions.toggleModal({
        modalType: 'create-config',
        isOpenModal: !modalWindow.isOpenModal,
      }),
    );
    console.log(data);
  }

  function generateConfigFormForCreate() {
    return (
      <>
        <SH1 color="#add6dd">{t('Create Config')}</SH1>
        <form onSubmit={handleSubmit(toggleCreateConfigWindow)}>
          {createConfigFields.flatMap((configName, index) => (
            <FormGroup key={`input-config-${index + 1}`}>
              <LabelForm children={`${t(configName)}:`} />
              <InputForm
                {...register(configName)}
                type={startsWithIs(configName) ? 'checkbox' : 'text'}
                name={configName}
                placeholder={configName}
              />
            </FormGroup>
          ))}
          <Button
            type="submit"
            children={t('Create Config')}
            typeButton={'primary-b'}
          />
        </form>
      </>
    );
  }

  useEffect(() => {
    dispatch(AppSagaAction.getAllSession());
    currentConfig && dispatch(AppSagaAction.getOrders(currentConfig.id));
  }, [currentConfig]);

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
                      <TradingViewChart symbol={convertSymbol(currentConfig.symbol)} interval="1H" orders={orders} />
                      <ConfigComponent config={currentConfig} />
                    </TradingComponent>
                    <PanelComponent config={currentConfig} />
                  </>
                ) : (
                  <>
                    <DashboardEmpty>
                      <DashboardEmptyImage onClick={toggleCreateConfigWindow} src="/images/icons/plus-file.svg" />
                    </DashboardEmpty>
                  </>
                )
              }
            />
            <Route path="/statistic" element={<StatisticComponent />} />
            <Route path="/history" element={<HistoryComponent allSession={allSession} />} />
            {/* <Route path="/payment" element={<Payment />} /> */}
            <Route path="/license" element={<License />} />
          </Routes>
        </DashboardBody>
      </DashboardContainer>
    </StyledDashboard>
  );
};

export default Dashboard;
