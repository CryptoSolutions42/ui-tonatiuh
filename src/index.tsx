import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { persistor, store } from './redux/store';
import { Notification } from './HOC/Notification';
import { Loader } from './components/Base';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      {/* <PersistGate loading={<Loader />} persistor={persistor}> */}
      <Notification>
        <App />
      </Notification>
      {/* </PersistGate> */}
    </Provider>
  </BrowserRouter>,
);
