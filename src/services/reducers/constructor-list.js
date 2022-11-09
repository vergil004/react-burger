import {
  ADD_CONSTRUCTOR__BUN,
  ADD_TO_CONSTRUCTOR_INGREDIENTS_LIST,
  DELETE_FROM_CONSTRUCTOR_INGREDIENTS_LIST,
  SET_ORDER_OF_INGREDIENTS,
} from "@/services/actions/constructor-list";

const initialConstructorListState = {
  bun: null,
  ingredients: [],
};

// export function  constructorListReducer (
//     state= initialConstructorListState,
//     action
// ){
//     switch (action.type) {
//         case ADD_CONSTRUCTOR__BUN : {
//           return {
//               ...state,
//               bun:
//           };
//         }
//     }
// }
