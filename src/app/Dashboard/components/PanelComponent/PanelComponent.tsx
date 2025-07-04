import { FC, useEffect } from 'react';
import { LoggerComponent } from './components/LoggerComponent/LoggerComponent';
import { ManagementComponent } from './components/ManagementComponent/ManagementComponent';
import { StyledPanelComponent, PanelWrapper } from './styled/PanelComponent.styled';
import { ConfigType } from '@/redux/types';

export const PanelComponent: FC<{ config: ConfigType }> = ({ config }) => {
  useEffect(() => {
    console.log('reload PanelComponent');
  }, [config]);
  return (
    <StyledPanelComponent>
      <PanelWrapper>
        <LoggerComponent config={config} />
        <ManagementComponent idConfig={config.id} />
      </PanelWrapper>
    </StyledPanelComponent>
  );
};
