import {
  SET_ORDER_ERROR,
  SET_ORDER_SUCCESS,
  SET_ORDER_REQUEST,
} from "../actions/order";

type TOrderRequest = {
  type: typeof SET_ORDER_REQUEST;
};

type TOrderSuccess = {
  type: typeof SET_ORDER_SUCCESS;
  number: number;
  name: string;
};

type TOrderFailed = {
  type: typeof SET_ORDER_ERROR;
  errorText: string;
};

export type TOrderActions = TOrderRequest | TOrderSuccess | TOrderFailed;

export const setOrderRequest = (): TOrderRequest => {
  return {
    type: SET_ORDER_REQUEST,
  };
};

export const setOrderSuccess = (
  number: number,
  name: string
): TOrderSuccess => {
  return {
    type: SET_ORDER_SUCCESS,
    number: number,
    name: name,
  };
};

export const setOrderFailed = (error: string): TOrderFailed => {
  return {
    type: SET_ORDER_ERROR,
    errorText: error,
  };
};
