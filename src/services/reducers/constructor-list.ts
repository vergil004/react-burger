import {
  ADD_CONSTRUCTOR__BUN,
  SET_ORDER_OF_INGREDIENTS,
  DELETE_FROM_CONSTRUCTOR_INGREDIENTS_LIST,
  CLEAR_CONSTRUCTOR,
  ADD_TO_CONSTRUCTOR_INGREDIENTS_LIST,
} from "../actions/constructor-list";
import { IIngredient } from "../../utils/types";
import { TConstructorAction } from "../actions-creators/constructor-list";

type TConstructorState = {
  bun: IIngredient | null;
  ingredients: ReadonlyArray<IIngredient & { key: string }>;
};

const initialConstructorListState: TConstructorState = {
  bun: null,
  ingredients: [],
};

export function constructorListReducer(
  state = initialConstructorListState,
  action: TConstructorAction
): TConstructorState {
  switch (action.type) {
    case ADD_CONSTRUCTOR__BUN: {
      return {
        ...state,
        bun: { ...action.bun },
      };
    }
    case ADD_TO_CONSTRUCTOR_INGREDIENTS_LIST: {
      return {
        ...state,
        ingredients: [...state.ingredients, { ...action.ingredient }],
      };
    }
    case DELETE_FROM_CONSTRUCTOR_INGREDIENTS_LIST: {
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (item) => item.key !== action.key
        ),
      };
    }
    case SET_ORDER_OF_INGREDIENTS: {
      const items = [...state.ingredients];
      items.splice(action.dropIndex, 0, items.splice(action.dragIndex, 1)[0]);
      return {
        ...state,
        ingredients: items,
      };
    }
    case CLEAR_CONSTRUCTOR: {
      return {
        ...state,
        bun: null,
        ingredients: [],
      };
    }
    default: {
      return state;
    }
  }
}
