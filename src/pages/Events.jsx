import React, { useState } from "react";
import EventsSection from "../components/Events_page/EventsSection";

import eventVideo from "../assets/volunteervedio.mp4";

function Events() {
  
  

  return (
    <div className="bg-emerald-50">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={eventVideo} type="video/mp4" />
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter drop-shadow-2xl">
            Cleanup <span className="text-emerald-400">Events</span>
          </h1>
          <p className="text-lg md:text-2xl mb-10 max-w-2xl font-medium text-emerald-50/90 drop-shadow-lg italic">
            "Small acts, when multiplied by millions of people, can transform the world." 🌍
          </p>
        </div>
      </section>

      <EventsSection
        title="Upcoming Events"
        subtitle="Register now for our upcoming community cleanup drives"
        filter ="upcoming"

      />

      <EventsSection
        title="Completed Events"
        subtitle="Our recent successful cleanup initiatives"
        filter ="completed"
      />
    </div>
  );
}

export default Events;

