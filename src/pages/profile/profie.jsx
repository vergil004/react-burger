import React from "react";
import { useHistory } from "react-router-dom";
import { Profile } from "@/components/profile/profile";
import { ProfileNav } from "@/components/profile/profile-nav/profile-nav";
import { Logout } from "@/components/profile/logout/logout";
import profileStyles from "./profile.module.css";

export const ProfilePage = () => {
  const history = useHistory();

  return (
    <main className={`${profileStyles.profile} pt-30`}>
      <ProfileNav />
      <div className="pl-15">
        {history.location.pathname === "/profile" ? <Profile /> : <Logout />}
      </div>
    </main>
  );
};
