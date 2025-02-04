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
  symbol: string;
  positionSize: number;
  countGridSize: number | null;
  gridSize: number | null;
  percentBuyBackStep: number;
  takeProfit: number | null;
  stopLoss: number | null;
  isEmergencyStop: boolean;
  isFibonacci: boolean;
  percentProfit: number;
  percentFromBalance: number;
  candlePriceRange: string;
  isPercentTargetAfterTakeProfit: boolean;
  isCapitalizeDeltaFromSale: boolean;
  isCoinAccumulation: boolean;
  isConfigUpdate: boolean;
  isAutoStartTrading: boolean;
  percentTargetAfterTakeProfit: number;
  balanceDistribution: boolean;
  exchange: 'okx';
};
