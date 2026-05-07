import React, { useEffect, useState } from "react";
import profile from "../../assets/profile.jpg";
import { useNavigate } from "react-router-dom";

function ProfileHeader() {

  const navigate = useNavigate()

  const [userDetail, setUserDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  const API_URL = "https://full-stack-eco-clean.vercel.app/api/users/me";

  useEffect(() => {
    if (!token) {
      console.warn("No authentication found! Redirecting to login...");
      setLoading(false);
      return;
    }

    const fetchProfile = async () => {
      try {
        const res = await fetch(API_URL, {
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
    navigate("/")

  }

  return (
    <div className="flex justify-center mt-10 px-5">
      <div className="flex items-center gap-6 bg-gradient-to-r from-emerald-600 to-slate-600 text-white p-6 rounded-2xl shadow-lg w-full max-w-4xl">

        {/* Profile Image */}
        <div>
          <img
            src={profile}
            alt="profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-white"
          />
        </div>

        {/* Profile Info */}
        <div>
          <h1 className="text-2xl font-semibold">
            Welcome {userDetail.full_name }
          </h1>

          <h2 className="text-sm text-slate-200 mt-1">
            Role: {userDetail.role }
          </h2>

          <p className="text-sm text-slate-200">
            Email: {userDetail.email }
          </p>

          <p className="text-sm text-slate-200">
            Phone: {userDetail.phone }
          </p>

          <p className="mt-2 flex">
            Status:
            <span className="ml-2 px-2 py-1 text-xs bg-emerald-500 rounded">
              Active
            </span>
            <button onClick={Logout} className="ml-2 px-2 py-1 text-xs bg-emerald-500 rounded">Logout</button>
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;