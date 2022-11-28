import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import notFoundStyles from "./not-found.module.css";

export const NotFoundPage = () => {
  const history = useHistory();
  const backToHomeHandler = useCallback(() => {
    history.replace({ pathname: "/" });
  }, [history]);
  return (
    <main className={notFoundStyles.notFound}>
      <div className={notFoundStyles.notFound__message}>
        <div className="text text_type_digits-large ">404</div>
        <div
          className={`${notFoundStyles.notFound__about} text text_type_main-default pb-4`}
        >
          Страница не найдена
        </div>
        <Button
          htmlType={"button"}
          size="large"
          onClick={() => backToHomeHandler()}
        >
          На главную
        </Button>
      </div>
    </main>
  );
};
