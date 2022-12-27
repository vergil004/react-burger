import {
  WS_PROFILE_FEED_CONNECTION_CLOSED,
  WS_PROFILE_FEED_CONNECTION_ERROR,
  WS_PROFILE_FEED_CONNECTION_START,
  WS_PROFILE_FEED_CONNECTION_SUCCESS,
  WS_PROFILE_FEED_GET_MESSAGE,
  WS_PROFILE_FEED_SET_MESSAGE,
} from "@/services/actions/profile-feed";
import { IFeedData } from "@/utils/types";

type TStart = {
  type: typeof WS_PROFILE_FEED_CONNECTION_START;
  url: string;
};

type TSuccess = {
  type: typeof WS_PROFILE_FEED_CONNECTION_SUCCESS;
};
type TSend = {
  type: typeof WS_PROFILE_FEED_SET_MESSAGE;
  payload: IFeedData;
};

export type TProfileFeedActions = TStart | TSuccess;

export const profileFeedConnectionStart = (url: string): TStart => {
  return {
    type: WS_PROFILE_FEED_CONNECTION_START,
    url: url,
  };
};

export const profileFeedConnectionSuccess = (): TSuccess => {
  return {
    type: WS_PROFILE_FEED_CONNECTION_SUCCESS,
  };
};

export const profileFeedSendMessage = (message: IFeedData): TSend => {
  return {
    type: WS_PROFILE_FEED_SET_MESSAGE,
    payload: message,
  };
};
