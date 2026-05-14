import React from "react";

function EventTable({ event }) {
  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
      {/* Title */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 px-6 py-4">
        <h2 className="text-lg font-bold text-white">
          {event.title}
        </h2>
        <p className="text-emerald-100 text-sm mt-1">{(event.registrations || event.volunteers || []).length} volunteer(s) registered</p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100 border-b border-gray-300">
            <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Volunteer Name</th>
            <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Email</th>
            <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Phone</th>
            <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Joined Date</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {(event.registrations || event.volunteers || []).map((reg, index) => (
            <tr key={index} className="hover:bg-gray-50 transition">
              <td className="py-4 px-6 text-sm font-semibold text-gray-900">{reg.user?.full_name || reg.name || "Unknown"}</td>
              <td className="py-4 px-6 text-sm text-gray-700">{reg.user?.email || reg.email}</td>
              <td className="py-4 px-6 text-sm text-gray-700">{reg.user?.phone || reg.phone || "N/A"}</td>
              <td className="py-4 px-6 text-sm text-gray-700">{reg.registration_date ? new Date(reg.registration_date).toLocaleDateString() : (reg.date || "N/A")}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default EventTable;
