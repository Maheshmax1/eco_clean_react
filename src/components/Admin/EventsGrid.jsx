import React from "react";
import EventCard from "./EventCard";

function EventsGrid({ events }) {
  return (
    <div className="bg-emerald-50 py-16 px-6">

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-emerald-900 mb-2">
          My Registered Events
        </h2>
        <div className="w-20 h-1 bg-emerald-700 mx-auto rounded"></div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
}

export default EventsGrid;