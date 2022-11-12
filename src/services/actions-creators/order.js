import {
  SET_ORDER_ERROR,
  SET_ORDER_REQUEST,
  SET_ORDER_SUCCESS,
} from "@/services/actions/order";

export const setOrderRequest = () => {
  return {
    type: SET_ORDER_REQUEST,
  };
};

export const setOrderSuccess = (number, name) => {
  return {
    type: SET_ORDER_SUCCESS,
    number: number,
    name: name,
  };
};

export const setOrderFailed = (error) => {
  return {
    type: SET_ORDER_ERROR,
    errorText: error,
  };
};
