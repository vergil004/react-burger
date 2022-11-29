import React, { useState, useCallback } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useForm } from "@/utils/custom-hooks";
import AuthStyles from "../authorization.module.css";
import { loginRequest } from "@/services/actions/user";

export const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { state } = history.location;
  const user = useSelector((store) => {
    return store.user;
  });

  const { values, handleChange } = useForm({
    email: "",
    password: "",
  });
  const onSubmitLogin = useCallback(
    async (e) => {
      e.preventDefault();
      await dispatch(loginRequest(values));
    },
    [values]
  );

  if (user.data) {
    return <Redirect to={state?.from || "/"} />;
  }

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
          onChange={handleChange}
          value={values.email}
          extraClass="pb-6"
          placeholder="E-mail"
          name={"email"}
        />
        <PasswordInput
          onChange={handleChange}
          extraClass="pb-6"
          placeholder="Пароль"
          value={values.password}
          name={"password"}
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
