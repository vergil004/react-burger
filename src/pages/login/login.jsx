import React, { useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "@/components/authorization/login/login";
import { Registration } from "@/components/authorization/registration/registration";
import { ForgotPassword } from "@/components/authorization/forgot-password/forgot-password";
import { Loader } from "@/components/loader/loader";
import loginPageStyles from "./login.module.css";
import { getUserData } from "@/services/actions/user";

export const LoginPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((store) => {
    return store.user;
  });
  useEffect(() => {
    if (!user.data) {
      dispatch(getUserData());
    }
  }, [dispatch]);
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
      <Redirect to="/" />
    );
  };
  return (
    <div className={loginPageStyles.login}>
      {user.isLoading ? <Loader /> : <LoginContent />}
    </div>
  );
};
