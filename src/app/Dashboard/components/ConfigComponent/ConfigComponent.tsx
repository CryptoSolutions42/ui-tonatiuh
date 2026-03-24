import React, { Fragment, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

import {
  ConfigForm,
  FormGroup,
  InputForm,
  LabelForm,
  StyledConfig,
  HiddenButtonWrapper,
} from './styled/ConfigComponent.styled';
import { ConfigType } from '@/redux/types';
import { RootState } from '@/redux/store';
import { Button, SH1 } from '@/components/Base';
import { startsWithIs } from '@/utils/helper';
import { configFields } from './config-fields';
import { AppSagaAction } from '@/redux/saga/app-saga/saga-actions';

export const ConfigComponent: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { currentConfig } = useSelector((state: RootState) => state.AppReducer);
  const [width, setWidth] = useState<string>('150px');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const inputRefs = useRef<Record<string, HTMLInputElement>>({});
  const { register, handleSubmit } = useForm<ConfigType & { [key: string]: string | number | boolean }>();

  function handleInputChange(configName: string) {
    const input = inputRefs.current[configName];
    if (input) {
      const value = input.type === 'checkbox' ? input.checked : input.value;
      console.log(`${configName}:`, value);
    }
  }

  function toolbarHandleWidth() {
    if (width === '150px') {
      setWidth('600px');
      setTimeout(() => setIsExpanded(true), 200);
    } else {
      setIsExpanded(false);
      setTimeout(() => setWidth('150px'), 200);
    }
  }

  useEffect(() => {
    // const handleResize = () => {
    //   const newWidth = window.innerWidth * 0.3;
    //   setWidth(`${newWidth}px`);
    // };
    // handleResize();
    window.addEventListener('resize', () => console.log(window.innerWidth));
    return () => {
      window.removeEventListener('resize', () => console.log(window.innerWidth));
    };
  }, [currentConfig]);

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
    <StyledConfig onClick={() => width === '150px' && toolbarHandleWidth()} width={width}>
      {width === '150px' ? (
        <span
          style={{
            height: '100%',
            width: '650px',
            color: 'white',
            fontWeight: 700,
            fontSize: '25px',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            transform: 'rotate(90deg)',
            cursor: 'pointer',
          }}
        >
          {t('Config')}
        </span>
      ) : (
        <ConfigForm
          onSubmit={handleSubmit((data: ConfigType) => {
            console.log(data);
            dispatch(AppSagaAction.updateConfig({ ...data, id: currentConfig.id }));
            window.location.reload();
          })}
          isVisible={isExpanded}
        >
          <HiddenButtonWrapper>
            <SH1 color="#add6dd">{t('Config')}</SH1>
            <img
              style={{ cursor: 'pointer' }}
              onClick={() => width !== '150px' && toolbarHandleWidth()}
              src="/images/icons/close.svg"
            />
          </HiddenButtonWrapper>
          <FormGroup>
            <LabelForm>{t('symbol')}</LabelForm>
            <select {...register('symbol')} defaultValue={currentConfig.symbol}>
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
            <select {...register('exchange')} defaultValue={currentConfig.exchange}>
              {['okx', 'binance', 'bitget', 'kucoin', 'mexc', 'poloniex', 'gate', 'exmo', 'bybit'].map((exchange) => (
                <option key={exchange} value={exchange}>
                  {exchange}
                </option>
              ))}
            </select>
          </FormGroup>
          <FormGroup>
            <LabelForm>{t('candlePriceRange')}</LabelForm>
            <select {...register('candlePriceRange')} defaultValue={currentConfig.candlePriceRange}>
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
            <input type="number" step="0.01" {...registerNumberInput('positionSize', currentConfig.positionSize)} />
          </FormGroup>
          <FormGroup>
            <LabelForm>{t('percentProfit')}</LabelForm>
            <input type="number" step="0.01" {...registerNumberInput('percentProfit', currentConfig.percentProfit)} />
          </FormGroup>
          <FormGroup>
            <LabelForm>{t('percentBuyBackStep')}</LabelForm>
            <input
              type="number"
              step="0.001"
              {...registerNumberInput('percentBuyBackStep', currentConfig.percentBuyBackStep)}
            />
          </FormGroup>
          <FormGroup>
            <LabelForm>{t('percentFromBalance')}</LabelForm>
            <input
              type="number"
              step="0.01"
              {...registerNumberInput('percentFromBalance', currentConfig.percentFromBalance)}
            />
          </FormGroup>
          <FormGroup>
            <LabelForm>{t('percentTargetAfterTakeProfit')}</LabelForm>
            <input
              type="number"
              step="0.01"
              {...registerNumberInput('percentTargetAfterTakeProfit', currentConfig.percentTargetAfterTakeProfit)}
            />
          </FormGroup>
          <FormGroup>
            <LabelForm>{t('isAutoStartTrading')}</LabelForm>
            <input
              style={{ height: '25px', width: '25px' }}
              {...register('isAutoStartTrading')}
              type="checkbox"
              defaultChecked={currentConfig.isAutoStartTrading}
            />
          </FormGroup>
          <FormGroup>
            <LabelForm>{t('isFibonacci')}</LabelForm>
            <input
              style={{ height: '25px', width: '25px' }}
              {...register('isFibonacci')}
              type="checkbox"
              defaultChecked={currentConfig.isFibonacci}
            />
          </FormGroup>
          <FormGroup>
            <LabelForm>{t('isPercentTargetAfterTakeProfit')}</LabelForm>
            <input
              style={{ height: '25px', width: '25px' }}
              {...register('isPercentTargetAfterTakeProfit')}
              type="checkbox"
              defaultChecked={currentConfig.isPercentTargetAfterTakeProfit}
            />
          </FormGroup>
          <FormGroup>
            <LabelForm>{t('isCapitalizeDeltaFromSale')}</LabelForm>
            <input
              style={{ height: '25px', width: '25px' }}
              {...register('isCapitalizeDeltaFromSale')}
              type="checkbox"
              defaultChecked={currentConfig.isCapitalizeDeltaFromSale}
            />
          </FormGroup>
          <FormGroup>
            <LabelForm>{t('isCoinAccumulation')}</LabelForm>
            <input
              style={{ height: '25px', width: '25px' }}
              {...register('isCoinAccumulation')}
              type="checkbox"
              defaultChecked={currentConfig.isCoinAccumulation}
            />
          </FormGroup>
          <Button type="submit" children={t('Update Config')} typeButton={'primary-b'} />
        </ConfigForm>
      )}
    </StyledConfig>
  );
};
