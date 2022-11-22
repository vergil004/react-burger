import {
  GET_USER_REQUEST,
  SET_USER_SUCCESS,
  SET_USER_FAILED,
} from "@/services/actions/user";

export const getUserRequest = () => {
  return {
    type: "GET_USER_REQUEST",
  };
};

export const setUserSuccess = (data) => {
  return {
    type: "SET_USER_SUCCESS",
    data: data,
  };
};

export const setUserFailed = (error) => {
  return {
    type: "SET_USER_FAILED",
    error: error,
  };
};
