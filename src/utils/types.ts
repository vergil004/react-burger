import PropTypes from "prop-types";
import {
  WS_FEED_CONNECTION_CLOSED,
  WS_FEED_CONNECTION_ERROR,
  WS_FEED_CONNECTION_START,
  WS_FEED_CONNECTION_SUCCESS,
  WS_FEED_GET_MESSAGE,
  WS_FEED_SET_MESSAGE,
} from "../services/actions/feed";
import {
  WS_PROFILE_FEED_CONNECTION_CLOSED,
  WS_PROFILE_FEED_CONNECTION_ERROR,
  WS_PROFILE_FEED_CONNECTION_START,
  WS_PROFILE_FEED_CONNECTION_SUCCESS,
  WS_PROFILE_FEED_GET_MESSAGE,
  WS_PROFILE_FEED_SET_MESSAGE,
} from "../services/actions/profile-feed";

export const ingredientPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  __v: PropTypes.number.isRequired,
});

export interface IIngredient {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
}

export interface IKeyIngredient extends IIngredient {
  key: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegistration extends ILogin {
  name: string;
}

export interface IUser {
  email: string;
  name: string;
}

export interface IRequest extends IRegistration {
  token?: string;
}

export interface IReset {
  password: string;
  token: string;
}

export type TMethodRequest = "GET" | "POST" | "PATCH";

export type TStatus = "created" | "pending" | "done";

export interface IFeedData {
  ingredients: Array<string>;
  _id: string;
  status: TStatus;
  number: number;
  createdAt: string;
  updatedAt: string;
  name: string;
}

export interface IFeedOrders {
  orders: Array<IFeedData>;
  total: number;
  totalToday: number;
  wsConnection?: boolean;
}

export type TWSFeedActions = {
  wsInit: typeof WS_FEED_CONNECTION_START;
  onOpen: typeof WS_FEED_CONNECTION_SUCCESS;
  onMessage: typeof WS_FEED_GET_MESSAGE;
  onClose: typeof WS_FEED_CONNECTION_CLOSED;
  onError: typeof WS_FEED_CONNECTION_ERROR;
  wsSendMessage: typeof WS_FEED_SET_MESSAGE;
};

export type TWSProfileFeedActions = {
  wsInit: typeof WS_PROFILE_FEED_CONNECTION_START;
  onOpen: typeof WS_PROFILE_FEED_CONNECTION_SUCCESS;
  onMessage: typeof WS_PROFILE_FEED_GET_MESSAGE;
  onClose: typeof WS_PROFILE_FEED_CONNECTION_CLOSED;
  onError: typeof WS_PROFILE_FEED_CONNECTION_ERROR;
  wsSendMessage: typeof WS_PROFILE_FEED_SET_MESSAGE;
};

export type TWSActions = TWSFeedActions | TWSProfileFeedActions;

export interface IOptionPost<T> {
  method: TMethodRequest;
  headers: Record<string, string>;
  data: T;
}
export type TOptionGet = {};
