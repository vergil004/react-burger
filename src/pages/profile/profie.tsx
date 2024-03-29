import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Profile } from "../../components/profile/profile";
import { ProfileNav } from "../../components/profile/profile-nav/profile-nav";
import { Orders } from "../../components/orders/orders";
import profileStyles from "./profile.module.css";
import {
  profileFeedConnectionStart,
  profileConnectionClosed,
} from "../../services/actions-creators/profile-feed";
import { useAppDispatch, useSelector } from "../../utils/custom-hooks";
import { getCookie } from "../../utils/cookie";
import { BASE_WS_URL } from "../../utils/helpers";

export const ProfilePage = () => {
  const history = useHistory();
  const location = useLocation();

  const dispatch = useAppDispatch();
  useEffect(() => {
    const accessToken = getCookie("accessToken")?.replace("Bearer ", "");
    if (location.pathname.includes("/profile/orders")) {
      dispatch(
        profileFeedConnectionStart(`${BASE_WS_URL}?token=${accessToken}`)
      );
    }
    return () => {
      if (location.pathname.includes("/profile/orders")) {
        dispatch(profileConnectionClosed());
      }
    };
  }, [location]);
  const { orders } = useSelector((state) => {
    return state.profileFeed;
  });

  return (
    <main className={`${profileStyles.profile} pt-10`}>
      <ProfileNav />
      <div className="pl-10">
        {history.location.pathname === "/profile" ? (
          <Profile />
        ) : (
          <div className={profileStyles.profile__orders}>
            <Orders orders={orders} showStatus={true} />
          </div>
        )}
      </div>
    </main>
  );
};
