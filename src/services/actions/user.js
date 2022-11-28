import { getUserInfo, updateUserInfo, logout } from "@/utils/user-api";
import { loginUser, registration } from "@/utils/auth-api";
import {
  setUserSuccess,
  setUserFailed,
  getUserRequest,
  setUserLogut,
} from "@/services/actions-creators/user";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const SET_USER_SUCCESS = "SET_USER_SUCCESS";
export const SET_USER_FAILED = "SET_USER_FAILED";
export const USER_LOGOUT = "USER_LOGOUT";

export const getUserData = () => async (dispatch) => {
  dispatch(getUserRequest());
  await getUserInfo()
    .then((result) => {
      if (result.success) {
        dispatch(setUserSuccess(result.user));
      } else {
        dispatch(setUserFailed(result.message));
      }
      return result;
    })
    .catch((error) => {
      dispatch(setUserFailed(error.message));
      return error;
    });
};

export const updateUser = (data) => async (dispatch) => {
  dispatch(getUserRequest());
  await updateUserInfo(data)
    .then((result) => {
      if (result.success) {
        dispatch(setUserSuccess(result.user));
      } else {
        dispatch(setUserFailed(result.message));
      }
      return result;
    })
    .catch((error) => {
      dispatch(setUserFailed(error.message));
      return error;
    });
};

export const userLogout = () => async (dispatch) => {
  await logout()
    .then((result) => {
      if (result.success) {
        dispatch(setUserLogut());
      } else {
        dispatch(setUserFailed(result.message));
      }
      return result;
    })
    .catch((error) => {
      dispatch(setUserFailed(error.message));
      return error;
    });
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

export const registrationRequest =
  ({ email, password, name }) =>
  async (dispatch) => {
    dispatch(getUserRequest());
    await registration({ email, password, name })
      .then((response) => {
        dispatch(setUserSuccess(response.user));
      })
      .catch((error) => {
        dispatch(setUserFailed(error));
      });
  };
