import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { DashboardToolbar } from './styled/DashboardToolbar.styled';
import { Body2 } from '../../../../../components/Base';
import { appStoreActions } from '../../../../../redux/reducer/app-reducer/reducer';
import { RootState } from '../../../../../redux/store';

const MenuWrapper = styled.div<{ currentMenu: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  border-radius: 5px;
  ${({ currentMenu }) =>
    currentMenu &&
    css`
      background-color: rgba(255, 255, 255, 0.1);
    `}

  :hover {
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
`;

export const DashboardToolbarComponent: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [toolbarWidth, setToolbarWidth] = useState('100px');
  const [isExpanded, setIsExpanded] = useState(false);
  const { currentMenu } = useSelector((state: RootState) => state.AppReducer);

  function toolbarHandleWidth() {
    if (toolbarWidth === '100px') {
      setToolbarWidth('400px');
      setTimeout(() => setIsExpanded(true), 100);
    } else {
      setIsExpanded(false);
      setTimeout(() => setToolbarWidth('100px'), 100);
    }
  }

  function changeCurrentMenu(menuName: string) {
    dispatch(appStoreActions.setCurrentMenu(menuName));
  }

  return (
    <DashboardToolbar width={toolbarWidth}>
      <div>
        <div style={{ height: toolbarWidth === '100px' ? '160px' : '220px' }}>
          <img
            onClick={toolbarHandleWidth}
            src="/images/logo/big-logo.png"
            alt="Logo Light"
            style={{
              cursor: 'pointer',
              backgroundColor: 'transparent',
              width: toolbarWidth === '100px' ? '249%' : '100%',
              maxWidth: '279px',
              transition: 'width 0.05s ease, margin-left 0.01s ease',
              marginLeft: toolbarWidth === '100px' ? '-42px' : '0',
              marginBottom: '50px',
            }}
          />
        </div>
        <Link style={{ textDecoration: 'none' }} onClick={() => changeCurrentMenu('dashboard')} to="dashboard">
          <MenuWrapper currentMenu={currentMenu === 'dashboard'}>
            <img style={{ width: '55px', gap: '10px' }} src="/images/icons/dashboard.svg" />
            {toolbarWidth !== '100px' && (
              <Body2
                color="#add6dd"
                style={{
                  width: '50%',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  transition: 'opacity 0.01s easy',
                  opacity: isExpanded ? 1 : 0,
                }}
              >
                {t('Dashboard')}
              </Body2>
            )}
          </MenuWrapper>
        </Link>
        <Link style={{ textDecoration: 'none' }} onClick={() => changeCurrentMenu('statistic')} to="statistic">
          <MenuWrapper currentMenu={currentMenu === 'statistic'}>
            <img style={{ width: '55px', gap: '10px' }} src="/images/icons/statistic.svg" />
            {toolbarWidth !== '100px' && (
              <Body2
                color="#add6dd"
                style={{
                  width: '50%',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  transition: 'opacity 0.01s easy',
                  opacity: isExpanded ? 1 : 0,
                }}
              >
                {t('Statistic')}
              </Body2>
            )}
          </MenuWrapper>
        </Link>
        <Link style={{ textDecoration: 'none' }} onClick={() => changeCurrentMenu('history')} to="history">
          <MenuWrapper currentMenu={currentMenu === 'history'}>
            <img style={{ width: '55px', gap: '10px' }} src="/images/icons/history.svg" />
            {toolbarWidth !== '100px' && (
              <Body2
                color="#add6dd"
                style={{
                  width: '50%',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  transition: 'opacity 0.01s easy',
                  opacity: isExpanded ? 1 : 0,
                }}
              >
                {t('History')}
              </Body2>
            )}
          </MenuWrapper>
        </Link>
        <Link style={{ textDecoration: 'none' }} onClick={() => changeCurrentMenu('license')} to="license">
          <MenuWrapper currentMenu={currentMenu === 'license'}>
            <img style={{ width: '55px', gap: '10px' }} src="/images/icons/license.svg" />
            {toolbarWidth !== '100px' && (
              <Body2
                color="#add6dd"
                style={{
                  width: '50%',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  transition: 'opacity 0.01s easy',
                  opacity: isExpanded ? 1 : 0,
                }}
              >
                {t('License')}
              </Body2>
            )}
          </MenuWrapper>
        </Link>
        <Link style={{ textDecoration: 'none' }} onClick={() => changeCurrentMenu('payment')} to="payment">
          <MenuWrapper currentMenu={currentMenu === 'payment'}>
            <img style={{ width: '55px', gap: '10px' }} src="/images/icons/payment.svg" />
            {toolbarWidth !== '100px' && (
              <Body2
                color="#add6dd"
                style={{
                  width: '50%',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  transition: 'opacity 0.01s easy',
                  opacity: isExpanded ? 1 : 0,
                }}
              >
                {t('Payment')}
              </Body2>
            )}
          </MenuWrapper>
        </Link>
      </div>
      <div>
        <Link style={{ textDecoration: 'none' }} onClick={() => changeCurrentMenu('setting')} to="setting">
          <MenuWrapper currentMenu={currentMenu === 'setting'}>
            <img style={{ width: '55px', gap: '10px' }} src="/images/icons/setting.svg" />
            {toolbarWidth !== '100px' && (
              <Body2
                color="#add6dd"
                style={{
                  width: '50%',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  transition: 'opacity 0.01s easy',
                  opacity: isExpanded ? 1 : 0,
                }}
              >
                {t('Setting')}
              </Body2>
            )}
          </MenuWrapper>
        </Link>
      </div>
    </DashboardToolbar>
  );
};
