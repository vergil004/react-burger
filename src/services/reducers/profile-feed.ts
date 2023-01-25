import { WS_PROFILE_FEED_GET_MESSAGE } from "../actions/profile-feed";
import { TProfileFeedActions } from "../actions-creators/profile-feed";
import { IFeedOrders } from "../../utils/types";

export const initialProfileFeedState = {
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
