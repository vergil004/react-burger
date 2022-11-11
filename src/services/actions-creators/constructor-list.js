import {
  ADD_CONSTRUCTOR__BUN,
  ADD_TO_CONSTRUCTOR_INGREDIENTS_LIST,
  DELETE_FROM_CONSTRUCTOR_INGREDIENTS_LIST,
} from "@/services/actions/constructor-list";

export const addBunToConstructor = (bun) => {
  return {
    type: ADD_CONSTRUCTOR__BUN,
    bun: bun,
  };
};

export const addIngredientToConstructor = (item, key) => {
  return {
    type: ADD_TO_CONSTRUCTOR_INGREDIENTS_LIST,
    ingredient: { ...item, key },
  };
};

export const deleteIngredientFromConstrutor = (key) => {
  return {
    type: DELETE_FROM_CONSTRUCTOR_INGREDIENTS_LIST,
    key: key,
  };
};
