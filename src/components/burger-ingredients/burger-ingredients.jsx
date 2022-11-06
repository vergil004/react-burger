import React, { useContext, useRef } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { Ingredient } from "./ingredient/ingredient";
import ingredientsStyle from "./burger-ingredients.module.css";
import { ChosenIngredientDataContext } from "@/utils/context";

export function BurgerIngredients() {
  const { ingredients } = useContext(ChosenIngredientDataContext);
  const [current, setCurrent] = React.useState("bun");
  const bunList = ingredients.filter((item) => item.type === "bun");
  const sauceList = ingredients.filter((item) => item.type === "sauce");
  const mainList = ingredients.filter((item) => item.type === "main");
  const scrollToBun = useRef();
  const scrollToSauce = useRef();
  const scrollToMain = useRef();

  const scrollToGroup = (value) => {
    setCurrent(value);
    switch (value) {
      case "bun":
        scrollToBun?.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "sauce":
        scrollToSauce?.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        scrollToMain?.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={ingredientsStyle.ingredients}>
      <div className="text text_type_main-large pb-5">Соберите бургер</div>
      <div className={ingredientsStyle.ingredients__tabs}>
        <Tab value="bun" active={current === "bun"} onClick={scrollToGroup}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={scrollToGroup}>
          Соусы
        </Tab>
        <Tab value="main" active={current === "main"} onClick={scrollToGroup}>
          Начинки
        </Tab>
      </div>
      <div className={ingredientsStyle.ingredients__cont}>
        <section ref={scrollToBun} className={`pt-10 pb-10`}>
          <h2 className="text text_type_main-medium pb-6">Булки</h2>
          <ul className={`${ingredientsStyle.ingredients__list} pl-4 pt-6`}>
            {bunList.map((item) => (
              <li className={ingredientsStyle.ingredients__item} key={item._id}>
                <Ingredient ingredient={item} />
              </li>
            ))}
          </ul>
        </section>
        <section ref={scrollToSauce} className="pt-10 pb-10">
          <h2 className="text text_type_main-medium pb-6">Соусы</h2>
          <ul className={ingredientsStyle.ingredients__list}>
            {sauceList.map((item) => (
              <li className={ingredientsStyle.ingredients__item} key={item._id}>
                <Ingredient ingredient={item} />
              </li>
            ))}
          </ul>
        </section>
        <section ref={scrollToMain} className="pt-10 pb-10">
          <h2 className="text text_type_main-medium pb-6">Начинки</h2>
          <ul className={ingredientsStyle.ingredients__list}>
            {mainList.map((item) => (
              <li className={ingredientsStyle.ingredients__item} key={item._id}>
                <Ingredient ingredient={item} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
