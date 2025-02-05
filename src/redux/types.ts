export type NotificationType = {
  isActive?: boolean;
  mode?: 'success' | 'info' | 'error';
  message?: string;
};

export interface IAppState {
  isLoading: boolean;
  notification: NotificationType;
  isOpenModal: boolean;
  userId: string;
  config: ConfigType;
}

export type ConfigType = {
  apiKey?: string;
  privateKey?: string;
  password?: string;
  positionSize: number;
  symbol: string;
  exchange: 'okx';
  percentBuyBackStep: number;
  percentProfit: number;
  percentFromBalance: number;
  candlePriceRange: string;
  percentTargetAfterTakeProfit: number;
  countGridSize: number | null;
  gridSize: number | null;
  takeProfit: number | null;
  stopLoss: number | null;
  isFibonacci: boolean;
  isPercentTargetAfterTakeProfit: boolean;
  isCapitalizeDeltaFromSale: boolean;
  isCoinAccumulation: boolean;
  isConfigUpdate: boolean;
  isAutoStartTrading: boolean;
};
