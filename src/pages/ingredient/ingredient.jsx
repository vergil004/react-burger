import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Loader } from "@/components/loader/loader";
import { IngredientDetails } from "@/components/ingredient-details/ingredient-details";
import ingredientStyles from "./ingredient.module.css";

export const IngredientPage = () => {
  const { allItems } = useSelector((state) => {
    return state.ingredients;
  });

  return (
    <div className={ingredientStyles.ingredient}>
      {!allItems && (
        <div className={ingredientStyles.ingredient__loader}>
          <Loader />
        </div>
      )}
      {allItems && (
        <>
          <div className="text text_type_main-large pt-30">
            Детали ингредиента
          </div>
          <IngredientDetails />
        </>
      )}
    </div>
  );
};
