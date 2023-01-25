import {
  ingredientsListReducer,
  initialIngredientsListState,
} from "./ingredients-list";
import * as actions from "../actions/ingredients-list";
import ingredientsData from "../../utils/data.json";

describe("ingredient list tests", () => {
  it("should return the initial state", () => {
    expect(ingredientsListReducer(undefined, {})).toEqual(
      initialIngredientsListState
    );
  });
  it("GET_INGREDIENTS_REQUEST", () => {
    expect(
      ingredientsListReducer(undefined, {
        type: actions.GET_INGREDIENTS_REQUEST,
      })
    ).toEqual({
      ...initialIngredientsListState,
      ingredientsListRequest: true,
      ingredientsListRequestFailed: false,
    });
  });
  it("GET_INGREDIENTS_ERROR", () => {
    expect(
      ingredientsListReducer(undefined, {
        type: actions.GET_INGREDIENTS_ERROR,
      })
    ).toEqual({
      ...initialIngredientsListState,
      ingredientsListRequestFailed: true,
      ingredientsListRequest: false,
    });
  });
  it("GET_INGREDIENT_SUCCESS", () => {
    expect(
      ingredientsListReducer(undefined, {
        type: actions.GET_INGREDIENTS_SUCCESS,
        ingredients: [ingredientsData],
      })
    ).toEqual({
      ...initialIngredientsListState,
      allItems: [ingredientsData],
      buns: [ingredientsData].filter((item) => item.type === "bun"),
      ingredients: [ingredientsData].filter((item) => item.type !== "bun"),
      sauceList: [ingredientsData].filter((item) => item.type === "sauce"),
      mainList: [ingredientsData].filter((item) => item.type === "main"),
    });
  });
});
