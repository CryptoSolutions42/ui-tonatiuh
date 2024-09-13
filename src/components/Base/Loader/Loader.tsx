import React, { FC } from 'react';
import { LogoLoader } from './components/LogoLoader';

export const Loader: FC = () => {
  return (
    <div className="loader">
      <LogoLoader />
    </div>
  );
};
