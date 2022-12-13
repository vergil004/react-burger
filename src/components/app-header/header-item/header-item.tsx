import React, { FC, PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";
import headerItemStyles from "./header-item.module.css";

interface IHeaderItem {
  link: string;
}

export const HeaderItem: FC<PropsWithChildren<IHeaderItem>> = ({
  link,
  children,
}) => {
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
