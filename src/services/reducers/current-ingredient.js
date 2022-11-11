import { SET_CURRENT_INGREDIENT } from "@/services/actions/current-ingredient";

const initialStateCurrentIngredient = {};

export function currentIngredientReducer(
  state = initialStateCurrentIngredient,
  action
) {
  switch (action.type) {
    case SET_CURRENT_INGREDIENT: {
      return {
        ...action.ingredient,
      };
    }
    default: {
      return state;
    }
  }
}
