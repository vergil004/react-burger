import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import itemStyles from "./orders-item.module.css";

export const OrdersItem = () => {
  return (
    <div className={`${itemStyles.ordersItem} p-6`}>
      <div className={itemStyles.ordersItem__top}>
        <div
          className={`${itemStyles.ordersItem__number} text text_type_digits-default`}
        >
          #034535
        </div>
        <div
          className={`${itemStyles.ordersItem__date} text text_type_main-small`}
        >
          Сегодня, 16:20
        </div>
      </div>
      <div className="pt-6 text text_type_main-medium">
        Death Star Starship Main бургер
      </div>
      <div className="pt-6 text text_type_main-default">Создан</div>
      <div className={`${itemStyles.ordersItem__bottom} pt-6`}>
        <ul className={itemStyles.ordersItem__ingredients}>
          <li className={itemStyles.ordersItem__ingredient}>
            <div className={itemStyles.ordersItem__image}>1</div>
          </li>
          <li className={itemStyles.ordersItem__ingredient}>
            <div className={itemStyles.ordersItem__image}>2</div>
          </li>
          <li className={itemStyles.ordersItem__ingredient}>
            <div className={itemStyles.ordersItem__image}>3</div>
          </li>
          <li className={itemStyles.ordersItem__ingredient}>
            <div className={itemStyles.ordersItem__image}>4</div>
          </li>
        </ul>
        <div className={itemStyles.ordersItem__price}>
          <div className="pr-2">480</div>
          <CurrencyIcon type={"primary"} />
        </div>
      </div>
    </div>
  );
};
