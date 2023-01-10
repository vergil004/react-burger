import { ActionCreator, Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { store } from "@/services/store";
import { TUserActions } from "@/services/actions-creators/user";
import { TConstructorAction } from "@/services/actions-creators/constructor-list";
import { TIngredientsListActions } from "@/services/actions-creators/ingredients-list";
import { TOrderActions } from "@/services/actions-creators/order";

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
