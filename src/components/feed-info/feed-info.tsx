import React, { FC } from "react";
import { IFeedOrders } from "@/utils/types";
import feedInfoStyles from "./feed-info.module.css";

function notUndefinedCheck<T>(item: T | undefined): item is T {
  return item !== undefined;
}

export const FeedInfo: FC<IFeedOrders> = ({ orders, total, totalToday }) => {
  const filteredStatusesDone = orders
    .map((item) => {
      if (item.status === "done") {
        return item.number;
      }
    })
    .filter(notUndefinedCheck);
  const filteredStatusesPending = orders
    .map((item) => {
      if (item.status === "pending") {
        return item.number;
      }
    })
    .filter(notUndefinedCheck);
  return (
    <div className={feedInfoStyles.feedInfo}>
      <div className={feedInfoStyles.feedInfo__statusCont}>
        <div className={feedInfoStyles.feedInfo__statusBlock}>
          <div className="text text_type_main-medium pb-6">Готовы:</div>
          <ul className={feedInfoStyles.feedInfo__status}>
            {filteredStatusesDone.slice(0, 20).map((item, index) => (
              <li
                className={`${feedInfoStyles.feedInfo__statusItem} text text_type_digits-default pb-2`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={feedInfoStyles.feedInfo__statusBlock}>
          <div className="text text_type_main-medium pb-6">В работе:</div>
          <ul className={feedInfoStyles.feedInfo__status}>
            {filteredStatusesPending.slice(0, 20).map((item, index) => (
              <li
                className={`${feedInfoStyles.feedInfo__statusItemWhite} text text_type_digits-default pb-2`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="pt-15">
        <div className="text text_type_main-medium">
          Выполнено за все время:
        </div>
        <div className="text text_type_digits-large">{total}</div>
      </div>
      <div className="pt-15">
        <div className="text text_type_main-medium">Выполнено за сегодня:</div>
        <div className="text text_type_digits-large">{totalToday}</div>
      </div>
    </div>
  );
};
