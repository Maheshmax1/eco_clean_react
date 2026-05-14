import React, { useEffect, useState } from "react";
import { ENDPOINTS } from "../../api/constants";

function UserSection() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchVolunteers = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(ENDPOINTS.ADMIN.VOLUNTEERS, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (res.ok) {
        const data = await res.json();
        setUsers(data);
      }
    } catch (err) {
      console.error("Error fetching volunteers:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVolunteers();
  }, []);

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        Volunteer Applications
      </h2>
      <p className="text-gray-600 mb-8">
        Track and manage all volunteer registrations
      </p>

      <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100 border-b border-gray-300">
            <tr>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">ID</th>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Volunteer ID</th>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Email</th>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Contact</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 transition">
                <td className="py-4 px-6 text-sm text-gray-900 font-medium">{user.id}</td>
                <td className="py-4 px-6 text-sm text-gray-900 font-semibold">
                  {user.full_name || user.name}
                </td>
                <td className="py-4 px-6 text-sm text-gray-700">
                  {user.vol_id || `ECO-VOL-${user.id}`}
                </td>
                <td className="py-4 px-6 text-sm">
                  <span className={`px-3 py-1 rounded-full font-semibold text-xs ${
                    user.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {user.status || (user.role === 'admin' ? 'Admin' : 'Volunteer')}
                  </span>
                </td>
                <td className="py-4 px-6 text-sm text-gray-700">
                  {user.email}
                </td>
                <td className="py-4 px-6 text-sm text-gray-700">
                  {user.phone || user.contact || "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}

export default UserSection;
