import {
  ADD_CONSTRUCTOR__BUN,
  ADD_TO_CONSTRUCTOR_INGREDIENTS_LIST,
  CLEAR_CONSTRUCTOR,
  DELETE_FROM_CONSTRUCTOR_INGREDIENTS_LIST,
  SET_ORDER_OF_INGREDIENTS,
} from "@/services/actions/constructor-list";

const initialConstructorListState = {
  bun: null,
  ingredients: [],
};

export function constructorListReducer(
  state = initialConstructorListState,
  action
) {
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
