import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ENDPOINTS } from "../../api/constants";

function Login() {
  const Navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // Clear any old/expired tokens when reaching the login form
  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  }, []);

  const HandleClick = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(ENDPOINTS.AUTH.LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      if (res.status != 200) {
        alert("user detail not found")
        return
      }
      const data = await res.json()
      console.log("data", data)

      const token = data.access_token
      console.log(token)

      const role = data.role
      // console.log(email)

      localStorage.setItem("token",token)
      localStorage.setItem("role",role)

      // navigate to the dashboard and admin
      if (data.role == "admin"){
        window.location.href = "/admin";
      }else if(data.role == "volunteer"){
        window.location.href = "/profile";
      }else{
        window.location.href = "/";
      }

    } catch (err) {
      console.log(err)

    }
  }

  return (
    <div className="animate-in fade-in slide-in-from-left-4 duration-500">
      <div className="bg-white p-2 md:p-4 rounded-3xl">
        <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Welcome Back</h2>
        <p className="text-slate-400 text-sm mb-8 font-medium">
          Securely access your EcoClean portal
        </p>

        <form className="space-y-5">
          <div className="space-y-2">
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
            <input
              type="email"
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-sm font-bold"
              placeholder="email@example.com"
              onChange={(e) => { setEmail(e.target.value) }}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Secure Password</label>
            <input
              type="password"
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-sm font-bold"
              placeholder="••••••••"
              onChange={(e) => { setPassword(e.target.value) }}
            />
          </div>

          <button 
            className="w-full bg-emerald-500 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-emerald-500/20 hover:bg-emerald-600 transition-all duration-300 hover:scale-[1.02]" 
            onClick={HandleClick}
          >
            Authenticate
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
