import React from "react";

function SignUp() {
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
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Phone</label>
            <input
              type="tel"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="+91 9876543210"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Create password"
            />
          </div>

          <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
