import { call, put } from 'redux-saga/effects';

import { appStoreActions } from '../../reducer/app-reducer/reducer';
import { NotificationType } from '../../types';
import { AppSagaAction } from './saga-actions';

/**
 * @description hardcode duration on 5000 ms
 */
const sleep = (duration?: number) => new Promise((resolve) => setTimeout(resolve, duration ?? 5000));

export function* notificationVisible({ payload }: { payload: NotificationType }) {
  yield put(
    appStoreActions.notification({
      isActive: payload.isActive,
      mode: payload.mode,
      message: payload.message,
    }),
  );
}

export function* closeNotification() {
  yield call(sleep);
  yield put(appStoreActions.notificationClose());
}

function* errorProcessing(error: unknown) {
  const { message } = error as { message: string };

  yield put(
    AppSagaAction.notification({
      isActive: true,
      mode: 'error',
      message: message,
    }),
  );
}
