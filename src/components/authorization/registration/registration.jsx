import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  EmailInput,
  PasswordInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import AuthStyles from "@/components/authorization/authorization.module.css";
import { registration } from "@/utils/auth-api";

export const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onSubmitRegistration = useCallback(
    async (e) => {
      e.preventDefault();
      await registration({ email, password, name }).then((response) => {
        console.log(response);
      });
    },
    [email, name, password]
  );

  return (
    <div className={AuthStyles.login}>
      <div
        className={`text text_xxtype_main-default pb-6 ${AuthStyles.login__title}`}
      >
        Регистрация
      </div>
      <form
        className={`${AuthStyles.login__form} pb-20`}
        onSubmit={onSubmitRegistration}
      >
        <Input
          extraClass="pb-6"
          onChange={onChangeName}
          placeholder="Имя"
          value={name}
        />
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
