import {
  ADD_CONSTRUCTOR__BUN,
  ADD_TO_CONSTRUCTOR_INGREDIENTS_LIST,
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
    default: {
      return state;
    }
  }
}
