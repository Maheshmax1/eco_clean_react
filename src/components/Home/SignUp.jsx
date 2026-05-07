import React, { useState } from "react";

function SignUp() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")

  const Api_url = "https://full-stack-eco-clean.vercel.app/api/auth/signup"

  const HandleClick = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(Api_url, {
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

      const user_name = data.full_name
      const user_email = data.email
      const user_password = data.password
      const user_phone = data.phone
      const role = data.role

      console.log(user_name)
      console.log(user_email)
      console.log(user_password)
      console.log(user_phone)
      console.log(role)

      localStorage.setItem("user_name", user_name)
      localStorage.setItem("user_email", user_email)
      localStorage.setItem("user_phone", user_phone)
      localStorage.setItem("user_password", user_password)
      localStorage.setItem("role",role)

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Create Account</h2>
        <p className="text-slate-600 mb-6">
          Join EcoClean and participate in clean & green events
        </p>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your full name"
              onChange={(e) => { setName(e.target.value) }}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="your.email@example.com"
              onChange={(e) => { setEmail(e.target.value) }}

            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="+91 9876543210"
              onChange={(e) => { setPhone(e.target.value) }}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Create password"
              onChange={(e) => { setPassword(e.target.value) }}
            />
          </div>

          <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition" onClick={HandleClick}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

