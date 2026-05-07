import React from 'react'
import EventTable from './EventTable';

function EventRegistrationsSection() {

    const events = [
  {
    title: "Chennai Beach Cleanup Drive 2026",
    volunteers: [
      {
        name: "hari haran",
        email: "hari@gmail.com",
        phone: "+916379095634",
        date: "23/03/2026"
      },
      {
        name: "rehana",
        email: "reh@gmail.com",
        phone: "+916379095634",
        date: "25/03/2026"
      },
      {
        name: "dhanush",
        email: "dhansuh@gmail.com",
        phone: "6379095662",
        date: "25/03/2026"
      }
    ]
  },
  {
    title: "Save Our River - Cleanup",
    volunteers: [
      {
        name: "hari haran",
        email: "hari@gmail.com",
        phone: "+916379095634",
        date: "23/03/2026"
      },
      {
        name: "rehana",
        email: "reh@gmail.com",
        phone: "+916379095634",
        date: "25/03/2026"
      }
    ]
  }
];
   return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        Event Registrations
      </h2>
      <p className="text-gray-600 mb-8">
        View all volunteers registered for each event
      </p>

      <div className="space-y-6">
      {events.map((event, index) => (
        <EventTable key={index} event={event} />
      ))}
      </div>
    </div>
  );
}

export default EventRegistrationsSection
