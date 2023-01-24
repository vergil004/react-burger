import {
  GET_USER_REQUEST,
  SET_USER_FAILED,
  SET_USER_SUCCESS,
  USER_LOGOUT,
} from "../actions/user";
import { IUser } from "../../utils/types";

type TUserRequest = {
  type: typeof GET_USER_REQUEST;
};

type TUserSuccess = {
  type: typeof SET_USER_SUCCESS;
  data: IUser;
};
type TUserFailed = {
  type: typeof SET_USER_FAILED;
  error: string;
};
type TUserLogout = {
  type: typeof USER_LOGOUT;
};
export type TUserActions =
  | TUserRequest
  | TUserSuccess
  | TUserFailed
  | TUserLogout;

export const getUserRequest = (): TUserRequest => {
  return {
    type: GET_USER_REQUEST,
  };
};

export const setUserSuccess = (data: IUser): TUserSuccess => {
  return {
    type: SET_USER_SUCCESS,
    data: data,
  };
};

export const setUserFailed = (error: string): TUserFailed => {
  return {
    type: SET_USER_FAILED,
    error: error,
  };
};

export const setUserLogut = (): TUserLogout => {
  return {
    type: USER_LOGOUT,
  };
};
