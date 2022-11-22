import { combineReducers } from "redux";
import { ingredientsListReducer } from "@/services/reducers/ingredients-list";
import { constructorListReducer } from "@/services/reducers/constructor-list";
import { orderReducer } from "@/services/reducers/order";
import { currentIngredientReducer } from "@/services/reducers/current-ingredient";
import { userReducer } from "@/services/reducers/user";

export const rootReducer = combineReducers({
  ingredients: ingredientsListReducer,
  constructorIngredients: constructorListReducer,
  order: orderReducer,
  currentIngredient: currentIngredientReducer,
  user: userReducer,
});
