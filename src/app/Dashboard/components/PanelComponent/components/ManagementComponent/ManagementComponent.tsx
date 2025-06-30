import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../../../../../components/Base';
import { StyledManagementComponent } from './styled/ManagementComponent.styled';
import { AppSagaAction } from '@/redux/saga/app-saga/saga-actions';
import { apiStartTrading } from '@/redux/api/trading/trading.api';
import { appStoreActions } from '@/redux/reducer/app-reducer/reducer';
import { RootState } from '@/redux/store';

export const ManagementComponent: FC<{ idConfig: number }> = ({ idConfig }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { orders, currentConfig } = useSelector((state: RootState) => state.AppReducer);

  useEffect(() => {
    console.log('reload ManagementComponent');
  }, [idConfig]);

  return (
    <StyledManagementComponent>
      <Button
        typeButton="primary-b"
        handleClick={async () => {
          await apiStartTrading(idConfig);
        }}
        children={t('Trading start')}
      />
      <Button typeButton="primary-b" handleClick={() => console.log('work!')} children={t('Balance distribution')} />
      <Button
        typeButton="primary-b"
        handleClick={() => dispatch(AppSagaAction.emergencyStop(idConfig))}
        children={t('Emergency stop')}
      />
    </StyledManagementComponent>
  );
};
