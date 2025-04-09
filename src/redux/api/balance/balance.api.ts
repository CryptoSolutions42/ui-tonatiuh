import axios from 'axios';
import { BalanceType } from '../../types';

export const apiGetBalance = async (): Promise<BalanceType[]> => {
  const { data } = await axios.get<BalanceType[]>(`http://localhost:5001/balance/getAllBalance`);
  return data;
};
