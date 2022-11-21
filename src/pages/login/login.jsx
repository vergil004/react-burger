import React from "react";
import { useHistory } from "react-router-dom";
import { Login } from "@/components/authorization/login/login";
import { Registration } from "@/components/authorization/registration/registration";
import { ForgotPassword } from "@/components/authorization/forgot-password/forgot-password";
import loginPageStyles from "./login.module.css";

export const LoginPage = () => {
  const history = useHistory();
  return (
    <div className={loginPageStyles.login}>
      <div className={loginPageStyles.login__cont}>
        {history.location.pathname === "/login" ? (
          <Login />
        ) : history.location.pathname === "/registration" ? (
          <Registration />
        ) : (
          <ForgotPassword />
        )}
      </div>
    </div>
  );
};
