import React, { useState, useEffect } from "react";
import { AppHeader } from "@/components/app-header/app-header";
import { BurgerIngredients } from "@/components/burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "@/components/burger-constructor/burger-constructor";
import appStyles from "./app.module.css";
import { getIngredientsData } from "@/utils/burger-api";
import { ChosenIngredientDataContext } from "@/utils/context";

export function App() {
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  const fetchData = async () => {
    await getIngredientsData()
      .then((data) => {
        setIngredients(data.data);
        setLoading(false);
      })
      .catch(setError(true));
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  return (
    <div className="App">
      <AppHeader />
      <main className={`pt-10 ${appStyles.main}`}>
        {ingredients.length > 0 && (
          <>
            <ChosenIngredientDataContext.Provider value={{ ingredients }}>
              <BurgerIngredients />
              <BurgerConstructor />
            </ChosenIngredientDataContext.Provider>
          </>
        )}
      </main>
    </div>
  );
}
