import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import profileStyles from "./profile.module.css";
import { updateUser } from "@/services/actions/user";

export const Profile = () => {
  const dispatch = useDispatch();

  const user = useSelector((store) => {
    return store.user;
  });

  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [disabled, setDisabled] = useState({
    name: true,
    email: true,
    password: true,
  });
  const [formChange, setFormChange] = useState(false);

  useEffect(() => {
    setData({ ...user.data, password: "" });
  }, [user.data]);

  const onChangeValue = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    setFormChange(true);
  };

  const onClickIcon = (name) => {
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
    async (e) => {
      e.preventDefault();
      dispatch(updateUser(data));
      setDisabled({ name: true, password: true, email: true });
      setFormChange(false);
    },
    [data, dispatch]
  );

  const nameIcon = disabled.name ? "EditIcon" : "CloseIcon";
  const emailIcon = disabled.email ? "EditIcon" : "CloseIcon";
  const passwordIcon = disabled.password ? "EditIcon" : "CloseIcon";

  return (
    <form
      onReset={onResetHandler}
      onSubmit={onSubmitHandler}
      className={profileStyles.profile__form}
    >
      <Input
        value={data.name}
        placeholder="Имя"
        icon={nameIcon}
        onChange={onChangeValue}
        extraClass="pb-6"
        type="text"
        name="name"
        disabled={disabled.name}
        onIconClick={() => onClickIcon("name")}
      />
      <Input
        value={data.email}
        icon={emailIcon}
        onChange={onChangeValue}
        extraClass="pb-6"
        placeholder="Логин"
        type="email"
        name="email"
        disabled={disabled.email}
        onIconClick={() => onClickIcon("email")}
      />
      <Input
        placeholder="Пароль"
        value={data.password}
        onChange={onChangeValue}
        type="password"
        name="password"
        icon={passwordIcon}
        disabled={disabled.password}
        onIconClick={() => onClickIcon("password")}
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
