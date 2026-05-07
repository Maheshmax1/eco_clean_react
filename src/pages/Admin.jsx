import React, { useContext,useEffect } from "react";
import EventCard from "../components/Admin/EventsCard";
import { Calendar, CheckCircle } from "lucide-react";
import UserSection from "../components/Admin/UserSection";
import ContactFormSection from "../components/Admin/ContactFormSection";
import EventRegistrationsSection from "../components/Admin/EventRegistrationsSection";
import EditEvent from "../components/Admin/EditOrAddEvent";
import { EventContext } from "../Context/EventContext";
import { useNavigate } from "react-router-dom";

function Admin() {

  const navigate = useNavigate()

  const role = localStorage.getItem("role")
  const token = localStorage.getItem("token")

  useEffect(() => {

    if (!token || role !== "admin") {
      navigate("/");
    }

  }, []);

  //  get correct data from context
  const { events } = useContext(EventContext);

  //  filter directly
  const upcomingEvents = events.filter(
    (event) => event.status === "upcoming"
  );

  const completedEvents = events.filter(
    (event) => event.status === "completed"
  );

  const logout = ()=>{
    localStorage.removeItem("role")
    localStorage.removeItem("token")
    navigate("/")

  }

  return (
    <div className="bg-gray-50 min-h-screen px-4 sm:px-6 lg:px-8 py-8">

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <button className="bg-red-600 p-2 text-white rounded-2xl" onClick={logout}>Logout</button>
            <h1 className="text-4xl font-bold text-gray-900">
              Admin Dashboard
            </h1>
            <p className="text-gray-600 mt-2 text-lg">
              Welcome back! Manage your EcoClean community efficiently. 🌱
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

        {/* Upcoming */}
        <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-emerald-500 hover:shadow-xl transition duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 font-semibold text-sm uppercase tracking-wide">Upcoming Events</p>
              <h2 className="text-5xl font-bold text-emerald-600 mt-3">
                {upcomingEvents.length}
              </h2>
            </div>
            <div className="bg-emerald-100 p-5 rounded-lg">
              <Calendar className="text-emerald-600" size={40} />
            </div>
          </div>
        </div>

        {/* Completed */}
        <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-500 hover:shadow-xl transition duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 font-semibold text-sm uppercase tracking-wide">Completed Events</p>
              <h2 className="text-5xl font-bold text-blue-600 mt-3">
                {completedEvents.length}
              </h2>
            </div>
            <div className="bg-blue-100 p-5 rounded-lg">
              <CheckCircle className="text-blue-600" size={40} />
            </div>
          </div>
        </div>
      </div>

      {/* Events Heading */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-1">
          All Events
        </h2>
        <p className="text-gray-500">Manage and organize your events</p>
      </div>

      {/* Event Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {events.length > 0 ? (
          events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))
        ) : (
          <p className="text-center col-span-3 text-slate-600">
            No events available
          </p>
        )}
      </div>

      {/* Other Sections */}
      <div className="space-y-12">
        <UserSection />
        <EventRegistrationsSection />
        <ContactFormSection />
        <EditEvent />
      </div>
    </div>
  );
}

export default Admin;