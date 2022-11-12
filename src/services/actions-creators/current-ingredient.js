import { SET_CURRENT_INGREDIENT } from "@/services/actions/current-ingredient";

export function setCurrentIngredient(ingredient) {
  return {
    type: SET_CURRENT_INGREDIENT,
    ingredient: ingredient,
  };
}
