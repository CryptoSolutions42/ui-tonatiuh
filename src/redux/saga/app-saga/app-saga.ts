import { call, put } from 'redux-saga/effects';

import { appStoreActions } from '../../reducer/app-reducer/reducer';
import { BalanceType, ConfigType, NotificationType, OrderType, SessionType } from '../../types';
import { apiGetConfigs } from '../../api/config/config.api';
import { AppSagaAction } from './saga-actions';
import { apiGetSessionByConfigId, apiGetAllSession } from '../../api/session/session.api';
import { apiGetAllOrdersByIndexOperation } from '../../api/operation/operation.api';
import { apiGetBalance } from '../../api/balance/balance.api';

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

export function* getConfigs() {
  try {
    const configs: ConfigType[] = yield call(apiGetConfigs);
    yield put(appStoreActions.getConfigsState(configs));
    yield put(
      AppSagaAction.notification({
        isActive: true,
        mode: 'success',
        message: 'Configurations successfully loaded',
      }),
    );
  } catch (error) {
    yield call(errorProcessing, error);
  }
}

export function* getOrders({ payload }: { payload: number }) {
  try {
    const sessions: SessionType[] = yield call(apiGetSessionByConfigId, payload);
    const session = sessions.find((session) => session.indexSession !== undefined)!;
    const orders: OrderType[][] = yield call(apiGetAllOrdersByIndexOperation, session.indexSession);
    const ordersForPair: OrderType[] = orders.find((orderList) => orderList.length !== 0)!;
    yield put(appStoreActions.setOrders(ordersForPair));
  } catch (error) {
    yield call(errorProcessing, error);
  }
}

export function* getAllBalance() {
  try {
    const balance: BalanceType[] = yield call(apiGetBalance);
    yield put(appStoreActions.setBalance(balance));
  } catch (error) {
    yield call(errorProcessing, error);
  }
}

export function* getAllSession() {
  try {
    const sessions: SessionType[][] = yield call(apiGetAllSession);
    // const sessions: SessionType[][] = yield call(apiGetAllHistorySession);
    yield put(appStoreActions.setSession(sessions.flatMap((session) => session)));
  } catch (error) {
    yield call(errorProcessing, error);
  }
}

export function* getAllOrdersBySessionIndex({ payload }: { payload: string[] }) {
  try {
    for (const session of payload) {
      const orders = yield call(apiGetAllOrdersByIndexOperation, session);
      yield put(
        appStoreActions.setOrdersForHistory({ indexSession: session, orders: orders.flatMap((order) => order) }),
      );
    }
  } catch (error) {
    yield call(errorProcessing, error);
  }
}

export function* closeNotification() {
  yield call(sleep);
  yield put(appStoreActions.notificationClose());
}

function* errorProcessing(error: unknown) {
  const { message } = error as { message: string };

  yield put(
    appStoreActions.notification({
      isActive: true,
      mode: 'error',
      message: message,
    }),
  );
}
