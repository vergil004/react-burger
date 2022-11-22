import {
  GET_USER_REQUEST,
  SET_USER_SUCCESS,
  SET_USER_FAILED,
} from "@/services/actions/user";

const initialUserState = {
  data: null,
  isLoaded: false,
  error: null,
};

export function userReducer(state = initialUserState, action) {
  switch (action.type) {
    case GET_USER_REQUEST: {
      return {
        ...state,
        error: null,
      };
    }
    case SET_USER_SUCCESS: {
      return {
        ...state,
        data: { ...action.data },
        isLoaded: true,
        error: null,
      };
    }
    case SET_USER_FAILED: {
      return {
        ...state,
        isLoaded: true,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
}
