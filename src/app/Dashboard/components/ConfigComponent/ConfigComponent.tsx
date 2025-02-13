import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
  ConfigForm,
  FormGroup,
  InputForm,
  LabelForm,
  StyledConfig,
  HiddenButtonWrapper,
} from './styled/ConfigComponent.styled';
import { ConfigType, IAppState } from '../../../../redux/types';
import { RootState } from '../../../../redux/store';
import { Button, SH1 } from '../../../../components/Base';

export const ConfigComponent: React.FC<{ config: ConfigType }> = ({ config }) => {
  const { t } = useTranslation();
  const [width, setWidth] = useState<string>('100px');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toolbarHandleWidth = () => {
    console.log(config);
    if (width === '100px') {
      setWidth('500px');
      setTimeout(() => setIsExpanded(true), 200);
    } else {
      setIsExpanded(false);
      setTimeout(() => setWidth('100px'), 200);
    }
  };

  const printNameInput = (nameField: string) => {
    if (nameField === 'apiKey' || nameField === 'privateKey' || nameField === 'password') {
      return 'Приватные данные не отображаются';
    }

    return config[nameField];
  };

  const startsWithIs = (str: string): boolean => {
    return str.substring(0, 2) === 'is';
  };

  //   useEffect(() => {
  //     const handleResize = () => {
  //       const newWidth = window.innerWidth * 0.3;
  //       setWidth(`${newWidth}px`);
  //     };

  //     handleResize();
  //     window.addEventListener('resize', handleResize);

  //     return () => {
  //       window.removeEventListener('resize', handleResize);
  //     };
  //   }, []);

  return (
    <StyledConfig onClick={() => width === '100px' && toolbarHandleWidth()} width={width}>
      {width === '100px' ? (
        <span
          style={{
            height: '100%',
            width: '600px',
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
        <ConfigForm isVisible={isExpanded}>
          <HiddenButtonWrapper>
            <SH1 color="#add6dd">{t('Config')}</SH1>
            <img
              style={{ cursor: 'pointer' }}
              onClick={() => width !== '100px' && toolbarHandleWidth()}
              src="/images/icons/close.svg"
            />
          </HiddenButtonWrapper>
          {Object.keys(config).flatMap((configName, index) => (
            <FormGroup key={`input-config-${index + 1}`}>
              <LabelForm children={`${t(configName)}:`} />
              <InputForm
                type={startsWithIs(configName) ? 'checkbox' : 'text'}
                name={configName}
                value={printNameInput(configName)}
              />
            </FormGroup>
          ))}
          <Button
            children={t('Update Config')}
            handleClick={() => {
              toolbarHandleWidth();
            }}
            type={'primary-b'}
          />
        </ConfigForm>
      )}
    </StyledConfig>
  );
};
