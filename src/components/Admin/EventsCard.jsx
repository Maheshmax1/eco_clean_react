import React from "react";

function EventCard({ image, title, location, date }) {
  return (
    <div className="bg-emerald-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition border border-emerald-100">
      {/* Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-emerald-800 mb-2">{title}</h3>

        <p className="text-slate-600 text-sm">{location}</p>
        <p className="text-slate-500 text-sm mt-1">{date}</p>
        <div className="flex gap-3 mt-4">
          <button className="px-3 py-1.5 text-sm font-medium bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition duration-200 shadow-sm hover:shadow-md">Edit</button>
          <button className="px-3 py-1.5 text-sm font-medium bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 shadow-sm hover:shadow-md ">Done</button>
          <button className="px-3 py-1.5 text-sm font-medium bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 shadow-sm hover:shadow-md">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;


