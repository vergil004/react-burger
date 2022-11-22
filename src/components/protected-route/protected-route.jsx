import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "@/services/actions/user";

export const ProtectedRoute = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  const user = useSelector((store) => {
    return store.user;
  });
  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  if (user.isLoaded === false) {
    return null;
  }
  return (
    <Route
      {...rest}
      render={() => (user.data ? children : <Redirect to="login" />)}
    />
  );
};
