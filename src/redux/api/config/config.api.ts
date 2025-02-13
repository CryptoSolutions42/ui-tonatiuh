import axios from 'axios';
import { ConfigType } from '../../types';

export const apiGetConfigs = async (): Promise<ConfigType[]> => {
  const { data } = await axios.get(`http://localhost:5001/config/getConfig`);
  return data;
};
