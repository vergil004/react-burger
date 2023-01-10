import React, { useEffect } from "react";
import { useAppDispatch, useSelector } from "@/utils/custom-hooks";
import { Orders } from "@/components/orders/orders";
import {
  feedConnectionStart,
  feedConnectionClosed,
} from "@/services/actions-creators/feed";
import { FeedInfo } from "@/components/feed-info/feed-info";
import { BASE_WS_URL } from "@/utils/helpers";
import feedPageStyles from "./feed.module.css";

export const FeedPage = () => {
  const dispatch = useAppDispatch();
  const { orders, total, totalToday } = useSelector((state) => {
    return state.feed;
  });
  useEffect(() => {
    dispatch(feedConnectionStart(`${BASE_WS_URL}/all`));
    return () => {
      dispatch(feedConnectionClosed());
    };
  }, []);
  return (
    <div className={feedPageStyles.feed}>
      <div
        className={`${feedPageStyles.feed__title} text text_type_main-large pt-10 pb-5`}
      >
        Лента заказов
      </div>
      <div className={feedPageStyles.feed__cont}>
        <div className={`${feedPageStyles.feed__left} pr-2`}>
          <Orders orders={orders} showStatus={false} />
        </div>
        <div className={feedPageStyles.feed__right}>
          <FeedInfo orders={orders} total={total} totalToday={totalToday} />
        </div>
      </div>
    </div>
  );
};
