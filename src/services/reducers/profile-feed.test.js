import {
  profileFeedReducer as reducer,
  initialProfileFeedState as state,
} from "./profile-feed";
import * as actions from "../actions/profile-feed";
describe("Profile feeed reducer test", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(state);
  });
});
