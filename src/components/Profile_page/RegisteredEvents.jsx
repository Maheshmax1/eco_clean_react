import React, { useEffect, useState } from "react";
import RegisteredEventCard from "./RegisteredEventsCard";
import { ENDPOINTS } from "../../api/constants";

function RegisteredEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyEvents = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const res = await fetch(ENDPOINTS.USERS.MY_EVENTS, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        if (res.ok) {
          const data = await res.json();
          // README says RegistrationResponse contains 'event'
          setEvents(data);
        }
      } catch (err) {
        console.error("Error fetching registered events:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMyEvents();
  }, []);

  return (
    <section className="bg-slate-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-[32px] border border-emerald-100 bg-white p-8 shadow-md shadow-emerald-100/40">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-700 font-semibold">
                My Events
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Registered Cleanup Activities
              </h2>
            </div>
            <div className="rounded-3xl bg-emerald-50 px-4 py-3 text-sm text-slate-700">
              Total registered: <span className="font-semibold text-slate-900">{events.length}</span>
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {events.map((reg) => (
              <RegisteredEventCard 
                key={reg.id} 
                id={reg.event.id}
                image={reg.event.image_url}
                title={reg.event.title}
                location={reg.event.location}
                date={reg.event.event_date}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisteredEvents;

