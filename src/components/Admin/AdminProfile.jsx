import React from "react";
import ProfileHeader from "../Profile_page/ProfileHeader";
import RegisteredEvents from "../Profile_page/RegisteredEvents";

function AdminProfile() {
  return (
    <div className="bg-emerald-50 min-h-screen rounded-2xl overflow-hidden shadow-lg border border-emerald-100">
      <ProfileHeader />
      <RegisteredEvents />
    </div>
  );
}

export default AdminProfile;
