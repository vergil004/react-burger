import React, { useState, useCallback, SyntheticEvent } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  EmailInput,
  Input,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import AuthStyles from "../authorization.module.css";
import { useForm } from "@/utils/custom-hooks";
import { forgotPassword, resetPassword } from "@/utils/auth-api";

export const ForgotPassword = () => {
  const history = useHistory();
  const { values, handleChange } = useForm({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [token, setToken] = useState("");

  const onChangeToken = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
  };

  const onSubmitForgotPassword = useCallback(
    async (e: SyntheticEvent) => {
      e.preventDefault();
      await forgotPassword(values.email)
        .then(() => {
          history.replace("/reset-password");
        })
        .catch((error) => {
          setError(error);
        });
    },
    [values.email, history]
  );

  const onSubmitResetPassword = useCallback(
    async (e: SyntheticEvent) => {
      e.preventDefault();
      const password = values.password;
      await resetPassword({ password, token })
        .then(() => {
          history.replace("/login");
        })
        .catch((error) => {
          setError(error);
        });
    },
    [history, token, values.password]
  );

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
            onChange={handleChange}
            value={values.email}
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
            onChange={handleChange}
            extraClass="pb-6"
            placeholder="Введите новый пароль"
            value={values.password}
            name={"password"}
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
