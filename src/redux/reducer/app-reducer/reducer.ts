import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BalanceType, ConfigType, IAppState, NotificationType, OrderType, SessionType } from '../../types';

const initialState: IAppState = {
  isLoading: false,
  modalWindow: {
    isOpenModal: false,
    modalType: '',
  },
  notification: {
    isActive: false,
    mode: undefined,
    message: undefined,
  },
  userId: '',
  configs: [],
  orders: [],
  ordersForHistory: [],
  currentConfig: undefined,
  currentMenu: 'dashboard',
  balance: [{} as BalanceType],
  allSession: [{} as SessionType],
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
    toggleModal(state, { payload }: PayloadAction<{ isOpenModal: boolean; modalType: string }>) {
      if (payload.modalType !== '') state.modalWindow = payload;
    },
    getConfigsState(state, { payload }: PayloadAction<ConfigType[]>) {
      state.configs = payload;
    },
    getCurrentConfig(state, { payload }: PayloadAction<ConfigType>) {
      state.currentConfig = payload;
    },
    setCurrentMenu(state, { payload }: PayloadAction<string>) {
      state.currentMenu = payload;
    },
    setOrders(state, { payload }: PayloadAction<OrderType[]>) {
      state.orders = payload;
    },
    setOrdersForHistory(state, { payload }: PayloadAction<{ indexSession: string; orders: OrderType[] }>) {
      state.ordersForHistory.push(payload);
    },
    clearOrdersForHistory(state) {
      state.ordersForHistory = [];
    },
    setBalance(state, { payload }: PayloadAction<BalanceType[]>) {
      state.balance = payload;
    },
    setSession(state, { payload }: PayloadAction<SessionType[]>) {
      state.allSession = payload;
    },
  },
});

export const appStoreActions = {
  ...appStore.actions,
};

export const AppReducer = appStore.reducer;
