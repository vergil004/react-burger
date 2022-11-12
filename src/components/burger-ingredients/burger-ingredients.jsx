import React, { useRef, useCallback } from "react";
import { useSelector } from "react-redux";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { IngredientsSection } from "./ingredients-section/ingredients-section";
import { Loader } from "@/components/loader/loader";
import { AppError } from "@/components/app-error/app-error";
import ingredientsStyle from "./burger-ingredients.module.css";

export const BurgerIngredients = React.memo(function BurgerIngredients() {
  const {
    ingredients,
    buns,
    sauceList,
    mainList,
    ingredientsRequestFailed,
    ingredientsRequest,
    error,
  } = useSelector((state) => {
    return state.ingredients;
  });
  const [current, setCurrent] = React.useState("bun");
  const bunList = buns;
  const scrollToBun = useRef();
  const scrollToSauce = useRef();
  const scrollToMain = useRef();
  const scrollCont = useRef();

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

  const scrollHandler = useCallback(() => {
    const topHeight = scrollCont?.current.getBoundingClientRect().top;
    const bun = Math.abs(
      topHeight - scrollToBun.current.getBoundingClientRect().top
    );
    const sauce = Math.abs(
      topHeight - scrollToSauce.current.getBoundingClientRect().top
    );
    const main = Math.abs(
      topHeight - scrollToMain.current.getBoundingClientRect().top
    );
    const nearestBlock = bun < sauce ? "bun" : sauce < main ? "sauce" : "main";
    setCurrent(nearestBlock);
  }, []);

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
      {ingredientsRequestFailed && (
        <div className={ingredientsStyle.ingredients__error}>
          <AppError error={error} />
        </div>
      )}
      {ingredientsRequest ||
        (ingredients.length === 0 && (
          <div className={ingredientsStyle.ingredients__loader}>
            <Loader />
          </div>
        ))}
      {!ingredientsRequestFailed && !ingredientsRequest && (
        <div
          className={ingredientsStyle.ingredients__cont}
          onScroll={scrollHandler}
          ref={scrollCont}
        >
          <IngredientsSection title="Булки" items={bunList} ref={scrollToBun} />
          <IngredientsSection
            title="Соусы"
            items={sauceList}
            ref={scrollToSauce}
          />
          <IngredientsSection
            title="Начинки"
            items={mainList}
            ref={scrollToMain}
          />
        </div>
      )}
    </div>
  );
});
