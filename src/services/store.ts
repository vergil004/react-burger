import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/root-reducer";
import { socketMiddleware } from "./middleware/socketMiddleware";
import { wsActionsFeedProfile } from "./actions/profile-feed";
import { wsActionsFeed } from "./actions/feed";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk,
    socketMiddleware(wsActionsFeedProfile),
    socketMiddleware(wsActionsFeed)
  )
);

export const store = createStore(rootReducer, enhancer);
