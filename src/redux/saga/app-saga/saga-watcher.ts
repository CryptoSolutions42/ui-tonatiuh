import { takeLatest } from 'redux-saga/effects';
import {
  notificationVisible,
  closeNotification,
  getConfigs,
  getOrders,
  getAllBalance,
  getAllSession,
  getAllOrdersBySessionIndex,
  createConfig,
  disableAutostart,
  emergencyStop,
  stopTrading,
  updateConfig,
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
  yield takeLatest(AppSagaAction.createConfig, createConfig);
  yield takeLatest(AppSagaAction.updateConfig, updateConfig);
  yield takeLatest(AppSagaAction.disableAutostart, disableAutostart);
  yield takeLatest(AppSagaAction.emergencyStop, emergencyStop);
  yield takeLatest(AppSagaAction.stopTrading, stopTrading);
}
