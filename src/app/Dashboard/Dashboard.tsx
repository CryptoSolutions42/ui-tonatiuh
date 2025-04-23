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
import { ConfigForm, FormGroup, LabelForm } from './components/ConfigComponent/styled/ConfigComponent.styled';
import { ConfigComponent } from './components/ConfigComponent/ConfigComponent';
import { TradingViewChart } from './components/TradingViewChart/TradingViewChart';
import { PanelComponent } from './components/PanelComponent/PanelComponent';
import { StatisticComponent } from './components/StatisticComponent/StatisticComponent';
import { HistoryComponent } from './components/HistoryComponent/HistoryComponent';
import { Payment } from './components/Payment';
import { License } from './components/License';
import { ConfigType } from '@/redux/types';
import { SettingComponent } from './components/SettingComponent/SettingComponent';

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
    dispatch(AppSagaAction.createConfig(data));
    dispatch(
      appStoreActions.toggleModal({
        modalType: 'create-config',
        isOpenModal: !modalWindow.isOpenModal,
      }),
    );
    console.log(data);
  }

  function generateConfigFormForCreate() {
    const registerNumberInput = (name: keyof ConfigType, value: number) => {
      return {
        ...register(name, {
          valueAsNumber: true,
          value: value,
          min: 0,
        }),
      };
    };

    return (
      <>
        <SH1 color="#add6dd">{t('Create Config')}</SH1>
        <ConfigForm isVisible={true} maxHeight={'660px'} onSubmit={handleSubmit(toggleCreateConfigWindow)}>
          <FormGroup>
            <LabelForm>{t('symbol')}</LabelForm>
            <select {...register('symbol')}>
              {[
                'ETH/USDT',
                'BTC/USDT',
                'DOGE/USDT',
                'SOL/USDT',
                'OKB/USDT',
                'TON/USDT',
                'XRP/USDT',
                'ADA/USDT',
                'BNB/USDT',
                'DOT/USDT',
                'ENS/USDT',
                'EOS/USDT',
              ].map((symbol) => (
                <option key={symbol} value={symbol}>
                  {symbol}
                </option>
              ))}
            </select>
          </FormGroup>
          <FormGroup>
            <LabelForm>{t('exchange')}</LabelForm>
            <select {...register('exchange')}>
              {['okx', 'binance', 'bitget', 'kucoin', 'mexc', 'poloniex', 'gate', 'exmo', 'bybit'].map((exchange) => (
                <option key={exchange} value={exchange}>
                  {exchange}
                </option>
              ))}
            </select>
          </FormGroup>
          <FormGroup>
            <LabelForm>{t('candlePriceRange')}</LabelForm>
            <select {...register('candlePriceRange')}>
              {['4h', '1h', '1d'].map((candle) => (
                <option key={candle} value={candle}>
                  {candle}
                </option>
              ))}
            </select>
          </FormGroup>
          <FormGroup>
            <LabelForm>{t('apiKey')}</LabelForm>
            <input {...register('apiKey')} type="text" placeholder={String(t('Private data is not displayed'))} />
          </FormGroup>
          <FormGroup>
            <LabelForm>{t('privateKey')}</LabelForm>
            <input {...register('privateKey')} type="text" placeholder={String(t('Private data is not displayed'))} />
          </FormGroup>
          <FormGroup>
            <LabelForm>{t('password')}</LabelForm>
            <input {...register('password')} type="text" placeholder={String(t('Private data is not displayed'))} />
          </FormGroup>
          <FormGroup>
            <LabelForm>{t('positionSize')}</LabelForm>
            <input type="number" step="0.01" {...registerNumberInput('positionSize', 0.01)} />
          </FormGroup>
          <FormGroup>
            <LabelForm>{t('percentProfit')}</LabelForm>
            <input type="number" step="0.01" {...registerNumberInput('percentProfit', 0.01)} />
          </FormGroup>
          <FormGroup>
            <LabelForm>{t('percentBuyBackStep')}</LabelForm>
            <input type="number" step="0.001" {...registerNumberInput('percentBuyBackStep', 0.001)} />
          </FormGroup>
          <FormGroup>
            <LabelForm>{t('percentFromBalance')}</LabelForm>
            <input type="number" step="0.01" {...registerNumberInput('percentFromBalance', 0.01)} />
          </FormGroup>
          <FormGroup>
            <LabelForm>{t('percentTargetAfterTakeProfit')}</LabelForm>
            <input type="number" step="0.01" {...registerNumberInput('percentTargetAfterTakeProfit', 0.01)} />
          </FormGroup>
          <FormGroup>
            <LabelForm>{t('isAutoStartTrading')}</LabelForm>
            <input style={{ height: '25px', width: '25px' }} {...register('isAutoStartTrading')} type="checkbox" />
          </FormGroup>
          <FormGroup>
            <LabelForm>{t('isFibonacci')}</LabelForm>
            <input style={{ height: '25px', width: '25px' }} {...register('isFibonacci')} type="checkbox" />
          </FormGroup>
          <FormGroup>
            <LabelForm>{t('isPercentTargetAfterTakeProfit')}</LabelForm>
            <input
              style={{ height: '25px', width: '25px' }}
              {...register('isPercentTargetAfterTakeProfit')}
              type="checkbox"
            />
          </FormGroup>
          <FormGroup>
            <LabelForm>{t('isCapitalizeDeltaFromSale')}</LabelForm>
            <input
              style={{ height: '25px', width: '25px' }}
              {...register('isCapitalizeDeltaFromSale')}
              type="checkbox"
            />
          </FormGroup>
          <FormGroup>
            <LabelForm>{t('isCoinAccumulation')}</LabelForm>
            <input style={{ height: '25px', width: '25px' }} {...register('isCoinAccumulation')} type="checkbox" />
          </FormGroup>
          <Button type="submit" children={t('Create Config')} typeButton={'primary-b'} />
        </ConfigForm>
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
                      <TradingViewChart
                        symbol={convertSymbol(currentConfig.symbol)}
                        interval="1H"
                        orders={orders[0].symbol === currentConfig.symbol ? orders : undefined}
                      />
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
            <Route path="/setting" element={<SettingComponent />} />
          </Routes>
        </DashboardBody>
      </DashboardContainer>
    </StyledDashboard>
  );
};

export default Dashboard;
