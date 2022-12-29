import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Profile } from "@/components/profile/profile";
import { ProfileNav } from "@/components/profile/profile-nav/profile-nav";
import { Orders } from "@/components/orders/orders";
import profileStyles from "./profile.module.css";
import { profileFeedConnectionStart } from "@/services/actions-creators/profile-feed";
import { useAppDispatch } from "@/utils/custom-hooks";
import { getCookie } from "@/utils/cookie";
import { BASE_WS_URL } from "@/utils/helpers";

export const ProfilePage = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const accessToken = getCookie("accessToken")?.replace("Bearer ", "");
    dispatch(profileFeedConnectionStart(`${BASE_WS_URL}?token=${accessToken}`));
  });
  return (
    <main className={`${profileStyles.profile} pt-10`}>
      <ProfileNav />
      <div className="pl-10">
        {history.location.pathname === "/profile" ? <Profile /> : "test"}
      </div>
    </main>
  );
};
