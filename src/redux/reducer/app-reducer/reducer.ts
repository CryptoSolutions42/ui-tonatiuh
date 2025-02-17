import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ConfigType, IAppState, NotificationType } from '../../types';

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
  currentConfig: undefined,
  currentMenu: '',
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
  },
});

export const appStoreActions = {
  ...appStore.actions,
};

export const AppReducer = appStore.reducer;
