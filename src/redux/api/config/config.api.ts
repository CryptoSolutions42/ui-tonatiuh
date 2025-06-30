import axios from 'axios';
import { ConfigType } from '../../types';

export const apiGetConfigs = async (): Promise<ConfigType[]> => {
  const { data } = await axios.get(`http://localhost:5001/config/getConfig`);
  return data;
};

export const apiCreateConfig = async (config: ConfigType): Promise<void> => {
  await axios.post(`http://localhost:5001/config/createConfig`, { ...config });
};

export const apiUpdateConfig = async (config: ConfigType): Promise<void> => {
  await axios.post(`http://localhost:5001/config/updateConfig`, { ...config });
};

export const apiDisableAutostart = async (idConfig: number): Promise<void> => {
  await axios.post(`http://localhost:5001/config/disableAutostart`, { configId: idConfig });
};

export const apiEmergencyStop = async (idConfig: number): Promise<void> => {
  await axios.post(`http://localhost:5001/config/emergencyStop`, { configId: idConfig });
};
