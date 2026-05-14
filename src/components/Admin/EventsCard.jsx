import React from "react";
import { useNavigate } from "react-router-dom";
import { ENDPOINTS } from "../../api/constants";

function EventCard({ image_url, title, location, date, status, id }) {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  // DELETE EVENT
  const DeleteEvent = async (id) => {
    try {
      const res = await fetch(ENDPOINTS.EVENTS.DELETE(id), {
        method: "DELETE",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      console.log(data);

      if (!res.ok) {
        alert(data.detail || "Failed to delete");
        return;
      }

      alert("Event Deleted Successfully");

      window.location.reload();
    } catch (error) {
      console.log(error);

      alert("Delete failed");
    }
  };

  // MARK DONE
  const DoneEvent = async (id) => {
    try {
      const res = await fetch(ENDPOINTS.EVENTS.UPDATE(id), {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify({
          status: "done",
        }),
      });

      const data = await res.json();

      console.log(data);

      if (!res.ok) {
        alert(data.detail || "Failed");
        return;
      }

      alert("Event marked as Done");

      window.location.reload();
    } catch (error) {
      console.log(error);

      alert("Something went wrong");
    }
  };

  // EDIT EVENT
  const EditEvent = () => {
    navigate(`/edit-events/${id}`);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group border border-gray-200">
      {/* Image */}
      <div className="relative overflow-hidden h-48 bg-gray-200">
        <img
          src={image_url}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />

        <div
          className={`p-2 absolute top-2 left-2 rounded-full text-xs font-semibold text-white ${
            status === "upcoming"
              ? "bg-green-500"
              : status === "completed"
                ? "bg-red-500"
                : status === "done"
                  ? "bg-yellow-500"
                  : "bg-gray-500"
          }`}
        >
          {status}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>

        <div className="text-gray-600 text-sm mb-2">📍 {location}</div>

        <div className="text-gray-600 text-sm mb-4">📅 {date}</div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            className="flex-1 px-3 py-2 text-sm font-semibold bg-amber-500 text-white rounded-lg hover:bg-amber-600"
            onClick={EditEvent}
          >
            Edit
          </button>

          <button
            className="flex-1 px-3 py-2 text-sm font-semibold bg-green-500 text-white rounded-lg hover:bg-green-600"
            onClick={() => DoneEvent(id)}
          >
            Mark Done
          </button>

          <button
            className="flex-1 px-3 py-2 text-sm font-semibold bg-red-500 text-white rounded-lg hover:bg-red-600"
            onClick={() => DeleteEvent(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
