import { WS_FEED_CONNECTION_START, WS_FEED_GET_MESSAGE } from "../actions/feed";
import { TFeedActions } from "../actions-creators/feed";
import { IFeedOrders } from "../../utils/types";

export const initialFeedOrders = {
  orders: [],
  total: 0,
  totalToday: 0,
  wsConnection: false,
};

export const feedReducer = (
  state: IFeedOrders = initialFeedOrders,
  action: TFeedActions
): IFeedOrders => {
  switch (action.type) {
    case WS_FEED_CONNECTION_START: {
      return {
        ...state,
        wsConnection: true,
      };
    }
    case WS_FEED_GET_MESSAGE: {
      return {
        ...state,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
        wsConnection: true,
      };
    }
    default:
      return state;
  }
};
