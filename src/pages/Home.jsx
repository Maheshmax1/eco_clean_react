import React from "react";
import HomeDetail from "../components/Home/HomeDetail";
import mainVideo from "../assets/main_vedio.mp4";
import SignUp from "../components/Home/SignUp";
import Login from "../components/Home/Login";

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
          <SignUp />
          <Login />

          {/* Login */}
        </div>
      </section>

      <HomeDetail />
    </div>
  );
}

export default Home;
