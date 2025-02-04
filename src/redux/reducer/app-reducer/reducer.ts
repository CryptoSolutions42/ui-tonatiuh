import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ConfigType, IAppState, NotificationType } from '../../types';

const initialState: IAppState = {
  isLoading: false,
  isOpenModal: false,
  notification: {
    isActive: false,
    mode: undefined,
    message: undefined,
  },
  userId: '',
  config: {
    apiKey: '',
    privateKey: '',
    password: '',
    symbol: 'ETH/USDT',
    positionSize: 0.01,
    countGridSize: 0,
    gridSize: 0,
    percentBuyBackStep: 0.03,
    percentFromBalance: 0.03,
    isFibonacci: true,
    takeProfit: 0,
    stopLoss: 0,
    isEmergencyStop: false,
    percentProfit: 0.01,
    candlePriceRange: '4h',
    isPercentTargetAfterTakeProfit: true,
    isCapitalizeDeltaFromSale: false,
    isCoinAccumulation: false,
    isConfigUpdate: false,
    isAutoStartTrading: true,
    percentTargetAfterTakeProfit: 0.001,
    balanceDistribution: false,
    exchange: 'okx',
  },
};

export const appStore = createSlice({
  name: 'AppStore',
  initialState,
  reducers: {
    isLoading(state) {
      state.isLoading = !state.isLoading;
    },
    notification(state, { payload }: PayloadAction<NotificationType>) {
      state.notification = payload;
    },
    notificationClose(state) {
      state.notification = {
        isActive: false,
        mode: undefined,
        message: undefined,
      };
    },
    toggleModal(state, { payload }: PayloadAction<boolean>) {
      state.isOpenModal = payload;
    },
    getConfig(state, { payload }: PayloadAction<ConfigType>) {
      state.config = payload;
    },
  },
});

export const appStoreActions = {
  ...appStore.actions,
};

export const AppReducer = appStore.reducer;
