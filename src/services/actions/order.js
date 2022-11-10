import {
  setOrderSuccess,
  setOrderFailed,
  setOrderRequest,
} from "@/services/actions-creators/order";

import { sendOrderData } from "@/utils/burger-api";

export const SET_ORDER_REQUEST = "SET_ORDER_REQUEST";
export const SET_ORDER_SUCCESS = "SET_ORDER_SUCCESS";
export const SET_ORDER_FAILED = "SET_ORDER_FAILED";

export const setOrderData = (ingredientsIds) => (dispatch) => {
  dispatch(setOrderRequest());
  sendOrderData(ingredientsIds)
    .then((response) => {
      dispatch(setOrderSuccess(response.order.number, response.name));
    })
    .catch((error) => {
      dispatch(setOrderFailed(error));
    });
};
