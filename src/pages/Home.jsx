import React from "react";
import HomeDetail from "../components/Home/HomeDetail";
import mainVideo from "../assets/main_vedio.mp4";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute  w-full h-full object-cover"
        >
          <source src={mainVideo} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

        {/* Hero Content */}
        <div className="relative  flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Keep Our Planet Clean
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Join hands in cleaning rivers, beaches, and communities
          </p>

          <a
            href="#auth-section"
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-lg font-semibold transition"
          >
            Become a Volunteer
          </a>
        </div>
      </section>

      {/* Auth Section */}
      <section
        id="auth-section"
        className="py-16 bg-emerald-50 flex justify-center items-center"
      >
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 px-6">
          {/* Signup */}
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

          {/* Login */}
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
        </div>
      </section>

      <HomeDetail />
    </div>
  );
}

export default Home;
