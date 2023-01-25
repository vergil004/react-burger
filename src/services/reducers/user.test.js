import { userReducer, initialUserState } from "./user";
import * as actions from "../actions/user";

describe("USER REDUCER TESTS", () => {
  it("should return the initial state", () => {
    expect(userReducer(undefined, {})).toEqual(initialUserState);
  });
  it("GET_USER_REQUEST", () => {
    expect(
      userReducer(undefined, {
        type: actions.GET_USER_REQUEST,
      })
    ).toEqual({
      ...initialUserState,
      isLoading: true,
      error: null,
    });
  });
  it("SET_USER_SUCCESS", () => {
    expect(
      userReducer(undefined, {
        type: actions.SET_USER_SUCCESS,
        data: { name: "Vergil", email: "vergil@yandex.ru" },
      })
    ).toEqual({
      ...initialUserState,
      isLoading: false,
      isLoaded: true,
      data: { name: "Vergil", email: "vergil@yandex.ru" },
    });
  });
  it("SET_USER_FAILED", () => {
    expect(
      userReducer(undefined, {
        type: actions.SET_USER_FAILED,
        error: "Error",
      })
    ).toEqual({
      ...initialUserState,
      isLoading: false,
      isLoaded: true,
      error: "Error",
    });
  });
  it("USER_LOGOUT", () => {
    expect(
      userReducer(undefined, {
        type: actions.USER_LOGOUT,
      })
    ).toEqual({
      ...initialUserState,
    });
  });
});
