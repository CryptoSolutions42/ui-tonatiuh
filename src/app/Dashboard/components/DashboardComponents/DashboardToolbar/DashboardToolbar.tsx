import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { DashboardToolbar } from './styled/DashboardToolbar.styled';
import { Body2 } from '../../../../../components/Base';

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  border-radius: 5px;

  :hover {
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
`;

export const DashboardToolbarComponent: React.FC = () => {
  const { t } = useTranslation();
  const [toolbarWidth, setToolbarWidth] = React.useState('100px');
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toolbarHandleWidth = () => {
    if (toolbarWidth === '100px') {
      setToolbarWidth('400px');
      setTimeout(() => setIsExpanded(true), 100);
    } else {
      setIsExpanded(false);
      setTimeout(() => setToolbarWidth('100px'), 100);
    }
  };

  return (
    <DashboardToolbar width={toolbarWidth}>
      <img
        onClick={toolbarHandleWidth}
        src="/images/logo/big-logo.png"
        alt="Logo Animation"
        style={{
          cursor: 'pointer',
          backgroundColor: 'transparent',
          width: toolbarWidth === '100px' ? '249%' : '100%',
          maxWidth: '279px',
          transition: 'width 0.5s ease, margin-left 0.5s ease',
          marginLeft: toolbarWidth === '100px' ? '-42px' : '0',
          marginBottom: '50px',
        }}
      />
      <Link style={{ textDecoration: 'none' }} to="dashboard">
        <MenuWrapper>
          <img style={{ width: '55px', transition: '0.1s easy' }} src="/images/icons/dashboard.svg" />
          {toolbarWidth === '400px' && (
            <Body2 color="#add6dd" style={{ transition: 'opacity 0.1s easy', opacity: isExpanded ? 1 : 0 }}>
              {t('Dashboard')}
            </Body2>
          )}
        </MenuWrapper>
      </Link>
      <Link style={{ textDecoration: 'none' }} to="statistic">
        <MenuWrapper>
          <img style={{ width: '55px', gap: '10px' }} src="/images/icons/statistic.svg" />
          {toolbarWidth === '400px' && (
            <Body2 color="#add6dd" style={{ transition: 'opacity 0.1s easy', opacity: isExpanded ? 1 : 0 }}>
              {t('Statistic')}
            </Body2>
          )}
        </MenuWrapper>
      </Link>
      <Link style={{ textDecoration: 'none' }} to="history">
        <MenuWrapper>
          <img style={{ width: '55px', gap: '10px' }} src="/images/icons/history.svg" />
          {toolbarWidth === '400px' && (
            <Body2 color="#add6dd" style={{ transition: 'opacity 0.1s easy', opacity: isExpanded ? 1 : 0 }}>
              {t('History')}
            </Body2>
          )}
        </MenuWrapper>
      </Link>
      <Link style={{ textDecoration: 'none' }} to="license">
        <MenuWrapper>
          <img style={{ width: '55px', gap: '10px' }} src="/images/icons/license.svg" />
          {toolbarWidth === '400px' && (
            <Body2 color="#add6dd" style={{ transition: 'opacity 0.1s easy', opacity: isExpanded ? 1 : 0 }}>
              {t('License')}
            </Body2>
          )}
        </MenuWrapper>
      </Link>
      <Link style={{ textDecoration: 'none' }} to="payment">
        <MenuWrapper>
          <img style={{ width: '55px', gap: '10px' }} src="/images/icons/payment.svg" />
          {toolbarWidth === '400px' && (
            <Body2 color="#add6dd" style={{ transition: 'opacity 0.1s easy', opacity: isExpanded ? 1 : 0 }}>
              {t('Payment')}
            </Body2>
          )}
        </MenuWrapper>
      </Link>
    </DashboardToolbar>
  );
};
