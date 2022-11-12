import {
  SET_ORDER_ERROR,
  SET_ORDER_REQUEST,
  SET_ORDER_SUCCESS,
} from "@/services/actions/order";

const initialOrderState = {
  number: 0,
  name: "",
  errorText: "",
  orderRequest: false,
  orderRequestFailed: false,
};

export const orderReducer = (state = initialOrderState, action) => {
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
