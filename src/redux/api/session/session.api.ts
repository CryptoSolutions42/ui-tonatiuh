import axios from 'axios';
import { SessionType } from '../../types';

export const apiGetSessionByConfigId = async (configId: number): Promise<SessionType[]> => {
  const { data } = await axios.get<SessionType[]>(`http://localhost:5001/session/getActiveSession/${configId}`);
  return data;
};

export const apiGetAllSession = async (): Promise<SessionType[]> => {
  const { data } = await axios.get<SessionType[]>(`http://localhost:5001/session/getAllSession`);
  return data;
};

export const apiGetAllHistorySession = async (): Promise<SessionType[]> => {
  const { data } = await axios.get<SessionType[]>(`http://localhost:5001/session/getAllHistorySession`);
  return data;
};
