import {
  SET_ORDER_ERROR,
  SET_ORDER_REQUEST,
  SET_ORDER_SUCCESS,
} from "@/services/actions/order";
import { TOrderActions } from "@/services/actions-creators/order";

type TOrderState = {
  number: number;
  name: string;
  errorText: string;
  orderRequest: boolean;
  orderRequestFailed: boolean;
};

const initialOrderState = {
  number: 0,
  name: "",
  errorText: "",
  orderRequest: false,
  orderRequestFailed: false,
};

export const orderReducer = (
  state: TOrderState = initialOrderState,
  action: TOrderActions
): TOrderState => {
  switch (action.type) {
    case SET_ORDER_REQUEST: {
      return {
        ...state,
        orderRequestFailed: false,
        orderRequest: true,
      };
    }
    case SET_ORDER_SUCCESS: {
      return {
        ...state,
        number: action.number,
        name: action.name,
        orderRequest: false,
        orderRequestFailed: false,
      };
    }
    case SET_ORDER_ERROR: {
      return {
        ...state,
        orderRequest: false,
        orderRequestFailed: true,
        errorText: action.errorText,
      };
    }
    default: {
      return state;
    }
  }
};
