import {
  ingredientsListReducer,
  initialIngredientsListState,
} from "./ingredients-list";

describe("ingredient list tests", () => {
  it("should return the initial state", () => {
    expect(ingredientsListReducer(undefined, {})).toEqual(
      initialIngredientsListState
    );
  });
});
