import {
  ADD_CONSTRUCTOR__BUN,
  ADD_TO_CONSTRUCTOR_INGREDIENTS_LIST,
  DELETE_FROM_CONSTRUCTOR_INGREDIENTS_LIST,
  SET_ORDER_OF_INGREDIENTS,
  CLEAR_CONSTRUCTOR,
} from "@/services/actions/constructor-list";
import { IIngredient } from "@/utils/types";

type TBun = {
  type: typeof ADD_CONSTRUCTOR__BUN;
  bun: IIngredient;
};

type TAddIngredient = {
  type: typeof ADD_TO_CONSTRUCTOR_INGREDIENTS_LIST;
  ingredient: IIngredient & { key: string };
};

type TDeleteIngredient = {
  type: typeof DELETE_FROM_CONSTRUCTOR_INGREDIENTS_LIST;
  key: string;
};

type TSetOrder = {
  type: typeof SET_ORDER_OF_INGREDIENTS;
  dropIndex: number;
  dragIndex: number;
};

type TClear = {
  type: typeof CLEAR_CONSTRUCTOR;
};

export type TConstructorAction =
  | TBun
  | TAddIngredient
  | TDeleteIngredient
  | TSetOrder
  | TClear;

export const addBunToConstructor = (bun: IIngredient): TBun => {
  return {
    type: ADD_CONSTRUCTOR__BUN,
    bun: bun,
  };
};

export const addIngredientToConstructor = (
  item: IIngredient,
  key: string
): TAddIngredient => {
  return {
    type: ADD_TO_CONSTRUCTOR_INGREDIENTS_LIST,
    ingredient: { ...item, key },
  };
};

export const deleteIngredientFromConstructor = (
  key: string
): TDeleteIngredient => {
  return {
    type: DELETE_FROM_CONSTRUCTOR_INGREDIENTS_LIST,
    key: key,
  };
};

export const setOrderIngredients = (
  dragIndex: number,
  dropIndex: number
): TSetOrder => {
  return {
    type: SET_ORDER_OF_INGREDIENTS,
    dropIndex: dropIndex,
    dragIndex: dragIndex,
  };
};

export const clearConstructor = (): TClear => {
  return {
    type: CLEAR_CONSTRUCTOR,
  };
};
