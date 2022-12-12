import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Routers } from "@/services/routers";
import { getIngredientsList } from "@/services/actions/ingredients-list";

export function App() {
  const useAppDispatch: () => any = useDispatch;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getIngredientsList());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Routers />
      </Router>
    </div>
  );
}
