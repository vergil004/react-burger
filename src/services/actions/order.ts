import {
  setOrderSuccess,
  setOrderFailed,
  setOrderRequest,
} from "@/services/actions-creators/order";

import { sendOrderData } from "@/utils/burger-api";
import { clearConstructor } from "@/services/actions-creators/constructor-list";

import { TDispatch } from "@/services/types";
import { AppThunk } from "@/services/types";

export const SET_ORDER_REQUEST: "SET_ORDER_REQUEST" = "SET_ORDER_REQUEST";
export const SET_ORDER_SUCCESS: "SET_ORDER_SUCCESS" = "SET_ORDER_SUCCESS";
export const SET_ORDER_ERROR: "SET_ORDER_FAILED" = "SET_ORDER_FAILED";

export const setOrderData: AppThunk =
  (ingredientsIds) => (dispatch: TDispatch) => {
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
