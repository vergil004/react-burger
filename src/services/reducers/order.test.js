import { orderReducer, initialOrderState } from "./order";
import * as actions from "../actions/order";
import { SET_ORDER_REQUEST } from "../actions/order";

describe("Order reducer tests", () => {
  it("should return the initial state", () => {
    expect(orderReducer(undefined, {})).toEqual(initialOrderState);
  });
  it("SET_ORDER_REQUEST TEST", () => {
    expect(
      orderReducer(undefined, {
        type: actions.SET_ORDER_REQUEST,
      })
    ).toEqual({
      ...initialOrderState,
      orderRequestFailed: false,
      orderRequest: true,
    });
  });
  it("SET_ORDER_ERROR TEST", () => {
    expect(
      orderReducer(undefined, {
        type: actions.SET_ORDER_ERROR,
        errorText: "error text",
      })
    ).toEqual({
      ...initialOrderState,
      orderRequest: false,
      orderRequestFailed: true,
      errorText: "error text",
    });
  });
  it("SET_ORDER_SUCCESS", () => {
    expect(
      orderReducer(undefined, {
        type: actions.SET_ORDER_SUCCESS,
        name: "Заказ 313",
        number: 313,
      })
    ).toEqual({
      ...initialOrderState,
      orderRequestFailed: false,
      orderRequest: false,
      name: "Заказ 313",
      number: 313,
    });
  });
});
