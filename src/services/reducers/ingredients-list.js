import {
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
} from "../actions/ingredients-list";

const initialIngredientsListState = {
  buns: [],
  ingredients: [],
  sauceList: [],
  mainList: [],
  ingredientsListRequest: false,
  ingredientsListRequestFailed: false,
  error: "",
};

export function ingredientsListReducer(
  state = initialIngredientsListState,
  action
) {
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
    case GET_INGREDIENTS_FAILED: {
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
