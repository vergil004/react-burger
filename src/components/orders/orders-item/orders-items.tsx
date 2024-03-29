import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "../../../utils/custom-hooks";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import itemStyles from "./orders-item.module.css";
import { IFeedData } from "../../../utils/types";
import { statusLabel } from "../../../utils/helpers";

interface IOrderItem {
  order: IFeedData;
  showStatus: boolean;
}

function notUndefinedCheck<T>(item: T | undefined): item is T {
  return item !== undefined;
}

export const OrdersItem: FC<IOrderItem> = ({ order, showStatus }) => {
  const { allItems } = useSelector((state) => {
    return state.ingredients;
  });
  const location = useLocation();
  const totalItems = order.ingredients
    .map((id) => {
      return allItems.find((item) => item._id === id);
    })
    .filter(notUndefinedCheck);

  const sumOrder = totalItems.reduce((sum, item) => sum + item.price, 0);
  const currentPath = location.pathname.includes("/feed")
    ? `/feed/${order._id}`
    : `/profile/orders/${order._id}`;
  const statusClass =
    order?.status === "done"
      ? itemStyles.ordersItem__statusDone
      : itemStyles.ordersItem__status;

  return (
    <Link
      to={{
        pathname: currentPath,
        state: { background: location },
      }}
      className={`${itemStyles.ordersItem} p-6`}
    >
      <div className={itemStyles.ordersItem__top}>
        <div
          className={`${itemStyles.ordersItem__number} text text_type_digits-default`}
        >
          #{order.number}
        </div>
        <div
          className={`${itemStyles.ordersItem__date} text text_type_main-small`}
        >
          {order.createdAt}
        </div>
      </div>
      <div className="pt-6 text text_type_main-medium">{order.name}</div>
      {showStatus && (
        <div className={`pt-6 text text_type_main-default ${statusClass}`}>
          {statusLabel(order.status)}
        </div>
      )}
      <div className={`${itemStyles.ordersItem__bottom} pt-6`}>
        <ul className={itemStyles.ordersItem__ingredients}>
          {totalItems
            .slice(0, 6)
            .reverse()
            .map((item, index) => (
              <li key={index} className={itemStyles.ordersItem__ingredient}>
                <div className={itemStyles.ordersItem__image}>
                  <img
                    src={item.image}
                    width="60"
                    alt="изображение ингредиента"
                  />
                  {totalItems.length > 6 && index === 0 && (
                    <div className={itemStyles.ordersItem__text}>
                      +{totalItems.length - 6}
                    </div>
                  )}
                </div>
              </li>
            ))}
        </ul>
        <div className={itemStyles.ordersItem__price}>
          <div className="pr-2">{sumOrder}</div>
          <CurrencyIcon type={"primary"} />
        </div>
      </div>
    </Link>
  );
};
