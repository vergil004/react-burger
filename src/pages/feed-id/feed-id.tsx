import React, { useEffect } from "react";
import { useAppDispatch } from "@/utils/custom-hooks";
import { useLocation } from "react-router-dom";
import {
  feedConnectionStart,
  feedConnectionClosed,
} from "@/services/actions-creators/feed";
import {
  profileFeedConnectionStart,
  profileConnectionClosed,
} from "@/services/actions-creators/profile-feed";
import { FeedDetails } from "@/components/feed-details/feed-details";
import { BASE_WS_URL } from "@/utils/helpers";
import feedIdStyles from "./feed-id.module.css";
import { getCookie } from "@/utils/cookie";

export const FeedIdPage = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    const accessToken = getCookie("accessToken")?.replace("Bearer ", "");
    if (location.pathname.includes("/profile/orders")) {
      dispatch(
        profileFeedConnectionStart(`${BASE_WS_URL}?token=${accessToken}`)
      );
    } else {
      dispatch(feedConnectionStart(`${BASE_WS_URL}/all`));
    }
  }, []);
  return (
    <div className={feedIdStyles.feedId}>
      <FeedDetails />
    </div>
  );
};
