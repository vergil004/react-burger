import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BurgerIngredients } from "@/components/burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "@/components/burger-constructor/burger-constructor";
import mainStyles from "./main.module.css";

export const MainPage = () => {
  return (
    <main className={`pt-10 ${mainStyles.main}`}>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients />
        <BurgerConstructor />
      </DndProvider>
    </main>
  );
};
