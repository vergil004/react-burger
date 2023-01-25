import {
  getIngredientsRequest,
  getIngredientsFailed,
  getIngredientsSuccess,
} from "../actions-creators/ingredients-list";
import { getIngredientsData } from "../../utils/burger-api";
import { AppDispatch } from "../types";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_ERROR = "GET_INGREDIENTS_ERROR";

export const getIngredientsList = () => (dispatch: AppDispatch) => {
  dispatch(getIngredientsRequest());
  getIngredientsData()
    .then((response) => {
      dispatch(getIngredientsSuccess(response.data));
    })
    .catch((error) => {
      dispatch(getIngredientsFailed());
    });
};
