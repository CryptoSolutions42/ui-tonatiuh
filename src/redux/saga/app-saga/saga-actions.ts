import { createAction } from '@reduxjs/toolkit';
import { NotificationType } from '../../types';

const NOTIFY = 'NOTIFY';
const NOTIFY_CLOSE = 'NOTIFY_CLOSE';

export const AppSagaAction = {
    notification: createAction<NotificationType>(NOTIFY),
    notificationClose: createAction(NOTIFY_CLOSE),
};
