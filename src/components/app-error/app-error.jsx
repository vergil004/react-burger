import React from "react";
import PropTypes from "prop-types";
import errorStyles from "./app-error.module.css";

export function AppError({ error }) {
  return (
    <div className={errorStyles.error}>
      <div className="text text_type_main-default">
        Что-то пошло не так...
        <div className="pt-4">{error}</div>
      </div>
    </div>
  );
}

AppError.propTypes = {
  error: PropTypes.string.isRequired,
};
