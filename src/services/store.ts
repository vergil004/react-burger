import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "@/services/reducers/root-reducer";
import { socketMiddleware } from "@/services/middleware/socketMiddleware";
import { wsActionsFeed } from "@/services/actions/profile-feed";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, socketMiddleware(wsActionsFeed))
);

export const store = createStore(rootReducer, enhancer);
