import React, { useEffect } from "react";
import { useHistory, Redirect, useLocation } from "react-router-dom";
import { useAppDispatch, useSelector } from "../../utils/custom-hooks";
import { Login } from "../../components/authorization/login/login";
import { Registration } from "../../components/authorization/registration/registration";
import { ForgotPassword } from "../../components/authorization/forgot-password/forgot-password";
import { Loader } from "../../components/loader/loader";
import loginPageStyles from "./login.module.css";
import { getUserData } from "../../services/actions/user";

type TLocation = {
  from: string;
};

export const LoginPage = () => {
  const history = useHistory();
  const location = useLocation<TLocation>();
  const dispatch = useAppDispatch();
  const user = useSelector((store) => {
    return store.user;
  });
  useEffect(() => {
    if (!user.isLoaded) {
      dispatch(getUserData());
    }
  }, [dispatch, user.isLoaded]);
  const LoginContent = () => {
    return !user.data ? (
      <div className={loginPageStyles.login__cont}>
        {history.location.pathname === "/login" ? (
          <Login />
        ) : history.location.pathname === "/registration" ? (
          <Registration />
        ) : (
          <ForgotPassword />
        )}
      </div>
    ) : (
      <Redirect to={location?.state?.from || "/"} />
    );
  };
  return (
    <div className={loginPageStyles.login}>
      {!user.isLoaded ? <Loader /> : <LoginContent />}
    </div>
  );
};
