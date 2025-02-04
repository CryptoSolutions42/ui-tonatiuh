import { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { ConfigForm, FormGroup, InputForm, LabelForm, StyledConfig } from './styled/ConfigComponent.styled';
import { ConfigType, IAppState } from '../../../../redux/types';
import { RootState } from '../../../../redux/store';
import { Button } from '../../../../components/Base';

export const ConfigComponent = () => {
  const { config } = useSelector((state: RootState) => state.AppReducer);

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
            color: 'white',
            fontWeight: 700,
            fontSize: '25px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: 'rotate(90deg)',
          }}
        >
          Config
        </span>
      ) : (
        <ConfigForm isVisible={isExpanded}>
          <div
            style={{ color: '#add6dd', fontSize: '20px', fontWeight: 700, marginBottom: '30px' }}
            onClick={() => width !== '100px' && toolbarHandleWidth()}
          >
            {'=> Скрыть конфигурации'}
          </div>
          {Object.keys(config).flatMap((configName, index) => (
            <FormGroup key={`input-config-${index + 1}`}>
              <LabelForm children={`${configName}:`} />
              <InputForm
                type={startsWithIs(configName) ? 'checkbox' : 'text'}
                name={configName}
                value={printNameInput(configName)}
              />
            </FormGroup>
          ))}
          <Button
            children={'Обновить Config'}
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
