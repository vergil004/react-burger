import {
  GET_INGREDIENTS_ERROR,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_REQUEST,
} from "../actions/ingredients-list";
import { IIngredient } from "../../utils/types";

type TIngredientsRequest = {
  type: typeof GET_INGREDIENTS_REQUEST;
};
type TIngredientsSuccess = {
  type: typeof GET_INGREDIENTS_SUCCESS;
  ingredients: ReadonlyArray<IIngredient>;
};
type TIngredienttFailed = {
  type: typeof GET_INGREDIENTS_ERROR;
};

export type TIngredientsListActions =
  | TIngredientsRequest
  | TIngredientsSuccess
  | TIngredienttFailed;

export const getIngredientsRequest = (): TIngredientsRequest => {
  return {
    type: GET_INGREDIENTS_REQUEST,
  };
};

export const getIngredientsSuccess = (
  items: ReadonlyArray<IIngredient>
): TIngredientsSuccess => {
  return {
    type: GET_INGREDIENTS_SUCCESS,
    ingredients: items,
  };
};

export const getIngredientsFailed = (): TIngredienttFailed => {
  return {
    type: GET_INGREDIENTS_ERROR,
  };
};
