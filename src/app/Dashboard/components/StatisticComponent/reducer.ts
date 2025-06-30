import { StatisticState } from './types';

export const initialState: StatisticState = {
  profitUsdt: true,
  profitAll: false,
  usdtBalance: false,
};

export type StatisticActionType =
  | { type: 'TOGGLE_PROFIT_USDT' }
  | { type: 'TOGGLE_PROFIT_ALL' }
  | { type: 'TOGGLE_USDT_BALANCE' }
  | { type: 'RESET_ALL' };

export function statisticReducer(state: StatisticState, action: StatisticActionType): StatisticState {
  switch (action.type) {
    case 'TOGGLE_PROFIT_USDT':
      return {
        ...state,
        profitUsdt: !state.profitUsdt,
      };
    case 'TOGGLE_PROFIT_ALL':
      return {
        ...state,
        profitAll: !state.profitAll,
      };
    case 'TOGGLE_USDT_BALANCE':
      return {
        ...state,
        usdtBalance: !state.usdtBalance,
      };
    case 'RESET_ALL':
      return initialState;
    default:
      return state;
  }
}
