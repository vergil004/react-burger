import React from "react";
import { OrdersItem } from "@/components/profile/orders/orders-item/orders-items";
import ordersStyles from "./orders.module.css";

export const Orders = () => {
  return (
    <ul className={ordersStyles.orders}>
      <li className={`${ordersStyles.orders__item} pb-6`}>
        <OrdersItem />
      </li>
      <li className={`${ordersStyles.orders__item} pb-6`}>
        <OrdersItem />
      </li>
      <li className={`${ordersStyles.orders__item} pb-6`}>
        <OrdersItem />
      </li>
    </ul>
  );
};
