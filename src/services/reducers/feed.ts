import {
  WS_FEED_CONNECTION_START,
  WS_FEED_GET_MESSAGE,
  WS_FEED_CONNECTION_SUCCESS,
  WS_FEED_CONNECTION_ERROR,
  WS_FEED_CONNECTION_CLOSED,
  WS_FEED_SET_MESSAGE,
} from "@/services/actions/feed";
import { TFeedActions } from "@/services/actions-creators/feed";
import { IFeedOrders } from "@/utils/types";

const initialFeedOrders = {
  orders: [],
  total: 0,
  totalToday: 0,
};

export const feedReducer = (
  state: IFeedOrders = initialFeedOrders,
  action: TFeedActions
): IFeedOrders => {
  switch (action.type) {
    case WS_FEED_GET_MESSAGE: {
      return {
        ...state,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };
    }
    default:
      return state;
  }
};
