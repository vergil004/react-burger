import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_SUCCESS,
} from "@/services/actions/ingredients-list";

export const getIngredientsRequest = () => {
  return {
    type: GET_INGREDIENTS_REQUEST,
  };
};

export const getIngredientsSuccess = (items) => {
  return {
    type: GET_INGREDIENTS_SUCCESS,
    ingredients: items,
  };
};

export const getIngredientsFailed = () => {
  return {
    type: GET_INGREDIENTS_FAILED,
  };
};
