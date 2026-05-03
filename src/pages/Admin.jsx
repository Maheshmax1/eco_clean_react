import React, { useContext } from "react";
import EventCard from "../components/Admin/EventsCard";
import { Calendar, CheckCircle } from "lucide-react";
import UserSection from "../components/Admin/UserSection";
import ContactFormSection from "../components/Admin/ContactFormSection";
import EventRegistrationsSection from "../components/Admin/EventRegistrationsSection";
import EditEvent from "../components/Admin/EditOrAddEvent";
import { EventContext } from "../Context/EventContext";

function Admin() {

  // ✅ get correct data from context
  const { events } = useContext(EventContext);

  // ✅ filter directly
  const upcomingEvents = events.filter(
    (event) => event.status === "upcoming"
  );

  const completedEvents = events.filter(
    (event) => event.status === "completed"
  );

  return (
    <div className="bg-emerald-50 min-h-screen px-6 py-6">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-emerald-700">
          Admin Dashboard Overview
        </h1>

        <p className="text-gray-600 mt-2">
          Welcome back! Manage your EcoClean community efficiently. 🌱
        </p>

        <hr className="mt-4" />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mb-12">

        {/* Upcoming */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-center hover:shadow-lg transition">
          <div>
            <p className="text-gray-500 font-medium">Upcoming Events</p>
            <h2 className="text-4xl font-bold text-emerald-600 mt-2">
              {upcomingEvents.length}
            </h2>
          </div>
          <div className="bg-gray-100 p-4 rounded-full">
            <Calendar className="text-gray-400" size={30} />
          </div>
        </div>

        {/* Completed */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-center hover:shadow-lg transition">
          <div>
            <p className="text-gray-500 font-medium">Completed Events</p>
            <h2 className="text-4xl font-bold text-emerald-600 mt-2">
              {completedEvents.length}
            </h2>
          </div>
          <div className="bg-gray-100 p-4 rounded-full">
            <CheckCircle className="text-gray-400" size={30} />
          </div>
        </div>
      </div>

      {/* Events Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-emerald-900 mb-2">
          Admin - All Events
        </h2>
        <div className="w-20 h-1 bg-emerald-700 mx-auto rounded"></div>
      </div>

      {/* Event Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {events.length > 0 ? (
          events.map((event) => (
            <EventCard key={event.id} {...event} /> // ✅ use id not index
          ))
        ) : (
          <p className="text-center col-span-3 text-slate-600">
            No events available
          </p>
        )}
      </div>

      {/* Other Sections */}
      <UserSection />
      <ContactFormSection />
      <EventRegistrationsSection />
      <EditEvent />
    </div>
  );
}

export default Admin;