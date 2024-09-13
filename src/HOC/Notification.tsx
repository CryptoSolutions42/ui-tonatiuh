import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { AppSagaAction } from '../redux/saga/app-saga/saga-actions';
import { RootState } from '../redux/store';

const NotificationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 100px;
  opacity: 0.7;
  width: 100vw;
  height: 100px;
  position: fixed;
  z-index: 1000;
`;

const NotificationBody = styled.div`
  display: flex;
  background-color: ${(props) =>
    props.color === 'success' ? '#1aa7a7e6' : props.color === 'info' ? '#bc5f18' : '#d12751e7'};
  width: 600px;
  border-bottom-left-radius: 15px;
  border-start-start-radius: 15px;
  color: white;
  font-size: 20px;
  padding: 10px 10px;
  height: max-content;
  margin-right: 0;

  .visible {
    transition: ease 0.5s;
  }
`;

export const Notification: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const dispatch = useDispatch();
  const notification = useSelector(({ AppReducer }: RootState) => AppReducer.notification);

  useEffect(() => {
    dispatch(AppSagaAction.notificationClose());
  }, [notification.isActive === true]);

  return (
    <>
      {notification.isActive && (
        <NotificationWrapper>
          <NotificationBody color={notification.mode}>{notification.message}</NotificationBody>
        </NotificationWrapper>
      )}
      {children}
    </>
  );
};
