import React from "react";
import ProfileHeader from "../components/Profile_page/ProfileHeader";
import RegisteredEvents from "../components/Profile_page/RegisteredEvents";

function Profile() {
  return (
    <div className="bg-emerald-50 min-h-screen">
      <ProfileHeader />
      <RegisteredEvents />
    </div>
  );
}

export default Profile;
