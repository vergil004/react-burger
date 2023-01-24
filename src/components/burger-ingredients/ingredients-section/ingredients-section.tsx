import React, { FC } from "react";
import ingredientsStyle from "../burger-ingredients.module.css";
import { Ingredient } from "../ingredient/ingredient";
import { IIngredient } from "../../../utils/types";

type TSection = {
  title: string;
  items: ReadonlyArray<IIngredient>;
};

export const IngredientsSection: FC<TSection> = ({ title, items }) => (
  <>
    <h2 className="text text_type_main-medium pb-6">{title}</h2>
    <ul className={ingredientsStyle.ingredients__list}>
      {items.map((item) => (
        <li className={ingredientsStyle.ingredients__item} key={item._id}>
          <Ingredient ingredient={item} />
        </li>
      ))}
    </ul>
  </>
);
