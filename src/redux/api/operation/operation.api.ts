import axios from 'axios';
import { OrderType } from '../../types';

export const apiGetAllOrdersByIndexOperation = async (indexSession: string): Promise<OrderType[]> => {
  const { data } = await axios.get<OrderType[]>(
    `http://localhost:5001/operation/getAllOrdersByIndexOperation/${indexSession}`,
  );
  return data;
};
