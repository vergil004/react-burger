import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getIngredientsList } from "@/services/actions/ingredients-list";
import { Routers } from "@/services/routers";

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredientsList());
  }, [dispatch]);

  return (
    <div className="App">
      <Routers />
    </div>
  );
}
