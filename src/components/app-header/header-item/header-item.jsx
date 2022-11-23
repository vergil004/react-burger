import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import headerItemStyles from "./header-item.module.css";

export function HeaderItem({ link, children }) {
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
}

HeaderItem.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
};
