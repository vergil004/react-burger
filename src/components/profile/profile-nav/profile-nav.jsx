import React from "react";
import { NavLink } from "react-router-dom";
import profileNavStyles from "./profile-nav.module.css";

export const ProfileNav = () => {
  return (
    <div className={profileNavStyles.profileNav}>
      <NavLink
        activeClassName={profileNavStyles.profileNav__itemActive}
        className={profileNavStyles.profileNav__item}
        to="/profile"
      >
        Профиль
      </NavLink>
      <NavLink
        activeClassName={profileNavStyles.profileNav__itemActive}
        className={profileNavStyles.profileNav__item}
        to="/profile/orders"
      >
        История заказов
      </NavLink>
      <NavLink
        activeClassName={profileNavStyles.profileNav__itemActive}
        className={profileNavStyles.profileNav__item}
        to="/logout"
      >
        Выход
      </NavLink>
      <div className="pt-20 text text_type_main-default">
        В этом разделе вы можете
        <br /> изменить свои персональные данные
      </div>
    </div>
  );
};
