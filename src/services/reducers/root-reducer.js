import { combineReducers } from "redux";
import { ingredientsListReducer } from "@/services/reducers/ingredients-list";

export const rootReducer = combineReducers({
  ingredients: ingredientsListReducer,
});
