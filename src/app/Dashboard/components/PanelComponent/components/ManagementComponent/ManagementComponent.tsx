import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Button } from '../../../../../../components/Base';
import { StyledManagementComponent } from './styled/ManagementComponent.styled';
import { AppSagaAction } from '@/redux/saga/app-saga/saga-actions';
import { apiStartTrading } from '@/redux/api/trading/trading.api';

export const ManagementComponent: FC<{ idConfig: number }> = ({ idConfig }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <StyledManagementComponent>
      <Button typeButton="primary-b" handleClick={() => apiStartTrading(idConfig)} children={t('Trading start')} />
      <Button
        typeButton="primary-b"
        handleClick={() => dispatch(AppSagaAction.stopTrading(idConfig))}
        children={t('Trading stop')}
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
