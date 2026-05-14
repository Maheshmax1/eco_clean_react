import React from "react";

function ProfileHeader({ user }) {
  return (
    <div className="bg-emerald-700 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex items-center gap-6">

        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl text-emerald-700 shadow">
          👤
        </div>

        <div>
          <h2 className="text-3xl font-bold">
            Welcome, {user.name}
          </h2>
          <p className="text-sm mt-1">Admin ID: {user.id}</p>
          <p className="text-sm">Email: {user.email}</p>
        </div>

      </div>
    </div>
  );
}

export default ProfileHeader;
