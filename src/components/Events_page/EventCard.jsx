import React from "react";
import { useNavigate } from "react-router-dom";

function EventCard({ id, image, tag, title, desc, date, time, status }) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/events/${id}`);
  };

  return (
    <div className="bg-emerald-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-[1.02] transition duration-300">
      
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover"
      />

      {/* Content */}
      <div className="p-6">
        
        {/* Tag + Status */}
        <div className="flex justify-between items-center mb-3">
          <span className="bg-emerald-700 text-white text-xs px-3 py-1 rounded-full">
            {tag}
          </span>

          <span
            className={`text-xs px-3 py-1 rounded-full ${
              status === "completed"
                ? "bg-emerald-800 text-white"
                : "bg-emerald-200 text-slate-900"
            }`}
          >
            {status}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-emerald-800 mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-sm mb-4">
          {desc}
        </p>

        <hr className="my-3 border-emerald-100" />

        {/* Date & Time */}
        <p className="text-sm text-slate-500">{date}</p>
        <p className="text-sm text-slate-500 mb-4">{time}</p>

        {/* Button only for upcoming */}
        {status === "upcoming" && (
          <button className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm hover:bg-emerald-500"
          onClick={handleClick}
          >
            Know More
          </button>
        )}
      </div>
    </div>
  );
}

export default EventCard;