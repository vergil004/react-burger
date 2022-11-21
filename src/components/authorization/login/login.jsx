import React, { useState, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import AuthStyles from "../authorization.module.css";
import { loginUser } from "@/utils/auth-api";

export const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitLogin = useCallback(
    async (e) => {
      e.preventDefault();
      await loginUser({ password, email }).then((response) => {
        console.log(response);
        history.replace("/");
      });
    },
    [email, password]
  );

  return (
    <div className={AuthStyles.login}>
      <div
        className={`text text_type_main-default pb-6 ${AuthStyles.login__title}`}
      >
        Вход
      </div>
      <form
        className={`${AuthStyles.login__form} pb-20`}
        onSubmit={onSubmitLogin}
      >
        <EmailInput
          onChange={onChangeEmail}
          value={email}
          extraClass="pb-6"
          placeholder="E-mail"
          name={"email"}
        />
        <PasswordInput
          onChange={onChangePassword}
          extraClass="pb-6"
          placeholder="Пароль"
          value={password}
        />
        <Button htmlType={"submit"}>Войти</Button>
      </form>
      <div className={AuthStyles.login__bottom}>
        <div className="pb-4">
          Вы — новый пользователь?
          <Link className={`${AuthStyles.login__link} ml-2`} to="/registration">
            Зарегистрироваться
          </Link>
        </div>
        <div>
          Забыли пароль?
          <Link
            className={`${AuthStyles.login__link} ml-2`}
            to="/forgot-password"
          >
            Восстановить пароль
          </Link>
        </div>
      </div>
    </div>
  );
};
