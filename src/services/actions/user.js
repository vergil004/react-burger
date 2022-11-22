import { getUserInfo } from "@/utils/user-api";
import { loginUser } from "@/utils/auth-api";
import {
  setUserSuccess,
  setUserFailed,
  getUserRequest,
} from "@/services/actions-creators/user";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const SET_USER_SUCCESS = "SET_USER_SUCCESS";
export const SET_USER_FAILED = "SET_USER_FAILED";

export const getUserData = () => async (dispatch) => {
  dispatch(getUserRequest());
  const result = await getUserInfo();
  if (result.success) {
    dispatch(setUserSuccess(result.user));
  } else {
    dispatch(setUserFailed(result.message));
  }
};

export const loginRequest =
  ({ password, email }) =>
  async (dispatch) => {
    dispatch(getUserRequest());
    await loginUser({ password, email })
      .then((response) => {
        dispatch(setUserSuccess(response.user));
      })
      .catch((error) => {
        dispatch(setUserFailed(error));
      });
  };
