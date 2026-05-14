import React from "react";
import { useNavigate } from "react-router-dom";

function EventCard({
  id,
  image_url,
  tag,
  title,
  desc,
  date,
  time,
  status,
  is_registered,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/events/${id}`);
  };

  return (
    <div className="bg-emerald-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-[1.02] transition duration-300">
      <div className="relative overflow-hidden">
        <img
          src={image_url}
          alt={title}
          className="w-full h-52 object-cover transition duration-500 hover:scale-110"
        />
        {is_registered && (
          <div className="absolute top-4 right-4 bg-green-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1 animate-pulse">
            ✨ JOINED
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Status */}
        <div className="flex justify-between items-center mb-3">
          <span
            className={`text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wider ${
              status === "completed"
                ? "bg-slate-800 text-white"
                : "bg-emerald-100 text-emerald-800 border border-emerald-200"
            }`}
          >
            {status}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-emerald-800 mb-2">{title}</h3>

        {/* Description */}
        <p className="text-slate-600 text-sm mb-4">{desc}</p>

        <hr className="my-3 border-emerald-100" />

        {/* Date & Time */}
        <p className="text-sm text-slate-500">{date}</p>
        <p className="text-sm text-slate-500 mb-4">{time}</p>

        {/* Buttons */}
        <div className="mt-4 flex items-center justify-between">
          <button
            className="bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-emerald-700 transition shadow-md"
            onClick={handleClick}
          >
            Know More
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
