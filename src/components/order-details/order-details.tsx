import React from "react";
import { useSelector } from "../../utils/custom-hooks";
import { Loader } from "../loader/loader";
import { AppError } from "../app-error/app-error";
import orderStyles from "./order-details.module.css";
import doneImage from "../../images/done.png";

export const OrderDetails = () => {
  const { number, orderRequest, orderRequestFailed, errorText } = useSelector(
    (store) => {
      return store.order;
    }
  );
  return (
    <>
      {orderRequestFailed && (
        <div className={orderStyles.order__error}>
          <AppError error={errorText} />
        </div>
      )}
      {orderRequest && (
        <div className={orderStyles.order__loader}>
          <Loader />
        </div>
      )}
      {!orderRequest && (
        <div className={orderStyles.order}>
          <div
            className={`${orderStyles.order__item} text text_type_digits-large pb-8`}
          >
            {number}
          </div>
          <div
            className={`${orderStyles.order__item} text text_type_main-medium pb-15`}
          >
            идентификатор заказа
          </div>
          <div className={`${orderStyles.order__item} pb-15`}>
            <img width="120" height="120" src={doneImage} alt="done" />
          </div>
          <div
            className={`${orderStyles.order__item} text text_type_main-default pb-2`}
          >
            Ваш заказ начали готовить
          </div>
          <div
            className={`${orderStyles.order__bottom} text text_type_main-default`}
          >
            Дождитесь готовности на орбитальной станции
          </div>
        </div>
      )}
    </>
  );
};
