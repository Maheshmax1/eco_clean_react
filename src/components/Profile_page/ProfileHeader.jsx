import React from "react";
import profile from "../../assets/profile.jpg";

const userDetail = {
  name: "Mahesh",
  email: "MaheshMariappan@gmail.com",
  vol_id: 1001,
  image: profile,
  status: "Active",
};

function ProfileHeader() {
  return (
    <div className="flex justify-center mt-10 px-5">
      <div className="flex items-center gap-6 bg-gradient-to-r from-emerald-600 to-slate-600 text-white p-6 rounded-2xl shadow-lg w-full max-w-6xl">
        
        {/* Profile Image */}
        <div>
          <img
            src={userDetail.image}
            alt="profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-white"
          />
        </div>

        {/* Profile Info */}
        <div>
          <h1 className="text-2xl font-semibold">
            Welcome {userDetail.name}
          </h1>

          <h2 className="text-sm text-slate-200 mt-1">
            Eco-Vol {userDetail.vol_id}
          </h2>

          <p className="text-sm text-slate-200">
            Email: {userDetail.email}
          </p>

          <p className="mt-2">
            Status: 
            <span className="ml-2 px-2 py-1 text-xs bg-emerald-500 ">
              {userDetail.status}
            </span>
          </p>
        </div>

      </div>
    </div>
  );
}

export default ProfileHeader;