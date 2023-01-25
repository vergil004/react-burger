import { getUserInfo, updateUserInfo, logout } from "../../utils/user-api";
import { loginUser, registration } from "../../utils/auth-api";
import {
  setUserLogut,
  setUserSuccess,
  getUserRequest,
  setUserFailed,
} from "../actions-creators/user";
import { AppDispatch } from "../types";
import { IRegistration } from "../../utils/types";
import { ILogin } from "../../utils/types";
import { AppThunk } from "../types";

export const GET_USER_REQUEST: "GET_USER_REQUEST" = "GET_USER_REQUEST";
export const SET_USER_SUCCESS: "SET_USER_SUCCESS" = "SET_USER_SUCCESS";
export const SET_USER_FAILED: "SET_USER_FAILED" = "SET_USER_FAILED";
export const USER_LOGOUT: "USER_LOGOUT" = "USER_LOGOUT";

export const getUserData = () => async (dispatch: AppDispatch) => {
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

export const updateUser =
  (data: IRegistration) => async (dispatch: AppDispatch) => {
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

export const userLogout: AppThunk = () => async (dispatch: AppDispatch) => {
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

export const loginRequest: AppThunk =
  ({ password, email }: ILogin) =>
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

export const registrationRequest: AppThunk =
  ({ email, password, name }: IRegistration) =>
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
