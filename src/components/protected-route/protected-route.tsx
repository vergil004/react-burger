import React, { useEffect, FC } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { getUserData } from "@/services/actions/user";

type TProtected = {
  children: React.ReactNode;
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

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  ...{ path: PropTypes.string.isRequired, exact: PropTypes.bool },
};
