import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {


  const Navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const Api_url = "https://full-stack-eco-clean.vercel.app/api/auth/login"


  const HandleClick = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(Api_url, {
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
        alert("wrong detail")
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
        Navigate("/admin")
      }else if(data.role == "volunteer"){
          Navigate("/profile")
        }else{
          Navigate("/")
        }

    } catch (err) {
      console.log(err)

    }
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
      <p className="text-slate-600 mb-6">
        Login to view your events and profile
      </p>

      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="your.email@example.com"
            onChange={(e) => { setEmail(e.target.value) }}

          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter password"
            onChange={(e) => { setPassword(e.target.value) }}
          />
        </div>

        <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition" onClick={HandleClick}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
