import React from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { HeaderItem } from "./header-item/header-item";
import headerStyles from "./app-header.module.css";

export function AppHeader() {
  return (
    <header className={headerStyles.header}>
      <div className={`${headerStyles.header__cont} pt-4 pb-4`}>
        <nav className={headerStyles.header__cell}>
          <HeaderItem active={true}>
            <BurgerIcon type={"secondary"} />
            <div className="pl-2">Конструктор</div>
          </HeaderItem>
          <HeaderItem>
            <ListIcon type={"secondary"} />
            <div className="pl-2">Лента заказов</div>
          </HeaderItem>
        </nav>
        <div className={headerStyles.header__cell}>
          <Logo />
        </div>
        <div className={headerStyles.header__cell}>
          <HeaderItem link="/profile">
            <ProfileIcon type={"secondary"} />
            <div className="pl-2">Личный кабинет</div>
          </HeaderItem>
        </div>
      </div>
    </header>
  );
}
