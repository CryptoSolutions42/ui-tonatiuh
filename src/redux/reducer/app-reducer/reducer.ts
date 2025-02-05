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
    positionSize: 0.01,
    symbol: 'ETH/USDT',
    exchange: 'okx',
    percentBuyBackStep: 0.03,
    percentFromBalance: 0.03,
    percentProfit: 0.01,
    candlePriceRange: '4h',
    percentTargetAfterTakeProfit: 0.001,
    countGridSize: 0,
    gridSize: 0,
    takeProfit: 0,
    stopLoss: 0,
    isFibonacci: true,
    isPercentTargetAfterTakeProfit: true,
    isCapitalizeDeltaFromSale: false,
    isCoinAccumulation: false,
    isConfigUpdate: false,
    isAutoStartTrading: true,
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
