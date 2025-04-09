import { createAction } from '@reduxjs/toolkit';
import { NotificationType } from '../../types';

const NOTIFY = 'NOTIFY';
const NOTIFY_CLOSE = 'NOTIFY_CLOSE';
const GET_CONFIGS = 'GET_CONFIGS';
const GET_ORDERS = 'GET_ORDERS';
const GET_BALANCE = 'GET_BALANCE';
const GET_ALL_SESSION = 'GET_ALL_SESSION';
const GET_ALL_ORDERS_BY_SESSION_INDEX = 'GET_ALL_ORDERS_BY_SESSION_INDEX';

export const AppSagaAction = {
  notification: createAction<NotificationType>(NOTIFY),
  notificationClose: createAction(NOTIFY_CLOSE),
  getConfigs: createAction(GET_CONFIGS),
  getOrders: createAction<number>(GET_ORDERS),
  getBalance: createAction(GET_BALANCE),
  getAllSession: createAction(GET_ALL_SESSION),
  getAllOrdersBySessionIndex: createAction<string[]>(GET_ALL_ORDERS_BY_SESSION_INDEX),
};
