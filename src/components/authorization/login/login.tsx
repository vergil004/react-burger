import React, { useCallback } from "react";
import { Link, Redirect, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useForm } from "@/utils/custom-hooks";
import AuthStyles from "../authorization.module.css";
import { loginRequest } from "@/services/actions/user";
interface stateType {
  from: { pathname: string };
}
type TForm = {
  email: string;
  password: string;
};

export const Login = () => {
  const useAppDispatch: () => any = useDispatch;
  const dispatch = useAppDispatch();
  const { state } = useLocation<stateType>();
  const user = useSelector((store: any) => {
    return store.user;
  });

  const { values, handleChange } = useForm({
    email: "",
    password: "",
  });
  const onSubmitLogin = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // @ts-ignore
      // нужно разобраться с этим
      await dispatch(loginRequest(values));
    },
    [values, dispatch]
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
