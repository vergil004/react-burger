import {
  SET_CURRENT_INGREDIENT,
  REMOVE_CURRENT_INGREDIENT,
} from "@/services/actions/current-ingredient";

export function setCurrentIngredient(ingredient) {
  return {
    type: SET_CURRENT_INGREDIENT,
    ingredient: ingredient,
  };
}

export function removeCurrentIngredient() {
  return {
    type: REMOVE_CURRENT_INGREDIENT,
  };
}
