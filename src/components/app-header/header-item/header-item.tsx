import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import headerItemStyles from "./header-item.module.css";

interface IHeaderItem {
  link: string;
  children: React.ReactNode;
}

export const HeaderItem: FC<IHeaderItem> = ({ link, children }) => {
  return (
    <NavLink
      to={link}
      className={`${headerItemStyles.headerItem} text text_type_main-default pt-4 pr-5 pb-4 pl-5`}
      activeClassName={headerItemStyles.headerItemActive}
      exact={true}
    >
      {children}
    </NavLink>
  );
};
