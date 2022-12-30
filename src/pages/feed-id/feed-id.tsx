import React, { useEffect } from "react";
import { useAppDispatch } from "@/utils/custom-hooks";
import {
  feedConnectionStart,
  feedConnectionClosed,
} from "@/services/actions-creators/feed";
import { FeedDetails } from "@/components/feed-details/feed-details";
import { BASE_WS_URL } from "@/utils/helpers";
import feedIdStyles from "./feed-id.module.css";

export const FeedIdPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(feedConnectionStart(`${BASE_WS_URL}/all`));
    return () => {
      dispatch(feedConnectionClosed());
    };
  }, []);
  return (
    <div className={feedIdStyles.feedId}>
      <FeedDetails />
    </div>
  );
};
