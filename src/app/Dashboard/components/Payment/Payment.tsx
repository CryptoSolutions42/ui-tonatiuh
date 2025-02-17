import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { QrGenerator } from '../../../../components/Base/QrGenerator/QrGenerator';
import { CopyToClipboard } from '../../../../components/Base/CopyToClipboard/CopyToClipboard';
import { PaymentData } from '../../../../types/types';
import { SH1 } from '../../../../components/Base';

export const Payment = ({ userId, amount }: { userId: string; amount: number }) => {
  const [paymentData, setPaymentData] = useState<PaymentData>({} as PaymentData);
  const [qr, setQr] = useState<string>('mockQr');

  // useEffect(() => {
  //   axios
  //     .post<{ userId: string; amount: string }, PaymentData>('http://localhost:5012/getPaymentForSubscribe', {
  //       userId: '',
  //       amount,
  //     })
  //     .then((data: PaymentData) => {
  //       setPaymentData(data);
  //     })
  //     .catch((err: any) => {
  //       console.error(err);
  //     });

  //   setQr(paymentData.pay_address);
  // }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '700px',
        color: 'white',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '250px',
        }}
      >
        <SH1>Инструкция внесения платежа:</SH1>
        <ul>
          <li>Внесите оплату в размере {amount} USDT</li>
          <li>Платежное поручение действительно 30 минут</li>
          <li>Отсканируйте QR код со своего кошелька</li>
          <li>Либо скопируйте из поля ниже</li>
        </ul>
        <CopyToClipboard content={qr} />
      </div>
      <QrGenerator value={qr} />
    </div>
  );
};
