import { feedReducer as reducer, initialFeedOrders as state } from "./feed";
import * as actions from "../actions/feed";

const ordersData = {
  success: true,
  orders: [
    {
      _id: "63d10f8b936b17001be53792",
      ingredients: [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733cb",
        "60d3b41abdacab0026a733c6",
      ],
      status: "done",
      name: "Био-марсианский краторный бургер",
      createdAt: "2023-01-25T11:16:27.377Z",
      updatedAt: "2023-01-25T11:16:27.778Z",
      number: 37848,
    },
    {
      _id: "63d10f82936b17001be5378f",
      ingredients: [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733cb",
        "60d3b41abdacab0026a733c6",
      ],
      status: "done",
      name: "Био-марсианский краторный бургер",
      createdAt: "2023-01-25T11:16:18.904Z",
      updatedAt: "2023-01-25T11:16:19.294Z",
      number: 37847,
    },
  ],
  total: 37757,
  totalToday: 119,
};

describe("FEED REDUCER TESTs", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(state);
  });
  it("WS_FEED_CONNECTION_START", () => {
    expect(
      reducer(state, {
        type: actions.WS_FEED_CONNECTION_START,
        wsConnection: true,
      })
    ).toEqual({
      ...state,
      wsConnection: true,
    });
  });
});
