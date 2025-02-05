import { LoggerComponent } from './components/LoggerComponent/LoggerComponent';
import { ManagementComponent } from './components/ManagementComponent/ManagementComponent';
import { StyledPanelComponent, PanelWrapper } from './styled/PanelComponent.styled';

export const PanelComponent: React.FC = () => {
  return (
    <StyledPanelComponent>
      <PanelWrapper>
        <LoggerComponent />
        <ManagementComponent />
      </PanelWrapper>
    </StyledPanelComponent>
  );
};
