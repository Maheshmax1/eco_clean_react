import React, { useState } from "react";

import { ENDPOINTS } from "../../api/constants";

function SignUp({ onSuccess }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")

  const HandleClick = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(ENDPOINTS.AUTH.SIGNUP, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

        },
        body: JSON.stringify({
          full_name: name,
          email: email,
          phone: phone,
          password: password,
        })
      })
      if (!res.ok) {
        alert("Account not created")
        return
      }
      const data = await res.json()
      console.log("data", data)

      alert("Account created successfully! Please login to continue.");
      
      if (onSuccess) {
        onSuccess();
      }

    } catch (err) {
      console.log(err)
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="bg-white p-2 md:p-4 rounded-3xl">
        <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Create Account</h2>
        <p className="text-slate-400 text-sm mb-8 font-medium">
          Join EcoClean and participate in missions
        </p>

        <form className="space-y-5">
          <div className="space-y-2">
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-sm font-bold"
              placeholder="Enter your name"
              onChange={(e) => { setName(e.target.value) }}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-sm font-bold"
              placeholder="email@example.com"
              onChange={(e) => { setEmail(e.target.value) }}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-sm font-bold"
              placeholder="+91"
              onChange={(e) => { setPhone(e.target.value) }}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-sm font-bold"
              placeholder="Create password"
              onChange={(e) => { setPassword(e.target.value) }}
            />
          </div>

          <button 
            className="w-full bg-emerald-500 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-emerald-500/20 hover:bg-emerald-600 transition-all duration-300 hover:scale-[1.02]" 
            onClick={HandleClick}
          >
            Create Free Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

