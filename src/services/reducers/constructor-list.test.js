import {
  constructorListReducer,
  initialConstructorListState as state,
} from "./constructor-list";
import * as actions from "../actions/constructor-list";
import {
  addIngredientToConstructor,
  deleteIngredientFromConstructor,
  setOrderIngredients,
} from "../actions-creators/constructor-list";

const bun = {
  _id: "60666c42cc7b410027a1a9b1",
  name: "Краторная булка N-200i",
  type: "bun",
  proteins: 80,
  fat: 24,
  carbohydrates: 53,
  calories: 420,
  price: 1245,
  image: "https://code.s3.yandex.net/react/code/bun-02.png",
  image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
  image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
  __v: 0,
};
const item = {
  _id: "60666c42cc7b410027a1a9b6",
  name: "Биокотлета из марсианской Магнолии",
  type: "main",
  proteins: 420,
  fat: 142,
  carbohydrates: 242,
  calories: 4242,
  price: 424,
  image: "https://code.s3.yandex.net/react/code/meat-01.png",
  image_mobile: "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
  image_large: "https://code.s3.yandex.net/react/code/meat-01-large.png",
  key: "139",
  __v: 0,
};
const itemSecond = {
  _id: "60666c42cc7b410027a1a9b6",
  name: "Биокотлета из марсианской Магнолии",
  type: "main",
  proteins: 420,
  fat: 142,
  carbohydrates: 242,
  calories: 4242,
  price: 424,
  image: "https://code.s3.yandex.net/react/code/meat-01.png",
  image_mobile: "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
  image_large: "https://code.s3.yandex.net/react/code/meat-01-large.png",
  key: "149",
  __v: 0,
};

describe("Constructor Reducer", () => {
  it("should return the initial state", () => {
    expect(constructorListReducer(undefined, {})).toEqual(state);
  });
  it("ADD_CONSTRUCTOR__BUN", () => {
    expect(
      constructorListReducer(undefined, {
        type: actions.ADD_CONSTRUCTOR__BUN,
        bun: bun,
      })
    ).toEqual({
      ...state,
      bun: bun,
    });
  });
  it("ADD_TO_CONSTRUCTOR_INGREDIENTS_LIST", () => {
    expect(
      constructorListReducer(state, addIngredientToConstructor(item, "139"))
    ).toEqual({
      ...state,
      ingredients: [...state.ingredients, item],
    });
  });
  it("CLEAR_CONSTRUCTOR", () => {
    expect(
      constructorListReducer(state, {
        type: "CLEAR_CONSTRUCTOR",
      })
    ).toEqual({
      ...state,
    });
  });
  it("DELETE_FROM_CONSTRUCTOR_INGREDIENTS_LIST", () => {
    expect(
      constructorListReducer(
        { ...state, ingredients: [item, itemSecond] },
        deleteIngredientFromConstructor("149")
      )
    ).toEqual({
      ...state,
      ingredients: [item],
    });
  });
  it("DELETE_FROM_CONSTRUCTOR_INGREDIENTS_LIST", () => {
    expect(
      constructorListReducer(
        { ...state, ingredients: [item, itemSecond] },
        setOrderIngredients(0, 1)
      )
    ).toEqual({
      ...state,
      ingredients: [itemSecond, item],
    });
  });
});
