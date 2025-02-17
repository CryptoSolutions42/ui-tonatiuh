export type NotificationType = {
  isActive?: boolean;
  mode?: 'success' | 'info' | 'error';
  message?: string;
};

export interface IAppState {
  isLoading: boolean;
  notification: NotificationType;
  modalWindow: {
    isOpenModal: boolean;
    modalType: string;
  };
  userId: string;
  configs: ConfigType[];
  currentConfig?: ConfigType;
  currentMenu: string;
}

export type ConfigType = {
  id: number;
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
  isAutoStartTrading: boolean;
  isStopTrading: boolean;
  percentTargetAfterTakeProfit: number;
  balanceDistribution: boolean;
  exchange: 'okx' | 'binance' | 'bitget' | 'kucoin' | 'mexc' | 'poloniex' | 'gate' | 'exmo' | 'bybit';
  loggerEvent: string;
};
