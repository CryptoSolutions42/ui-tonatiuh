import React, { Fragment, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

import {
  ConfigForm,
  FormGroup,
  InputForm,
  LabelForm,
  StyledConfig,
  HiddenButtonWrapper,
} from './styled/ConfigComponent.styled';
import { ConfigType } from '@/redux/types';
import { RootState } from '@/redux/store';
import { Button, SH1 } from '@/components/Base';
import { startsWithIs } from '@/utils/helper';
import { configFields } from './config-fields';

export const ConfigComponent: React.FC<{ config: ConfigType }> = ({ config }) => {
  const { t } = useTranslation();
  const [width, setWidth] = useState<string>('150px');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const inputRefs = useRef<Record<string, HTMLInputElement>>({});
  const { register, handleSubmit } = useForm<{ [key: string]: number | string | boolean }>();

  function handleInputChange(configName: string) {
    const input = inputRefs.current[configName];
    if (input) {
      const value = input.type === 'checkbox' ? input.checked : input.value;
      console.log(`${configName}:`, value);
    }
  }

  function toolbarHandleWidth() {
    console.log(config);
    if (width === '150px') {
      setWidth('600px');
      setTimeout(() => setIsExpanded(true), 200);
    } else {
      setIsExpanded(false);
      setTimeout(() => setWidth('150px'), 200);
    }
  }

  const printNameInput = (nameField: string) => {
    if (nameField === 'apiKey' || nameField === 'privateKey' || nameField === 'password') {
      return t('Private data is not displayed');
    }

    return startsWithIs(nameField) ? Boolean(config[nameField]) : config[nameField];
  };

  useEffect(() => {
    // const handleResize = () => {
    //   const newWidth = window.innerWidth * 0.3;
    //   setWidth(`${newWidth}px`);
    // };
    // handleResize();
    console.log(config);
    window.addEventListener('resize', () => console.log(window.innerWidth));
    return () => {
      window.removeEventListener('resize', () => console.log(window.innerWidth));
    };
  }, [config]);

  return (
    <StyledConfig onClick={() => width === '150px' && toolbarHandleWidth()} width={width}>
      {width === '150px' ? (
        <span
          style={{
            height: '100%',
            width: '650px',
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
        <ConfigForm onSubmit={handleSubmit((data) => console.log(data))} isVisible={isExpanded}>
          <HiddenButtonWrapper>
            <SH1 color="#add6dd">{t('Config')}</SH1>
            <img
              style={{ cursor: 'pointer' }}
              onClick={() => width !== '150px' && toolbarHandleWidth()}
              src="/images/icons/close.svg"
            />
          </HiddenButtonWrapper>
          {Object.keys(configFields).flatMap((configName, index) => (
            <FormGroup key={`input-config-${index + 1}`}>
              <LabelForm children={`${t(configName)}:`} />
              {configFields[configName]?.type === 'select' ? (
                <select {...register(configName)} name={configName}>
                  {configFields[configName].options?.flatMap((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <InputForm
                  {...register(configName)}
                  type={configFields[configName]?.type || 'text'}
                  name={configName}
                  step={configFields[configName]?.type === 'number' ? configFields[configName].step : undefined}
                  defaultChecked={configFields[configName]?.type === 'checkbox' ? config[configName] : undefined}
                  defaultValue={configFields[configName]?.type === 'checkbox' ? undefined : printNameInput(configName)}
                  ref={(el) => {
                    if (el) inputRefs.current[configName] = el;
                  }}
                />
              )}
            </FormGroup>
          ))}
          <Button type="submit" children={t('Update Config')} typeButton={'primary-b'} />
        </ConfigForm>
      )}
    </StyledConfig>
  );
};
