import { FC } from 'react';
import { LoggerComponent } from './components/LoggerComponent/LoggerComponent';
import { ManagementComponent } from './components/ManagementComponent/ManagementComponent';
import { StyledPanelComponent, PanelWrapper } from './styled/PanelComponent.styled';
import { ConfigType } from '../../../../redux/types';

export const PanelComponent: FC<{ config: ConfigType }> = ({ config }) => {
  return (
    <StyledPanelComponent>
      <PanelWrapper>
        <LoggerComponent config={config} />
        <ManagementComponent />
      </PanelWrapper>
    </StyledPanelComponent>
  );
};
