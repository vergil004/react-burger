import {
  WS_PROFILE_FEED_CONNECTION_CLOSED,
  WS_PROFILE_FEED_CONNECTION_ERROR,
  WS_PROFILE_FEED_CONNECTION_START,
  WS_PROFILE_FEED_CONNECTION_SUCCESS,
  WS_PROFILE_FEED_GET_MESSAGE,
  WS_PROFILE_FEED_SET_MESSAGE,
} from "@/services/actions/profile-feed";

type TStart = {
  type: typeof WS_PROFILE_FEED_CONNECTION_START;
};

type TSuccess = {
  type: typeof WS_PROFILE_FEED_CONNECTION_SUCCESS;
};

export type TProfileFeedActions = TStart | TSuccess;

export const profileFeedConnectionStart = (): TStart => {
  return {
    type: WS_PROFILE_FEED_CONNECTION_START,
  };
};

export const profileFeedConnectionSuccess = (): TSuccess => {
  return {
    type: WS_PROFILE_FEED_CONNECTION_SUCCESS,
  };
};
