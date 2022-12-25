import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "@/utils/custom-hooks";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { HeaderItem } from "./header-item/header-item";
import headerStyles from "./app-header.module.css";

export const AppHeader = () => {
  const user = useSelector((store) => {
    return store.user;
  });
  const personal = user.data ? user.data.name : "Личный кабинет";
  return (
    <header className={headerStyles.header}>
      <div className={`${headerStyles.header__cont} pt-4 pb-4`}>
        <nav className={headerStyles.header__cell}>
          <HeaderItem link="/">
            <BurgerIcon type={"secondary"} />
            <div className="pl-2">Конструктор</div>
          </HeaderItem>
          <HeaderItem link="/orders">
            <ListIcon type={"secondary"} />
            <div className="pl-2">Лента заказов</div>
          </HeaderItem>
        </nav>
        <Link className={headerStyles.header__cell} to="/">
          <Logo />
        </Link>
        <div className={headerStyles.header__cell}>
          <HeaderItem link="/profile">
            <ProfileIcon type={"secondary"} />
            <div className="pl-2">{personal}</div>
          </HeaderItem>
        </div>
      </div>
    </header>
  );
};
