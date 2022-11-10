import {
  ADD_CONSTRUCTOR__BUN,
  ADD_TO_CONSTRUCTOR_INGREDIENTS_LIST,
} from "@/services/actions/constructor-list";

export const addBunToConstructor = (bun) => {
  return {
    type: ADD_CONSTRUCTOR__BUN,
    bun: bun,
  };
};

export const addIngredientToConstructor = (item) => {
  return {
    type: ADD_TO_CONSTRUCTOR_INGREDIENTS_LIST,
    ingredient: { ...item },
  };
};
