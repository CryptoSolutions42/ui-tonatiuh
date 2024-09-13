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
}
