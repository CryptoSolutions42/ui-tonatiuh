import { useTranslation } from 'react-i18next';
import { Button } from '../../../../../../components/Base';
import { StyledManagementComponent } from './styled/ManagementComponent.styled';

export const ManagementComponent = () => {
  const { t } = useTranslation();
  return (
    <StyledManagementComponent>
      <Button typeButton="primary-b" handleClick={() => console.log('work')} children={t('Trading start')} />
      <Button typeButton="primary-b" handleClick={() => console.log('work')} children={t('Trading stop')} />
      <Button typeButton="primary-b" handleClick={() => console.log('work')} children={t('Balance distribution')} />
      <Button typeButton="primary-b" handleClick={() => console.log('work')} children={t('Emergency stop')} />
    </StyledManagementComponent>
  );
};
