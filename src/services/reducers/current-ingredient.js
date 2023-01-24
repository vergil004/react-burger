import {
  SET_CURRENT_INGREDIENT,
  REMOVE_CURRENT_INGREDIENT,
} from "../actions/current-ingredient";

const initialStateCurrentIngredient = null;

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
    case REMOVE_CURRENT_INGREDIENT: {
      return null;
    }
    default: {
      return state;
    }
  }
}
