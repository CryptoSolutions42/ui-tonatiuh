import { Order } from 'ccxt';

export type ModeType = 'buy' | 'sell';

export type LoggerType = {
  balance: { [key: string]: any };
  price: number;
  unrealizedPnl: number;
  lastPrice: number;
  side: ModeType;
  profitPrice: number;
  percentProfit: number;
  percentFromBalance: number;
  percentBuyBackStep: number;
  takerFee: number;
  options: {
    buyingBack: number;
    drawdownStep: number;
  };
  orders: Order[];
  firstCurrency: string;
  secondCurrency: string;
  deltaForSale: number;
  deltaForBuy: number;
  configId: number;
  _identity: string;
};
