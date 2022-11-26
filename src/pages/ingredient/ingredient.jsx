import React, { useCallback, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Loader } from "@/components/loader/loader";
import { Modal } from "@/components/modal/modal";
import { IngredientDetails } from "@/components/ingredient-details/ingredient-details";
import {
  removeCurrentIngredient,
  setCurrentIngredient,
} from "@/services/actions-creators/current-ingredient";
import ingredientStyles from "./ingredient.module.css";

export const IngredientPage = () => {
  const { params } = useRouteMatch();
  const history = useHistory();
  const dispatch = useDispatch();
  const modalOn = history.location.state?.modalOn || false;
  const { allItems } = useSelector((state) => {
    return state.ingredients;
  });
  const ingredient = useSelector((state) => {
    return state.currentIngredient;
  });
  const backToMainHandler = useCallback(() => {
    history.replace({ pathname: "/" });
    dispatch(removeCurrentIngredient());
  }, []);

  useEffect(() => {
    if (params.ingredientId && allItems) {
      dispatch(
        setCurrentIngredient(
          allItems.find((item) => item._id === params.ingredientId)
        )
      );
    }
  }, [params, allItems]);

  return (
    <div className={ingredientStyles.ingredient}>
      {!ingredient && (
        <div className={ingredientStyles.ingredient__loader}>
          <Loader />
        </div>
      )}
      {ingredient && (
        <>
          <div className="text text_type_main-large pt-30">
            Детали ингредиента
          </div>
          <IngredientDetails />
          {modalOn && (
            <Modal title="Детали ингредиента" closeModal={backToMainHandler}>
              <IngredientDetails />
            </Modal>
          )}
        </>
      )}
    </div>
  );
};
