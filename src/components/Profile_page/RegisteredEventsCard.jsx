import React from "react";

function RegisteredEventCard({ image, title, location, date }) {
  return (
    <div className="group overflow-hidden rounded-[28px] border border-emerald-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-52 object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute top-4 right-4 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-white shadow-lg shadow-slate-900/20">
          Registered
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
        <p className="text-sm text-slate-500">{location}</p>
        <p className="mt-2 text-sm text-slate-400">{date}</p>
        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-emerald-700">
            Confirmed
          </span>
          <button className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500">
            View
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisteredEventCard;