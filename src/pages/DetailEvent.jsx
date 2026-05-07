import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { EventContext } from "../Context/EventContext";

function DetailEvent() {
  const { id } = useParams();

  const { events } = useContext(EventContext);

  // Find Event
  const event = events.find((e) => e.id === parseInt(id));

  // Registration State
  const [isRegistered, setIsRegistered] = useState(false);

  // Event Not Found
  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-100">
        <div className="bg-white p-10 rounded-3xl shadow-2xl text-center">
          <h2 className="text-4xl font-bold text-red-500 mb-4">
            Event Not Found
          </h2>

          <Link
            to="/events"
            className="inline-block mt-4 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            Back To Events
          </Link>
        </div>
      </div>
    );
  }

  // Join Event
  const handleJoin = () => {
    setIsRegistered(true);
  };

  // Leave Event
  const handleLeave = () => {
    setIsRegistered(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-100 py-14 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 bg-white rounded-3xl overflow-hidden shadow-2xl border border-emerald-100">
          {/* Banner */}
          <div className="relative h-[450px] overflow-hidden">
            {/* IMAGE */}
            <img
              src={event.image_url || "https://via.placeholder.com/1200x500"}
              alt={event.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* STATUS */}
            <div
              className={`absolute top-6 left-6 px-5 py-2 rounded-full text-sm font-bold shadow-xl text-white ${
                event.status === "upcoming"
                  ? "bg-green-500"
                  : event.status === "completed"
                    ? "bg-red-500"
                    : event.status === "done"
                      ? "bg-yellow-500"
                      : "bg-gray-500"
              }`}
            >
              {event.status}
            </div>

            {/* TEXT */}
            <div className="absolute bottom-10 left-10 text-white max-w-3xl">
              <p className="uppercase tracking-[5px] text-sm text-emerald-100 mb-4">
                ECOCLEAN EVENT
              </p>

              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                {event.title}
              </h1>

              <p className="mt-5 text-lg text-emerald-100">
                Join the community and make the world cleaner and greener 🌿
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-10">
            {/* INFO CARDS */}
            <div className="grid md:grid-cols-3 gap-5 mb-12">
              {/* DATE */}
              <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-6 hover:shadow-xl transition duration-300">
                <p className="text-gray-500 text-sm font-medium">Event Date</p>

                <h3 className="font-bold text-xl text-gray-900 mt-3">
                  {event.event_date}
                </h3>
              </div>

              {/* TIME */}
              <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-6 hover:shadow-xl transition duration-300">
                <p className="text-gray-500 text-sm font-medium">Event Time</p>

                <h3 className="font-bold text-xl text-gray-900 mt-3">
                  {event.start_time} - {event.end_time}
                </h3>
              </div>

              {/* LOCATION */}
              <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-6 hover:shadow-xl transition duration-300">
                <p className="text-gray-500 text-sm font-medium">Location</p>

                <h3 className="font-bold text-xl text-gray-900 mt-3 leading-9">
                  {event.location}
                </h3>
              </div>
            </div>

            {/* ABOUT */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About This Event
              </h2>

              <p className="text-lg leading-10 text-gray-600">
                {event.description}
              </p>
            </div>

            {/* HIGHLIGHTS */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Event Highlights
              </h2>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl transition">
                  🌱 Community Plantation
                </div>

                <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl transition">
                  ♻️ Recycling Awareness
                </div>

                <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl transition">
                  🧹 Public Cleanup Activities
                </div>

                <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl transition">
                  🎤 Environmental Talks
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          {/* REGISTER CARD */}
          <div className="bg-white rounded-3xl shadow-2xl border border-emerald-100 p-8 sticky top-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Event Registration
            </h2>

            {!isRegistered ? (
              <button
                onClick={handleJoin}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-4 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                Join Event
              </button>
            ) : (
              <div className="space-y-4">
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 text-center py-4 rounded-2xl font-bold text-lg">
                  ✓ Already Registered
                </div>

                <button
                  onClick={handleLeave}
                  className="w-full border-2 border-red-500 text-red-500 py-4 rounded-2xl font-bold hover:bg-red-50 transition"
                >
                  Leave Event
                </button>
              </div>
            )}

            {/* ORGANIZER */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold mb-5">Organizer</h3>

              <div className="flex items-center gap-4">
                <img
                  src="https://i.pravatar.cc/100"
                  alt="organizer"
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-bold text-lg">EcoClean Team</h4>

                  <p className="text-gray-500">Community Organization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailEvent;
