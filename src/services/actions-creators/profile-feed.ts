import {
  WS_PROFILE_FEED_CONNECTION_CLOSED,
  WS_PROFILE_FEED_GET_MESSAGE,
  WS_PROFILE_FEED_SET_MESSAGE,
  WS_PROFILE_FEED_CONNECTION_ERROR,
  WS_PROFILE_FEED_CONNECTION_START,
  WS_PROFILE_FEED_CONNECTION_SUCCESS,
} from "../actions/profile-feed";
import { IFeedOrders, IFeedData } from "../../utils/types";

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
type TMessage = {
  type: typeof WS_PROFILE_FEED_GET_MESSAGE;
  payload: IFeedOrders;
};
type TClosed = {
  type: typeof WS_PROFILE_FEED_CONNECTION_CLOSED;
};

export type TProfileFeedActions = TStart | TSuccess | TMessage;

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

export const profileConnectionClosed = (): TClosed => {
  return {
    type: WS_PROFILE_FEED_CONNECTION_CLOSED,
  };
};

export const profileFeedSendMessage = (message: IFeedData): TSend => {
  return {
    type: WS_PROFILE_FEED_SET_MESSAGE,
    payload: message,
  };
};
