import axios from 'axios';

export const apiStartTrading = async (idConfig: number): Promise<void> => {
  await axios.get(`http://localhost:5001/startTrading/${idConfig}`);
};

export const apiStopTrading = async (idConfig: number): Promise<void> => {
  await axios.post(`http://localhost:5001/config/stopTrading`, { configId: idConfig });
};
