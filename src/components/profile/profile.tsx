import React, { useState, useEffect, useCallback, useRef } from "react";
import { useAppDispatch, useSelector } from "../../utils/custom-hooks";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import profileStyles from "./profile.module.css";
import { updateUser } from "../../services/actions/user";

type TDisabled = {
  name?: boolean;
  email?: boolean;
  password?: boolean;
};

type TData = {
  name: string;
  email: string;
  password: string;
};

export const Profile = () => {
  const dispatch = useAppDispatch();

  const user = useSelector((store: any) => {
    return store.user;
  });

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [data, setData] = useState<TData>({
    name: "",
    email: "",
    password: "",
  });
  const [disabled, setDisabled] = useState<TDisabled>({
    name: true,
    email: true,
    password: true,
  });
  const [formChange, setFormChange] = useState(false);

  useEffect(() => {
    setData({ ...user.data, password: "" });
  }, [user.data]);

  useEffect(() => {
    if (!disabled.name) {
      nameRef.current?.focus();
    } else if (!disabled.email) {
      emailRef.current?.focus();
    } else if (!disabled.password) {
      passwordRef.current?.focus();
    }
  });

  const onChangeValue = (target: HTMLInputElement) => {
    const { name, value } = target;
    setData({
      ...data,
      [name]: value,
    });
    setFormChange(true);
  };

  const onClickIcon = (name: keyof TDisabled) => {
    console.log(name);
    setDisabled({
      ...disabled,
      [name]: !disabled[name],
    });
  };

  const onResetHandler = () => {
    setData({ ...user.data, password: "" });
    setDisabled({ name: true, password: true, email: true });
    setFormChange(false);
  };

  const onSubmitHandler = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      dispatch(updateUser(data));
      setDisabled({ name: true, password: true, email: true });
      setFormChange(false);
    },
    [data, dispatch]
  );

  return (
    <form
      onReset={onResetHandler}
      onSubmit={onSubmitHandler}
      className={profileStyles.profile__form}
    >
      <Input
        value={data.name}
        placeholder="Имя"
        icon={disabled.name ? "EditIcon" : "CloseIcon"}
        onChange={(e) => onChangeValue(e.target)}
        extraClass="pb-6"
        type="text"
        name="name"
        disabled={disabled.name}
        onIconClick={() => onClickIcon("name")}
        ref={nameRef}
      />
      <Input
        value={data.email}
        icon={disabled.email ? "EditIcon" : "CloseIcon"}
        onChange={(e) => onChangeValue(e.target)}
        extraClass="pb-6"
        placeholder="Логин"
        type="email"
        name="email"
        disabled={disabled.email}
        onIconClick={() => onClickIcon("email")}
        ref={emailRef}
      />
      <Input
        placeholder="Пароль"
        value={data.password}
        onChange={(e) => onChangeValue(e.target)}
        type="password"
        name="password"
        icon={disabled.password ? "EditIcon" : "CloseIcon"}
        disabled={disabled.password}
        onIconClick={() => onClickIcon("password")}
        ref={passwordRef}
      />
      {formChange && (
        <div className={`${profileStyles.profile__bottom} pt-6`}>
          <Button htmlType="reset" type={"secondary"}>
            Отменить
          </Button>
          <Button htmlType={"submit"} type={"primary"}>
            Сохранить
          </Button>
        </div>
      )}
    </form>
  );
};
