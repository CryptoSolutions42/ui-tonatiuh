import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { I18nextProvider } from 'react-i18next';

import App from './App';
import { persistor, store } from './redux/store';
import { Notification } from './HOC/Notification';
import { Loader } from './components/Base';
import i18n from './i18next';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        {/* <PersistGate loading={<Loader />} persistor={persistor}> */}
        <Notification>
          <App />
        </Notification>
        {/* </PersistGate> */}
      </I18nextProvider>
      ,
    </Provider>
  </BrowserRouter>,
);
