import { QRCodeSVG } from 'qrcode.react';

export const QrGenerator = ({ value }: { value: string }) => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        padding: '20px',
      }}
    >
      <QRCodeSVG size={200} bgColor="transparent" value={value} />
    </div>
  );
};
