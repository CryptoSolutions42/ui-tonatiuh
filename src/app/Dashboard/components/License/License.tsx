import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';
import styled from 'styled-components';

import { Payment } from '../Payment';
import { appStoreActions } from '../../../../redux/reducer/app-reducer/reducer';
import { Button, Card, H1, ModalWindow } from '../../../../components/Base';
import { RootState } from '../../../../redux/store';

const LicensePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 100vh;
  justify-content: center;
`;

const LicenseTag = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const AnimatedTitle = styled.h1<{ color: string; textLength: number }>`
  margin-bottom: 50px;
  font-family: 'Mazzard';
  font-style: normal;
  font-weight: 500;
  line-height: 65px;
  font-size: 50px;
  color: ${({ color }) => color};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 2px;
    height: 100%;
    background-color: #15aab2;
    animation: blink 0.7s infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgb(33, 35, 39);
    border-left: 2px solid #15aab2;
    animation: typing 3s steps(${(props) => props.textLength}) forwards;
  }

  @keyframes typing {
    100% {
      left: 100%;
      width: 0;
    }
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;

export const License = () => {
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm<{ licenseKey: string }>();

  function onSubmit(data: { licenseKey: string }) {
    console.log(data);
  }

  const headerText = t('To access the service, enter the license key.');

  return (
    <LicensePage>
      <AnimatedTitle color="#addadd" textLength={headerText.length}>
        {headerText}
      </AnimatedTitle>
      <form style={{ display: 'flex', gap: '20px' }} onSubmit={handleSubmit(onSubmit)}>
        <input
          style={{
            width: '450px',
            height: '45px',
            border: '2px solid rgb(24, 150, 178)',
            borderRadius: '10px',
            padding: '10px',
            boxShadow: '-1px 0px 17px 13px rgba(25, 152, 152, 0.2)',
          }}
          type="text"
          placeholder={String(t('Your license code'))}
          {...register('licenseKey', {
            required: String(t('This field is required')),
            minLength: {
              value: 5,
              message: String(t('Minimum length is 5 characters')),
            },
          })}
        />
        <Button children="Submit" typeButton="primary-b" type="submit" />
      </form>
      <LicenseTag></LicenseTag>
    </LicensePage>
  );
};
