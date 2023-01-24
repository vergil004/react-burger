import { combineReducers } from "redux";
import { ingredientsListReducer } from "./ingredients-list";
import { constructorListReducer } from "./constructor-list";
import { orderReducer } from "./order";
import { currentIngredientReducer } from "./current-ingredient";
import { userReducer } from "./user";
import { profileFeedReducer } from "./profile-feed";
import { feedReducer } from "./feed";

export const rootReducer = combineReducers({
  ingredients: ingredientsListReducer,
  constructorIngredients: constructorListReducer,
  order: orderReducer,
  currentIngredient: currentIngredientReducer,
  user: userReducer,
  profileFeed: profileFeedReducer,
  feed: feedReducer,
});
