import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { AppHeader } from "@/components/app-header/app-header";
import { BurgerIngredients } from "@/components/burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "@/components/burger-constructor/burger-constructor";
import appStyles from "./app.module.css";
import { getIngredientsList } from "@/services/actions/ingredients-list";

export function App() {
  const dispatch = useDispatch();
  const { ingredientsRequestFailed, ingredientsRequest, error } = useSelector(
    (state) => {
      return state.ingredients;
    }
  );

  useEffect(() => {
    dispatch(getIngredientsList());
  }, [dispatch]);

  return (
    <div className="App">
      <AppHeader />
      <main className={`pt-10 ${appStyles.main}`}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      </main>
    </div>
  );
}
