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
    if (!user.data) {
      dispatch(getUserData());
    }
  }, [dispatch]);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.data ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
};
