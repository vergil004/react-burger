import React from "react";
import { useHistory } from "react-router-dom";
import { Profile } from "@/components/profile/profile";
import { ProfileNav } from "@/components/profile/profile-nav/profile-nav";
import { Orders } from "@/components/profile/orders/orders";
import profileStyles from "./profile.module.css";

export const ProfilePage = () => {
  const history = useHistory();

  return (
    <main className={`${profileStyles.profile} pt-10`}>
      <ProfileNav />
      <div className="pl-10">
        {history.location.pathname === "/profile" ? <Profile /> : <Orders />}
      </div>
    </main>
  );
};
