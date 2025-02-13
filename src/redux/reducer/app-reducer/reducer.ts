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
  configs: [],
  currentConfig: undefined
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
    getConfigsState(state, { payload }: PayloadAction<ConfigType[]>) {
      state.configs = payload;
    },
    getCurrentConfig(state, { payload }: PayloadAction<ConfigType>) {
      state.currentConfig = payload;
    },
  },
});

export const appStoreActions = {
  ...appStore.actions,
};

export const AppReducer = appStore.reducer;
