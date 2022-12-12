import React, { FC } from "react";
import ingredientsStyle from "@/components/burger-ingredients/burger-ingredients.module.css";
import { Ingredient } from "@/components/burger-ingredients/ingredient/ingredient";
import { Iingredient } from "@/utils/types";

type TSection = {
  title: string;
  items: Array<Iingredient>;
};

export const IngredientsSection: FC<TSection> = React.forwardRef(
  ({ title, items }, ref: React.LegacyRef<any>) => (
    <section ref={ref} className="pt-10 pb-10">
      <h2 className="text text_type_main-medium pb-6">{title}</h2>
      <ul className={ingredientsStyle.ingredients__list}>
        {items.map((item) => (
          <li className={ingredientsStyle.ingredients__item} key={item._id}>
            <Ingredient ingredient={item} />
          </li>
        ))}
      </ul>
    </section>
  )
);
