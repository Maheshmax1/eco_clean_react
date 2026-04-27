import React from "react";
import RegisteredEventCard from "./RegisteredEventsCard";

function RegisteredEvents() {
  const events = [
    {
      id: 1,
      image: "https://www.voltechgroup.com/assets/image/csr/environment/beachclean/2.jpg",
      title: "Chennai Beach Cleanup Drive 2026",
      location: "Marina Beach, Chennai",
      date: "2026-04-26",
    },
    {
      id: 2,
      image: "https://media.istockphoto.com/id/136591951/photo/people-picking-up-garbage-in-park.jpg?s=612x612&w=0&k=20&c=qEi1xwB7Caq2voFhpuz4c0euXtNjn1JMjTCZk_Su_P4=",
      title: "Save Our River - Cleanup",
      location: "Adyar River Bank, Chennai",
      date: "2026-05-11",
    },
    {
      id: 3,
      image: "https://thumbs.dreamstime.com/b/child-picking-plastic-trash-cleaning-nature-kid-clean-up-garbage-outdoor-ecology-concept-environment-day-save-earth-425659315.jpg",
      title: "Green Earth Community Cleanup",
      location: "Besant Nagar Beach, Chennai",
      date: "2026-04-05",
    },
    {
      id: 4,
      image: "https://assets.theoceancleanup.com/scaled/900x506/app/uploads/2024/11/Medium-231122-Jamaica-Gunboat-Beach-Mangroves-S5-DvdK-11-1.jpg",
      title: "Community Lake Cleanup & Awareness",
      location: "Velachery Lake, Chennai",
      date: "2026-04-11",
    },
  ];

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
            {events.map((event) => (
              <RegisteredEventCard key={event.id} {...event} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisteredEvents;

