import React, { useEffect, FC, PropsWithChildren } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector, useAppDispatch } from "@/utils/custom-hooks";
import { getUserData } from "@/services/actions/user";

type TProtected = {
  children: React.ReactNode;
  path: string;
  exact: boolean;
};

export const ProtectedRoute: FC<PropsWithChildren<TProtected>> = ({
  children,
  ...rest
}) => {
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
