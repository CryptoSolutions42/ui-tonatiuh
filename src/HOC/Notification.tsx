import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';

import { AppSagaAction } from '../redux/saga/app-saga/saga-actions';
import { RootState } from '../redux/store';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 0.7;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 0.7;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const NotificationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 100px;
  width: 100vw;
  height: 100px;
  position: fixed;
  z-index: 1000;

  &.visible {
    animation: ${slideIn} 0.5s ease forwards;
  }

  &.hidden {
    animation: ${slideOut} 0.5s ease forwards;
  }
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
`;

export const Notification: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const dispatch = useDispatch();
  const notification = useSelector(({ AppReducer }: RootState) => AppReducer.notification);

  useEffect(() => {
    if (notification.isActive) {
      const timer = setTimeout(() => {
        dispatch(AppSagaAction.notificationClose());
      }, 3000); // 3 seconds before auto-close
      return () => clearTimeout(timer);
    }
  }, [notification.isActive, dispatch]);

  return (
    <>
      {notification.isActive && (
        <NotificationWrapper className={notification.isActive ? 'visible' : 'hidden'}>
          <NotificationBody color={notification.mode}>{notification.message}</NotificationBody>
        </NotificationWrapper>
      )}
      {children}
    </>
  );
};
