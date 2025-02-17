import { useDispatch, useSelector } from 'react-redux';
import { Fragment, useEffect, useState } from 'react';
import Select from 'react-select';
import styled from 'styled-components';

import { Payment } from '../Payment';
import { appStoreActions } from '../../../../redux/reducer/app-reducer/reducer';
import { Button, Card, H1, ModalWindow } from '../../../../components/Base';
import { RootState } from '../../../../redux/store';

const options = [
  { value: 1, label: '1' },
  { value: 3, label: '3' },
  { value: 5, label: '5' },
  { value: 10, label: '10' },
];

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

const LicenseHead = styled.div`
  width: 300px;
  font-weight: 600;
  font-size: 25px;
  margin-bottom: 30px;
`;

const LicenseDescription = styled.li``;

const Price = styled.div`
  padding: 50px 0 50px 0;
  font-size: 25px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const License = () => {
  const dispatch = useDispatch();
  const [threads, setThreads] = useState([1, 1, 1]);
  const [amount, setAmount] = useState(0);
  const { AppReducer } = useSelector((state: RootState) => state);
  const { modalWindow, userId } = AppReducer;

  const mockTariff = [
    {
      period: 'Лицензия на 3 месяц',
      description: [
        'Доступ ко всему функционалу',
        '1 поток 1 торговая пара',
        'Отсутствие ограничений доходности',
        'Безопасность данных клиента',
      ],
      price: 200 * threads[0],
    },
    {
      period: 'Лицензия на 6 месяцев',
      description: [
        'Доступ ко всему функционалу',
        '1 поток 1 торговая пара',
        'Отсутствие ограничений доходности',
        'Безопасность данных клиента',
      ],
      price: 400 * threads[1],
    },
    {
      period: 'Лицензия на 1 год',
      description: [
        'Доступ ко всему функционалу',
        '1 поток 1 торговая пара',
        'Отсутствие ограничений доходности',
        'Безопасность данных клиента',
      ],
      price: 800 * threads[2],
    },
  ];

  useEffect(() => {
    console.log('effect license');
  });

  return (
    <LicensePage>
      <H1 color="white" marginBottom="100px">
        Для доступа к сервису выберите тариф
      </H1>
      <LicenseTag>
        {mockTariff.flatMap((tariff, index) => {
          return (
            <Card
              key={`key_${index}`}
              children={
                <Fragment>
                  <LicenseHead>{tariff.period}</LicenseHead>
                  <ul>
                    {tariff.description.flatMap((description) => (
                      <LicenseDescription>{description}</LicenseDescription>
                    ))}
                  </ul>
                  <div style={{ marginTop: '20px' }}>Колличество потоков</div>
                  <Select
                    theme={(theme) => ({
                      ...theme,
                      colors: {
                        ...theme.colors,
                        neutral0: '#efccc7',
                        primary25: '#e0702a',
                        primary: 'white',
                      },
                    })}
                    defaultValue={options[0]}
                    options={options}
                    onChange={(value) => {
                      threads[index] = value?.value ?? 1;
                      setThreads([...threads]);
                    }}
                  />
                  <Price>${tariff.price}</Price>
                  <Button
                    children={'Купить'}
                    handleClick={() => {
                      setAmount(tariff.price);
                      dispatch(
                        appStoreActions.toggleModal({
                          modalType: 'payment',
                          isOpenModal: !modalWindow.isOpenModal,
                        }),
                      );
                    }}
                    type={'primary-b'}
                  />
                </Fragment>
              }
            />
          );
        })}
      </LicenseTag>
      {modalWindow.isOpenModal && modalWindow.modalType === 'payment' ? (
        <ModalWindow children={<Payment userId={userId} amount={amount} />} />
      ) : (
        <></>
      )}
    </LicensePage>
  );
};
