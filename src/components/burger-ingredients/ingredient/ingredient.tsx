import React, { useMemo, FC } from "react";
import { useSelector } from "react-redux";
import { useDrag } from "react-dnd";
import { Link, useLocation } from "react-router-dom";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientStyle from "./ingredient.module.css";
import { Iingredient } from "@/utils/types";

type Tingredient = {
  ingredient: Iingredient;
};

export const Ingredient: FC<Tingredient> = ({ ingredient }) => {
  const location = useLocation();
  const { bun, ingredients } = useSelector((state: any) => {
    return state.constructorIngredients;
  });
  const ingredientId = ingredient["_id"];
  const [, dragRef] = useDrag(() => ({
    type: "ingredient",
    item: ingredient,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  }));

  const count = useMemo(() => {
    return bun !== null
      ? [
          bun._id,
          ...ingredients.map((item: Iingredient) => item._id),
          bun._id,
        ].filter((id: string) => id === ingredient._id).length
      : ingredients
          .map((item: Iingredient) => item._id)
          .filter((id: string) => id === ingredient._id).length;
  }, [ingredients, bun, ingredient._id]);

  return (
    <Link
      ref={dragRef}
      className={`${ingredientStyle.ingredient} pr-4 pl-4`}
      to={{
        pathname: `/ingredients/${ingredientId}`,
        state: { background: location },
      }}
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
    </Link>
  );
};
