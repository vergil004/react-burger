import {
  profileFeedReducer as reducer,
  initialProfileFeedState as state,
} from "./profile-feed";
import * as actions from "../actions/profile-feed";
describe("Profile feeed reducer test", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(state);
  });
  it("WS_PROFILE_FEED_CONNECTION_START", () => {
    expect(
      reducer(state, {
        type: actions.WS_PROFILE_FEED_CONNECTION_START,
        wsConnection: true,
      })
    ).toEqual({
      ...state,
      wsConnection: true,
    });
  });
});
