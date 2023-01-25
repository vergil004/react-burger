import {
  GET_INGREDIENTS_ERROR,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
} from "../actions/ingredients-list";

import { IIngredient } from "../../utils/types";
import { TIngredientsListActions } from "../actions-creators/ingredients-list";

type TIngredientsState = {
  buns: ReadonlyArray<IIngredient>;
  allItems: ReadonlyArray<IIngredient>;
  ingredients: ReadonlyArray<IIngredient>;
  sauceList: ReadonlyArray<IIngredient>;
  mainList: ReadonlyArray<IIngredient>;
  ingredientsListRequest: boolean;
  ingredientsListRequestFailed: boolean;
  error: string;
};

export const initialIngredientsListState = {
  buns: [],
  allItems: [],
  ingredients: [],
  sauceList: [],
  mainList: [],
  ingredientsListRequest: false,
  ingredientsListRequestFailed: false,
  error: "",
};

export function ingredientsListReducer(
  state: TIngredientsState = initialIngredientsListState,
  action: TIngredientsListActions
): TIngredientsState {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsListRequest: true,
        ingredientsListRequestFailed: false,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        allItems: action.ingredients,
        buns: action.ingredients.filter(
          (ingredient) => ingredient.type === "bun"
        ),
        ingredients: action.ingredients.filter(
          (ingredient) => ingredient.type !== "bun"
        ),
        sauceList: action.ingredients.filter(
          (ingredient) => ingredient.type === "sauce"
        ),
        mainList: action.ingredients.filter(
          (ingredient) => ingredient.type === "main"
        ),
        ingredientsListRequest: false,
        ingredientsListRequestFailed: false,
      };
    }
    case GET_INGREDIENTS_ERROR: {
      return {
        ...state,
        ingredientsListRequestFailed: true,
        ingredientsListRequest: false,
      };
    }
    default: {
      return state;
    }
  }
}
