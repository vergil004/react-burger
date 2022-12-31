import React, { FC } from "react";
import { useSelector } from "@/utils/custom-hooks";
import { useRouteMatch, useLocation } from "react-router-dom";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import detailsStyles from "./feed-details.module.css";

type Tparams = {
  id: string;
};

function statusLabel(status: string) {
  switch (status) {
    case "done": {
      return "Готов";
    }
    case "created": {
      return "Создан";
    }
    case "pending": {
      return "В работе:";
    }
    default:
      return status;
  }
}
function notUndefinedCheck<T>(item: T | undefined): item is T {
  return item !== undefined;
}

type TDeatails = {
  isModal?: boolean;
};

export const FeedDetails: FC<TDeatails> = ({ isModal }) => {
  const { allItems } = useSelector((state) => {
    return state.ingredients;
  });
  const { params } = useRouteMatch<Tparams>();
  const location = useLocation();
  const { orders } = useSelector((state) => {
    return location.pathname.includes("/profile")
      ? state.profileFeed
      : state.feed;
  });

  const order = orders.find((item) => item._id === params.id);
  const totalItems = allItems.filter((item) =>
    order?.ingredients.includes(item._id)
  );
  const totalAllItems = order?.ingredients
    .map((id) => {
      return allItems.find((item) => item._id === id);
    })
    .filter(notUndefinedCheck);

  const sumOrder = totalAllItems?.reduce((sum, item) => sum + item.price, 0);

  const statusClass =
    order?.status === "done"
      ? detailsStyles.feedDetails__statusDone
      : detailsStyles.feedDetails__status;
  function count(id: string) {
    return order?.ingredients.filter((item) => item === id).length;
  }
  const titleClass = isModal
    ? `text text_type_digits-default ${detailsStyles.feedDetails__title}`
    : "text text_type_digits-default";
  return (
    <div className={detailsStyles.feedDetails}>
      {order !== undefined && (
        <div>
          <div className={titleClass}>#{order.number}</div>
          <div
            className={`${detailsStyles.feedDetails__text} text text_type_main-medium pt-5`}
          >
            {order.name}
          </div>
          <div className={`${statusClass} text text_type_main-default pt-2`}>
            {statusLabel(order.status)}
          </div>
          <div
            className={`text text_type_main-medium pt-15 pb-6 ${detailsStyles.feedDetails__text}`}
          >
            Состав:
          </div>
          <ul className={detailsStyles.feedDetails__list}>
            {totalItems?.map((item, index) => (
              <li
                key={index}
                className={`${detailsStyles.feedDetails__item} pt-4 pr-6`}
              >
                <div className={detailsStyles.feedDetails__left}>
                  <div className={detailsStyles.feedDetails__ingredient}>
                    <div className={detailsStyles.feedDetails__image}>
                      <img
                        src={item.image}
                        width="60"
                        alt="изображение ингредиента"
                      />
                    </div>
                  </div>
                  <div className="pl-10 text text_type_main-default">
                    {item.name}
                  </div>
                </div>
                <div
                  className={`text text_type_digits-default ${detailsStyles.feedDetails__count}`}
                >
                  <span className="pr-2">
                    {count(item._id)}&nbsp;x&nbsp;{item.price}
                  </span>
                  <CurrencyIcon type={"primary"} />
                </div>
              </li>
            ))}
          </ul>
          <div className={`${detailsStyles.feedDetails__bottom} pt-10`}>
            <div
              className={`text text_type_main-default ${detailsStyles.feedDetails__date}`}
            >
              {order.createdAt}
            </div>
            <div
              className={`${detailsStyles.feedDetails__count} text text_type_digits-default`}
            >
              <span className="pr-2">{sumOrder}</span>
              <CurrencyIcon type={"primary"} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
