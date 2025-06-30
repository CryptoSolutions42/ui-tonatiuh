import { ConfigType } from '../../../../redux/types';

type ValidationFunction = (value: any) => { isValid: boolean; error?: string };

interface ConfigField {
  type: 'text' | 'number' | 'checkbox' | 'select';
  validation?: ValidationFunction;
  options?: string[];
  defaultValue?: any;
  step?: number;
}

export const configFields: Record<
  keyof Omit<
    ConfigType,
    | 'id'
    | 'isEmergencyStop'
    | 'countGridSize'
    | 'gridSize'
    | 'takeProfit'
    | 'stopLoss'
    | 'isEmergencyStop'
    | 'isStopTrading'
    | 'balanceDistribution'
    | 'loggerEvent'
  >,
  ConfigField
> = {
  symbol: {
    type: 'select',
    options: [
      'ETH/USDT',
      'BTC/USDT',
      'DOGE/USDT',
      'SOL/USDT',
      'OKB/USDT',
      'TON/USDT',
      'XRP/USDT',
      'ADA/USDT',
      'BNB/USDT',
      'DOT/USDT',
      'ENS/USDT',
      'EOS/USDT',
    ],
    validation: (value: string) => ({
      isValid: [
        'ETH/USDT',
        'BTC/USDT',
        'DOGE/USDT',
        'SOL/USDT',
        'OKB/USDT',
        'TON/USDT',
        'XRP/USDT',
        'ADA/USDT',
        'BNB/USDT',
        'DOT/USDT',
        'ENS/USDT',
        'EOS/USDT',
      ].includes(value),
      error: 'Выберите поддерживаемый символ',
    }),
  },
  apiKey: {
    type: 'text',
    validation: (value: string) => ({
      isValid: value.length >= 32,
      error: 'API ключ должен быть не менее 32 символов',
    }),
  },
  privateKey: {
    type: 'text',
    validation: (value: string) => ({
      isValid: value.length >= 32,
      error: 'Приватный ключ должен быть не менее 32 символов',
    }),
  },
  password: {
    type: 'text',
  },
  positionSize: {
    type: 'number',
    step: 0.001,
    validation: (value: number) => ({
      isValid: value > 0 && value <= 100,
      error: 'Укажите стартовый объем торговой позиции',
    }),
  },
  isAutoStartTrading: {
    type: 'checkbox',
    validation: (value: boolean) => ({
      isValid: typeof value === 'boolean',
    }),
  },
  percentProfit: {
    type: 'number',
    step: 0.001,
    validation: (value: number) => ({
      isValid: value > 0 && value <= 1,
      error: 'Процент прибыли должен быть между 0 и 1',
    }),
  },
  percentFromBalance: {
    type: 'number',
    step: 0.001,
    validation: (value: number) => ({
      isValid: value > 0 && value <= 1,
      error: 'Процент от баланса должен быть между 0 и 1',
    }),
  },
  percentBuyBackStep: {
    type: 'number',
    step: 0.001,
    validation: (value: number) => ({
      isValid: value > 0 && value <= 1,
      error: 'Процент шага выкупа должен быть между 0 и 1',
    }),
  },
  exchange: {
    type: 'select',
    options: ['okx', 'binance', 'bitget', 'kucoin', 'mexc', 'poloniex', 'gate', 'exmo', 'bybit'],
    validation: (value: string) => ({
      isValid: ['okx', 'binance', 'bitget', 'kucoin', 'mexc', 'poloniex', 'gate', 'exmo', 'bybit'].includes(value),
      error: 'Выберите поддерживаемую биржу',
    }),
  },
  isFibonacci: {
    type: 'checkbox',
    validation: (value: boolean) => ({
      isValid: typeof value === 'boolean',
    }),
  },
  candlePriceRange: {
    type: 'select',
    options: ['4h', '1h', '1d'],
    validation: (value: string) => ({
      isValid: ['binance', 'bybit', 'okx'].includes(value),
      error: 'Выберите поддерживаемую биржу',
    }),
  },
  percentTargetAfterTakeProfit: {
    type: 'number',
    step: 0.001,
    validation: (value: number) => ({
      isValid: value > 0 && value <= 1,
      error: 'Процент шага выкупа должен быть между 0 и 1',
    }),
  },
  isPercentTargetAfterTakeProfit: {
    type: 'checkbox',
    validation: (value: boolean) => ({
      isValid: typeof value === 'boolean',
    }),
  },
  isCapitalizeDeltaFromSale: {
    type: 'checkbox',
    validation: (value: boolean) => ({
      isValid: typeof value === 'boolean',
    }),
    defaultValue: false,
  },
  isCoinAccumulation: {
    type: 'checkbox',
    validation: (value: boolean) => ({
      isValid: typeof value === 'boolean',
    }),
  },
};
