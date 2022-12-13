import React, { useEffect, FC } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PropTypes, { exact } from "prop-types";
import { getUserData } from "@/services/actions/user";

type TProtected = {
  children: React.ReactNode;
  path: string;
  exact: boolean;
};

export const ProtectedRoute: FC<TProtected> = ({ children, ...rest }) => {
  const useAppDispatch: () => any = useDispatch;
  const dispatch = useAppDispatch();
  const user = useSelector((store: any) => {
    return store.user;
  });
  useEffect(() => {
    if (!user.isLoaded) {
      dispatch(getUserData());
    }
  }, [dispatch, user.isLoaded]);

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
