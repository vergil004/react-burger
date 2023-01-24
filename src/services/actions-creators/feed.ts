import {
  WS_FEED_CONNECTION_CLOSED,
  WS_FEED_SET_MESSAGE,
  WS_FEED_CONNECTION_SUCCESS,
  WS_FEED_CONNECTION_ERROR,
  WS_FEED_GET_MESSAGE,
  WS_FEED_CONNECTION_START,
} from "../actions/feed";
import { IFeedOrders } from "../../utils/types";

type TStart = {
  type: typeof WS_FEED_CONNECTION_START;
  url: string;
};

type TMessage = {
  type: typeof WS_FEED_GET_MESSAGE;
  payload: IFeedOrders;
};

type TClosed = {
  type: typeof WS_FEED_CONNECTION_CLOSED;
};

export type TFeedActions = TStart | TMessage;

export const feedConnectionStart = (url: string): TStart => {
  return {
    type: WS_FEED_CONNECTION_START,
    url: url,
  };
};

export const feedConnectionMessage = (message: IFeedOrders) => {
  return {
    type: WS_FEED_GET_MESSAGE,
    payload: message,
  };
};

export const feedConnectionClosed = (): TClosed => {
  return {
    type: WS_FEED_CONNECTION_CLOSED,
  };
};
