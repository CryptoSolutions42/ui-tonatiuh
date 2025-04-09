import { takeLatest } from 'redux-saga/effects';
import {
  notificationVisible,
  closeNotification,
  getConfigs,
  getOrders,
  getAllBalance,
  getAllSession,
  getAllOrdersBySessionIndex,
} from './app-saga';
import { AppSagaAction } from './saga-actions';

export function* watcherSagaApp() {
  yield takeLatest(AppSagaAction.notification, notificationVisible);
  yield takeLatest(AppSagaAction.notificationClose, closeNotification);
  yield takeLatest(AppSagaAction.getConfigs, getConfigs);
  yield takeLatest(AppSagaAction.getOrders, getOrders);
  yield takeLatest(AppSagaAction.getBalance, getAllBalance);
  yield takeLatest(AppSagaAction.getAllSession, getAllSession);
  yield takeLatest(AppSagaAction.getAllOrdersBySessionIndex, getAllOrdersBySessionIndex);
}
