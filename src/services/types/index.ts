import { ActionCreator, Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { store } from "../store";
import { TUserActions } from "../actions-creators/user";
import { TConstructorAction } from "../actions-creators/constructor-list";
import { TIngredientsListActions } from "../actions-creators/ingredients-list";
import { TOrderActions } from "../actions-creators/order";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type TApplicationActions =
  | TConstructorAction
  | TIngredientsListActions
  | TOrderActions
  | TUserActions;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;
