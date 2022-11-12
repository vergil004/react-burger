import React from "react";
import loaderStyles from "./loader.module.css";

export function Loader() {
  return (
    <div className={loaderStyles.loader}>
      <div className={loaderStyles.spinner}></div>
      <div
        className={`${loaderStyles.loader__text} text_type_main-default pt-4`}
      >
        Загружаем...
      </div>
    </div>
  );
}
