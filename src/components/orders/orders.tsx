import React, { FC } from "react";
import { OrdersItem } from "./orders-item/orders-items";
import ordersStyles from "./orders.module.css";
import { IFeedData } from "../../utils/types";

interface IOrders {
  orders: Array<IFeedData>;
  showStatus: boolean;
}

export const Orders: FC<IOrders> = ({ orders, showStatus }) => {
  return (
    <ul className={ordersStyles.orders}>
      {orders.slice(0, 20).map((item, index) => (
        <li key={index} className={`${ordersStyles.orders__item} pb-6`}>
          <OrdersItem order={item} showStatus={showStatus} />
        </li>
      ))}
    </ul>
  );
};
