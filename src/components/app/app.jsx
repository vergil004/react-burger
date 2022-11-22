import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routers } from "@/services/routers";
import { getIngredientsList } from "@/services/actions/ingredients-list";

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
