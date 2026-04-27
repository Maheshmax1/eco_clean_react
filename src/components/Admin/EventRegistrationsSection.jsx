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
    title: "Save Our River – Cleanup",
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
    <div className="p-6 bg-slate-100 min-h-screen">
      <h1 className="text-3xl font-bold text-emerald-700 mb-6">
        Event Registrations
      </h1>

      {events.map((event, index) => (
        <EventTable key={index} event={event} />
      ))}
    </div>
  );
}

export default EventRegistrationsSection
