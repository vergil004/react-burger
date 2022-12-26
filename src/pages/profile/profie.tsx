import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Profile } from "@/components/profile/profile";
import { ProfileNav } from "@/components/profile/profile-nav/profile-nav";
import { Orders } from "@/components/profile/orders/orders";
import profileStyles from "./profile.module.css";
import { profileFeedConnectionStart } from "@/services/actions-creators/profile-feed";
import { useAppDispatch } from "@/utils/custom-hooks";

export const ProfilePage = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(profileFeedConnectionStart());
  });
  return (
    <main className={`${profileStyles.profile} pt-10`}>
      <ProfileNav />
      <div className="pl-10">
        {history.location.pathname === "/profile" ? <Profile /> : <Orders />}
      </div>
    </main>
  );
};
