import type { Middleware, MiddlewareAPI } from "redux";
import { RootState, AppDispatch } from "../types";
import { TWSActions } from "../../utils/types";

import { TProfileFeedActions } from "../actions-creators/profile-feed";

export function socketMiddleware(wsActions: TWSActions): Middleware {
  return (store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;
    const { dispatch, getState } = store;
    const { wsInit, onOpen, onClose, onError, onMessage } = wsActions;
    return (next) => (action: TProfileFeedActions) => {
      const { type } = action;
      if (type === wsInit) {
        const url = action.url;
        socket = new WebSocket(url);
        if (socket) {
          socket.onopen = (event) => {
            dispatch({ type: onOpen });
          };
          socket.onerror = () => {
            dispatch({ type: onError });
          };
          socket.onmessage = (event) => {
            const { data } = event;
            const parsedData = JSON.parse(data);
            const { success, ...restParsedData } = parsedData;
            success && dispatch({ type: onMessage, payload: restParsedData });
          };
          socket.onclose = () => {
            dispatch({ type: onClose });
          };
        }
      }
      next(action);
    };
  };
}
