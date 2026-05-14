import React, { useEffect, useState } from "react";
import profile from "../../assets/profile.jpg";
import { useNavigate } from "react-router-dom";

import { ENDPOINTS } from "../../api/constants";

function ProfileHeader() {
  const navigate = useNavigate()
  const [userDetail, setUserDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      console.warn("No authentication found! Redirecting to login...");
      setLoading(false);
      return;
    }

    const fetchProfile = async () => {
      try {
        const res = await fetch(ENDPOINTS.USERS.ME, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          alert("User detail not found");
        }

        const data = await res.json();
        console.log("data:", data);

        setUserDetail(data);
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token]);

  if (loading) {
    return <div className="text-center mt-10">Loading profile...</div>;
  }

  if (!userDetail) {
    return <div className="text-center mt-10">No user data found</div>;
  }

  const Logout = ()=>{
    localStorage.removeItem("role")
    localStorage.removeItem("token")
    window.location.href = "/";
  }

  return (
    <div className="flex justify-center mt-10 px-5">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 bg-gradient-to-br from-emerald-600 via-emerald-700 to-slate-800 text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl w-full max-w-4xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-white/10 transition-all duration-700"></div>

        {/* Profile Image */}
        <div className="relative z-10">
          <img
            src={profile}
            alt="profile"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/20 shadow-2xl group-hover:scale-105 transition duration-500"
          />
          <div className="absolute bottom-2 right-2 w-6 h-6 bg-emerald-400 border-4 border-emerald-600 rounded-full animate-pulse"></div>
        </div>

        {/* Profile Info */}
        <div className="relative z-10 text-center md:text-left flex-1">
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-emerald-300 mb-2">
            {userDetail.role === "admin" ? "Admin Profile" : "Volunteer Profile"}
          </p>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            {userDetail.full_name}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6">
            <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-50/70 text-sm">
              <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
              <span className="font-bold uppercase tracking-wider text-[10px]">Email:</span> {userDetail.email}
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-50/70 text-sm">
              <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
              <span className="font-bold uppercase tracking-wider text-[10px]">Phone:</span> {userDetail.phone}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <span className="px-4 py-1.5 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-[10px] font-black uppercase tracking-widest text-emerald-300">
              Active Member
            </span>
            <span className="px-4 py-1.5 bg-white/10 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-white/60">
              Role: {userDetail.role}
            </span>
            <button 
              onClick={Logout} 
              className="px-6 py-1.5 bg-red-500/80 hover:bg-red-500 rounded-full text-[10px] font-black uppercase tracking-widest text-white transition shadow-lg shadow-red-950/20"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;