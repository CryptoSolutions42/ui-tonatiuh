import { createAction } from '@reduxjs/toolkit';
import { ConfigType, NotificationType } from '../../types';

const NOTIFY = 'NOTIFY';
const NOTIFY_CLOSE = 'NOTIFY_CLOSE';
const GET_CONFIGS = 'GET_CONFIGS';
const GET_ORDERS = 'GET_ORDERS';
const GET_BALANCE = 'GET_BALANCE';
const GET_ALL_SESSION = 'GET_ALL_SESSION';
const GET_ALL_ORDERS_BY_SESSION_INDEX = 'GET_ALL_ORDERS_BY_SESSION_INDEX';
const CREATE_CONFIG = 'CREATE_CONFIG';
const UPDATE_CONFIG = 'UPDATE_CONFIG';
const DISABLE_AUTOSTART = 'DISABLE_AUTOSTART';
const EMERGENCY_STOP = 'EMERGENCY_STOP';
const STOP_TRADING = 'STOP_TRADING';
const START_TRADING = 'START_TRADING';

export const AppSagaAction = {
  notification: createAction<NotificationType>(NOTIFY),
  notificationClose: createAction(NOTIFY_CLOSE),
  getConfigs: createAction(GET_CONFIGS),
  getOrders: createAction<number>(GET_ORDERS),
  getBalance: createAction(GET_BALANCE),
  getAllSession: createAction(GET_ALL_SESSION),
  getAllOrdersBySessionIndex: createAction<string[]>(GET_ALL_ORDERS_BY_SESSION_INDEX),
  createConfig: createAction<ConfigType>(CREATE_CONFIG),
  updateConfig: createAction<ConfigType>(UPDATE_CONFIG),
  disableAutostart: createAction<number>(DISABLE_AUTOSTART),
  emergencyStop: createAction<number>(EMERGENCY_STOP),
  stopTrading: createAction<number>(STOP_TRADING),
  startTrading: createAction<number>(START_TRADING),
};
