import { combineReducers } from "redux";
import { ingredientsListReducer } from "@/services/reducers/ingredients-list";
import { constructorListReducer } from "@/services/reducers/constructor-list";
import { orderReducer } from "@/services/reducers/order";

export const rootReducer = combineReducers({
  ingredients: ingredientsListReducer,
  constructorIngredients: constructorListReducer,
  order: orderReducer,
});