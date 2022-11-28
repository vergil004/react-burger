import React, { useState, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  EmailInput,
  Input,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import AuthStyles from "../authorization.module.css";
import { forgotPassword, resetPassword } from "@/utils/auth-api";

export const ForgotPassword = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeToken = (e) => {
    setToken(e.target.value);
  };

  const onSubmitForgotPassword = useCallback(
    async (e) => {
      e.preventDefault();
      await forgotPassword(email)
        .then(() => {
          history.replace("/reset-password");
        })
        .catch((error) => {
          setError(error);
        });
    },
    [email]
  );

  const onSubmitResetPassword = useCallback(async (e) => {
    e.preventDefault();
    await resetPassword({ password, token })
      .then(() => {
        history.replace("/login");
      })
      .catch((error) => {
        setError(error);
      });
  });

  return (
    <div className={AuthStyles.login}>
      <div
        className={`text text_type_main-default pb-6 ${AuthStyles.login__title}`}
      >
        Восстановление пароля
      </div>
      {history.location.pathname === "/forgot-password" && (
        <form
          className={`${AuthStyles.login__form} pb-20`}
          onSubmit={onSubmitForgotPassword}
        >
          <EmailInput
            onChange={onChangeEmail}
            value={email}
            extraClass="pb-6"
            placeholder="Укажите e-mail"
            name={"email"}
          />
          <Button htmlType={"submit"}>Восстановить</Button>
        </form>
      )}
      {history.location.pathname === "/reset-password" && (
        <form
          className={`${AuthStyles.login__form} pb-20`}
          onSubmit={onSubmitResetPassword}
        >
          <PasswordInput
            onChange={onChangePassword}
            extraClass="pb-6"
            placeholder="Введите новый пароль"
            value={password}
          />
          <Input
            extraClass="pb-6"
            onChange={onChangeToken}
            placeholder="Введите код из письма"
            value={token}
          />
          <Button htmlType={"submit"}>Сохранить</Button>
        </form>
      )}
      <div className={AuthStyles.login__bottom}>
        <div className="pb-4">
          Вспомнили пароль?
          <Link className={`${AuthStyles.login__link} ml-2`} to="/login">
            Войти
          </Link>
        </div>
      </div>
    </div>
  );
};
