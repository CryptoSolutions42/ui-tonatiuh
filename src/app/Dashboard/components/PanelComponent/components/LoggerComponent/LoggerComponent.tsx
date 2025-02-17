import { FC, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { StyledLoggerComponent } from './styled/LoggerConponent.styled';
import { ConfigType } from '../../../../../../redux/types';
import { LoggerType } from './types/types';

const SOCKET_SERVER_URL = 'ws://localhost:5001';

export const LoggerComponent: FC<{ config: ConfigType }> = ({ config }) => {
  const [log, setLog] = useState<LoggerType>({} as LoggerType);

  useEffect(() => {
    const socket: Socket = io(SOCKET_SERVER_URL + config.id);

    socket.on('connect', () => {
      console.log('Connected to logger server, socket id:', socket.id);
    });

    socket.on(`log-${config.loggerEvent}`, (data: LoggerType) => {
      console.log('Received log:', data);
      setLog(data);
    });

    return () => {
      socket.disconnect();
    };
  }, [config]);

  return (
    <StyledLoggerComponent>
      <h2>Логи:</h2>
      {Object.keys(log).length > 0 ? (
        Object.keys(log).flatMap((keyLog, index) => <div key={`log-${index}`}>{keyLog}: {log[keyLog].toString()}</div>)
      ) : (
        <div>{'> Тут будут логи'}</div>
      )}
    </StyledLoggerComponent>
  );
};
