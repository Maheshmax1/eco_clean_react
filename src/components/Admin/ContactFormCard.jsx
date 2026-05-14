import React from "react";

function ContactFormCard({ id, name, email, message, onDelete }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 w-full border-l-4 border-emerald-500">
      
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="bg-emerald-100 text-emerald-700 w-12 h-12 flex items-center justify-center rounded-lg font-bold text-lg flex-shrink-0">
          {name?.charAt(0).toUpperCase() || "?"}
        </div>
        <div className="flex-1">
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500 truncate">{email}</p>
        </div>
      </div>

      {/* Message */}
      <p className="text-gray-700 text-sm leading-relaxed line-clamp-3 mb-4">
        {message}
      </p>

      {/* Action */}
      <div className="flex justify-end gap-2">
        <button 
          onClick={() => onDelete(id)}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition duration-200 shadow-md hover:shadow-lg"
        >
          Mark as Solved
        </button>
      </div>
    </div>
  );
}

export default ContactFormCard;