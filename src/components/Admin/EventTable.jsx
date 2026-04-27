import React from "react";

function EventTable({ event }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 mb-6">
      {/* Title */}
      <h2 className="text-lg font-semibold text-emerald-700 mb-4">
        {event.title} ({event.volunteers.length} Joined)
      </h2>

      {/* Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white">
            <th className="p-3 text-left">Volunteer Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Phone</th>
            <th className="p-3 text-left">Joined Date</th>
          </tr>
        </thead>

        <tbody>
          {event.volunteers.map((volunteer, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="p-3">{volunteer.name}</td>
              <td className="p-3">{volunteer.email}</td>
              <td className="p-3">{volunteer.phone}</td>
              <td className="p-3">{volunteer.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EventTable;
