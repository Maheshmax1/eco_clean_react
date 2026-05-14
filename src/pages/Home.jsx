import React, { useState } from "react";
import HomeDetail from "../components/Home/HomeDetail";
import mainVideo from "../assets/main_vedio.mp4";
import SignUp from "../components/Home/SignUp";
import Login from "../components/Home/Login";

function Home() {
  const [isLogin, setIsLogin] = useState(true);

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
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter drop-shadow-2xl">
            Keep Our Planet <span className="text-emerald-400">Clean</span>
          </h1>
          <p className="text-lg md:text-2xl mb-10 max-w-2xl font-medium text-emerald-50/90 drop-shadow-lg">
            Join hands in cleaning rivers, beaches, and communities. Be the change you want to see in the world. 🌍
          </p>

          <a
            href="#auth-section"
            className="bg-emerald-500 hover:bg-emerald-400 px-10 py-4 rounded-2xl text-lg font-black transition-all duration-300 shadow-xl hover:shadow-emerald-500/40 hover:-translate-y-1"
          >
            Become a Volunteer
          </a>
        </div>
      </section>

      {/* Auth Section */}
      <section
        id="auth-section"
        className="py-24 bg-gradient-to-b from-emerald-50 to-white flex justify-center items-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/10 to-transparent"></div>
        
        <div className="max-w-xl w-full px-6 relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="bg-white/80 backdrop-blur-xl p-2 rounded-[2.5rem] shadow-2xl border border-white/50">
            <div className="flex mb-4">
              <button 
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-4 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 ${isLogin ? 'bg-emerald-500 text-white shadow-lg' : 'text-slate-400 hover:text-emerald-600'}`}
              >
                Login
              </button>
              <button 
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-4 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 ${!isLogin ? 'bg-emerald-500 text-white shadow-lg' : 'text-slate-400 hover:text-emerald-600'}`}
              >
                Sign Up
              </button>
            </div>

            <div className="p-4">
              {isLogin ? (
                <Login />
              ) : (
                <SignUp onSuccess={() => setIsLogin(true)} />
              )}
            </div>
          </div>

          <p className="text-center mt-8 text-slate-400 text-sm font-medium">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-emerald-600 font-bold hover:underline"
            >
              {isLogin ? "Join the movement" : "Sign in here"}
            </button>
          </p>
        </div>
      </section>

      <HomeDetail />
    </div>
  );
}

export default Home;
