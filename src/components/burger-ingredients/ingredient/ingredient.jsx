import React, { useState, useMemo } from "react";
import { useDrag } from "react-dnd";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Modal } from "@/components/modal/modal";
import { IngredientDetails } from "@/components/ingredient-details/ingredient-details";
import ingredientStyle from "./ingredient.module.css";
import { ingredientPropTypes } from "@/utils/types";
import { useSelector } from "react-redux";

export function Ingredient({ ingredient }) {
  const { bun, ingredients } = useSelector((state) => {
    return state.constructorIngredients;
  });
  const [showModal, setShowModal] = useState(false);
  const [{ opacity }, dragRef] = useDrag(() => ({
    type: "ingredient",
    item: ingredient,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  }));

  const count = useMemo(() => {
    return bun !== null
      ? [bun._id, ...ingredients.map((item) => item._id), bun._id].filter(
          (id) => id === ingredient._id
        ).length
      : ingredients
          .map((item) => item._id)
          .filter((id) => id === ingredient._id).length;
  }, [ingredients, bun]);

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
        ref={dragRef}
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
