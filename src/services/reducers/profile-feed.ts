import {
  WS_PROFILE_FEED_CONNECTION_SUCCESS,
  WS_PROFILE_FEED_CONNECTION_START,
  WS_PROFILE_FEED_GET_MESSAGE,
  WS_PROFILE_FEED_CONNECTION_ERROR,
  WS_PROFILE_FEED_CONNECTION_CLOSED,
  WS_PROFILE_FEED_SET_MESSAGE,
} from "@/services/actions/profile-feed";
import { TProfileFeedActions } from "@/services/actions-creators/profile-feed";
import { IFeedOrders } from "@/utils/types";

const initialProfileFeedState = {
  orders: [],
  total: 0,
  totalToday: 0,
};

export const profileFeedReducer = (
  state: IFeedOrders = initialProfileFeedState,
  action: TProfileFeedActions
): IFeedOrders => {
  switch (action.type) {
    case WS_PROFILE_FEED_GET_MESSAGE: {
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
