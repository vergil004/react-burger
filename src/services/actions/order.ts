import {
  setOrderRequest,
  setOrderFailed,
  setOrderSuccess,
} from "../actions-creators/order";
import { sendOrderData } from "../../utils/burger-api";
import { clearConstructor } from "../actions-creators/constructor-list";
import { AppDispatch } from "../types";
import { AppThunk } from "../types";

export const SET_ORDER_REQUEST: "SET_ORDER_REQUEST" = "SET_ORDER_REQUEST";
export const SET_ORDER_SUCCESS: "SET_ORDER_SUCCESS" = "SET_ORDER_SUCCESS";
export const SET_ORDER_ERROR: "SET_ORDER_FAILED" = "SET_ORDER_FAILED";

export const setOrderData: AppThunk =
  (ingredientsIds) => (dispatch: AppDispatch) => {
    dispatch(setOrderRequest());
    sendOrderData(ingredientsIds)
      .then((response) => {
        dispatch(setOrderSuccess(response.order.number, response.name));
      })
      .then(() => dispatch(clearConstructor()))
      .catch((error) => {
        dispatch(setOrderFailed(error));
      });
  };
