import React, { FC } from "react";
import errorStyles from "./app-error.module.css";

export const AppError: FC<{ error: string }> = ({ error }) => {
  return (
    <div className={errorStyles.error}>
      <div className="text text_type_main-default">
        Что-то пошло не так...
        <div className="pt-4">{error}</div>
      </div>
    </div>
  );
};
