import { SET_CURRENT_INGREDIENT } from "@/services/actions/current-ingredient";

const initialStateCurrentIngredient = null;

export function currentIngredientReducer(
  state = initialStateCurrentIngredient,
  action
) {
  switch (action.type) {
    case SET_CURRENT_INGREDIENT: {
      if (action.ingredient) {
        return {
          ...action.ingredient,
        };
      }
      return null;
    }
    default: {
      return state;
    }
  }
}
