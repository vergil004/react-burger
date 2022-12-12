import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  EmailInput,
  PasswordInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useForm } from "@/utils/custom-hooks";
import AuthStyles from "@/components/authorization/authorization.module.css";
import { registrationRequest } from "@/services/actions/user";

export const Registration = () => {
  const useAppDispatch: () => any = useDispatch;
  const dispatch = useAppDispatch();

  const { values, handleChange } = useForm({
    email: "",
    password: "",
    name: "",
  });
  const onSubmitRegistration = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      await dispatch(registrationRequest(values));
    },
    [values, dispatch]
  );

  return (
    <div className={AuthStyles.login}>
      <div
        className={`text text_type_main-default pb-6 ${AuthStyles.login__title}`}
      >
        Регистрация
      </div>
      <form
        className={`${AuthStyles.login__form} pb-20`}
        onSubmit={onSubmitRegistration}
      >
        <Input
          extraClass="pb-6"
          onChange={handleChange}
          placeholder="Имя"
          value={values.name}
          name={"name"}
        />
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
        <Button htmlType={"submit"}>Зарегистрироваться</Button>
      </form>
      <div className={AuthStyles.login__bottom}>
        <div className="pb-4">
          Уже зарегистрированы?
          <Link className={`${AuthStyles.login__link} ml-2`} to="/login">
            Войти
          </Link>
        </div>
      </div>
    </div>
  );
};
