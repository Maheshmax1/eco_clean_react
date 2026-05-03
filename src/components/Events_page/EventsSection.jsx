import React from "react";
import { useContext } from "react";
import EventCard from "./EventCard";
import { EventContext } from "../../Context/EventContext";

function EventsSection({ title, subtitle, filter }) {

  const {events} = useContext(EventContext);

  const filteredEvents = filter ? events.filter((e) =>e.status === filter):events;

  return (
    <div className="py-16 px-6">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-800 mb-2">
          {title}
        </h2>
        <div className="w-20 h-1 bg-emerald-700 mx-auto mb-4 rounded"></div>
        <p className="text-slate-600">{subtitle}</p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} {...event}
           />
        ))}
      </div>
    </div>
  );
}

export default EventsSection;