import React, { useState } from "react";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Modal } from "../../modal/modal";
import { IngredientDetails } from "../../ingredient-details/ingredient-details";
import ingredientStyle from "./ingredient.module.css";
import { ingredientPropTypes } from "../../../utils/types";

export function Ingredient({ ingredient }) {
  const count = useState(1);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <Modal
          title="Детали ингредиента"
          closeModal={() => setShowModal(false)}
        >
          <IngredientDetails ingredient={ingredient} />
        </Modal>
      )}
      <div
        className={`${ingredientStyle.ingredient} pr-4 pl-4`}
        onClick={() => setShowModal(true)}
      >
        {count > 0 && (
          <div className={ingredientStyle.ingredient__count}>
            <Counter count={count} />
          </div>
        )}
        <img
          className={ingredientStyle.ingredient__image}
          src={ingredient.image_large}
          alt={ingredient.name}
        />
        <div className={`${ingredientStyle.ingredient__price} pt-1 pb-1`}>
          <span className="text text_type_digits-default pr-2">
            {ingredient.price}
          </span>
          <CurrencyIcon type={"primary"} />
        </div>
        <div
          className={`${ingredientStyle.ingredient__name} text text_type_main-default`}
        >
          {ingredient.name}
        </div>
      </div>
    </>
  );
}

Ingredient.defaultProps = {
  ingredient: {},
};
Ingredient.propTypes = {
  ingredient: ingredientPropTypes,
};
