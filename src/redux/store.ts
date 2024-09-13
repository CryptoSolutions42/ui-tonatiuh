import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import rootReducer from './rootReducer';
import { rootSaga } from './saga/root-saga';

export const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
