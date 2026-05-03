import React from "react";

function Login() {
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
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter password"
          />
        </div>

        <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
