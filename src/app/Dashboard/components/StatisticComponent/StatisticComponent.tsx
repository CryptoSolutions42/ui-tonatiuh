import { useEffect, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { AppSagaAction } from '@/redux/saga/app-saga/saga-actions';
import { RootState } from '@/redux/store';

import { ChartStatistic } from './components/ChartStatistic/ChartStatistic';
import { initialState, statisticReducer } from './reducer';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const StatisticComponent: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { balance } = useSelector((state: RootState) => state.AppReducer);
  const [state, statisticDispatch] = useReducer(statisticReducer, initialState);

  useEffect(() => {
    dispatch(AppSagaAction.getBalance());
  }, []);

  const handleToggle = (type: 'PROFIT_USDT' | 'PROFIT_ALL' | 'USDT_BALANCE') => {
    statisticDispatch({ type: `TOGGLE_${type}` as const });
  };

  return (
    <div>
      <div style={{ margin: '20px', color: '#addadd' }}>
        <h2>Statistic session</h2>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '10px',
          margin: '10px',
        }}
      >
        <label
          style={{ color: '#addadd', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
        >
          <input
            type="checkbox"
            style={{ height: '30px' }}
            checked={state.profitUsdt}
            onChange={() => handleToggle('PROFIT_USDT')}
          />
          {t('USDT profit')}
        </label>
        <label
          style={{ color: '#addadd', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
        >
          <input
            type="checkbox"
            style={{ height: '30px' }}
            checked={state.profitAll}
            onChange={() => handleToggle('PROFIT_ALL')}
          />
          {t('All profit')}
        </label>
        <label
          style={{ color: '#addadd', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
        >
          <input
            type="checkbox"
            style={{ height: '30px' }}
            checked={state.usdtBalance}
            onChange={() => handleToggle('USDT_BALANCE')}
          />
          {t('USDT balance')}
        </label>
      </div>
      <div>
        {balance.length ? (
          <GridContainer>
            {state.profitUsdt && (
              <ChartStatistic
                header={t('USDT profit')}
                balance={balance.flatMap((usdt) => usdt.profitUsdt)}
                isVisible={state.profitUsdt}
                onToggle={() => handleToggle('PROFIT_USDT')}
              />
            )}
            {state.profitAll && (
              <ChartStatistic
                header={t('All profit')}
                balance={balance.flatMap((usdt) => usdt.profitAll)}
                isVisible={state.profitAll}
                onToggle={() => handleToggle('PROFIT_ALL')}
              />
            )}
            {state.usdtBalance && (
              <ChartStatistic
                header={t('USDT balance')}
                balance={balance.flatMap((usdt) => usdt.usdt)}
                isVisible={state.usdtBalance}
                onToggle={() => handleToggle('USDT_BALANCE')}
              />
            )}
          </GridContainer>
        ) : (
          <>{t('Statistic not found or not loading... Try again later!')}</>
        )}
      </div>
    </div>
  );
};
