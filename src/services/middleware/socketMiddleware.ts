import type { Middleware, MiddlewareAPI } from "redux";
import { RootState, AppDispatch } from "@/services/types";
import { wsActionsFeed } from "@/services/actions/profile-feed";
import {
  TProfileFeedActions,
  profileFeedConnectionSuccess,
} from "@/services/actions-creators/profile-feed";
import { WS_PROFILE_FEED_SET_MESSAGE } from "@/services/actions/profile-feed";

export function socketMiddleware(wsActions: typeof wsActionsFeed): Middleware {
  return (store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;
    const { dispatch, getState } = store;
    const user = getState().user;
    return (next) => (action: TProfileFeedActions) => {
      const { type } = action;
      if (type === wsActionsFeed.wsInit) {
        const url = action.url;
        socket = new WebSocket(url);
      }
      if (socket) {
        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;
          console.log(restParsedData);
        };
        socket.onopen = (event) => {
          dispatch(profileFeedConnectionSuccess());
        };
      }
      next(action);
    };
  };
}
