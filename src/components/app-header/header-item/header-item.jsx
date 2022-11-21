import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import headerItemStyles from "./header-item.module.css";

export function HeaderItem({ active, link, children }) {
  const itemClass = active
    ? headerItemStyles.headerItemActive
    : headerItemStyles.headerItem;

  return (
    <Link
      to={link}
      className={`${itemClass} text text_type_main-default pt-4 pr-5 pb-4 pl-5`}
    >
      {children}
    </Link>
  );
}

HeaderItem.defaultProps = {
  active: false,
  link: "",
};
HeaderItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
