import { takeLatest } from 'redux-saga/effects';
import { notificationVisible, closeNotification } from './app-saga';
import { AppSagaAction } from './saga-actions';

export function* watcherSagaApp() {
    yield takeLatest(AppSagaAction.notification, notificationVisible);
    yield takeLatest(AppSagaAction.notificationClose, closeNotification);
}
