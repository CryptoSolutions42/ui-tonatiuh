import { createAction } from '@reduxjs/toolkit';
import { ConfigType, NotificationType } from '../../types';

const NOTIFY = 'NOTIFY';
const NOTIFY_CLOSE = 'NOTIFY_CLOSE';
const GET_CONFIGS = 'GET_CONFIGS';

export const AppSagaAction = {
  notification: createAction<NotificationType>(NOTIFY),
  notificationClose: createAction(NOTIFY_CLOSE),
  getConfigs: createAction(GET_CONFIGS),
};
