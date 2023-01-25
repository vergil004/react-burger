import {
  GET_USER_REQUEST,
  SET_USER_SUCCESS,
  SET_USER_FAILED,
  USER_LOGOUT,
} from "../actions/user";
import { IUser } from "../../utils/types";
import { TUserActions } from "../actions-creators/user";

type TUserState = {
  data: IUser | null;
  isLoaded: boolean;
  isLoading: boolean;
  error: string | null;
};

export const initialUserState = {
  data: null,
  isLoaded: false,
  isLoading: false,
  error: null,
};

export function userReducer(
  state: TUserState = initialUserState,
  action: TUserActions
): TUserState {
  switch (action.type) {
    case GET_USER_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case SET_USER_SUCCESS: {
      return {
        ...state,
        data: { ...action.data },
        isLoaded: true,
        isLoading: false,
        error: null,
      };
    }
    case SET_USER_FAILED: {
      return {
        ...state,
        isLoaded: true,
        isLoading: false,
        error: action.error,
      };
    }
    case USER_LOGOUT: {
      return {
        ...initialUserState,
      };
    }
    default: {
      return state;
    }
  }
}
