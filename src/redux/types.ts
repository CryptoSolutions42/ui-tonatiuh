import { Order } from 'ccxt';

export type BalanceType = {
  usdt: number;
  profitAll: number;
  profitUsdt: number;
  balanceObject: string;
};

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
  orders: OrderType[];
  ordersForHistory: { indexSession: string; orders: OrderType[] }[];
  balance: BalanceType[];
  allSession: SessionType[];
}

export type SettingType = { urlTrading: string; wsUrl: string };

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

export type SessionType = {
  indexSession: string;
  isActive: boolean;
};

export type OrderType = {
  id: number;
  orderId: string;
  order: Order;
  createAt: number;
  price: number;
  amount: number;
  side: 'buy' | 'sell';
  symbol: string;
  isActive: number;
};
