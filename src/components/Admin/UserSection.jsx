import React from "react";

function UserSection() {
  const users = [
    {
      id: 1,
      name: "Mahesh",
      vol_id: 1001,
      status: "Active",
      email: "mahesh@gmail.com",
      contact: 9176223344,
    },
    {
      id: 2,
      name: "Hari",
      vol_id: 1002,
      status: "Inactive",
      email: "hari@gmail.com",
      contact: 9876543210,
    },
    {
      id: 3,
      name: "kamalesh",
      vol_id: 1003,
      status: "Active",
      email: "kamalesh@gmail.com",
      contact: 9123456789,
    },
    {
      id: 4,
      name: "venkatesh",
      vol_id: 1004,
      status: "Inactive",
      email: "venkatesh@gmail.com",
      contact: 9988776655,
    },
    {
      id: 5,
      name: "balaji",
      vol_id: 1005,
      status: "Active",
      email: "balaji@gmail.com",
      contact: 9876543210,
    },
  ];

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
                  {user.name}
                </td>
                <td className="py-4 px-6 text-sm text-gray-700">
                  {user.vol_id}
                </td>
                <td className="py-4 px-6 text-sm">
                  <span className={`px-3 py-1 rounded-full font-semibold text-xs ${
                    user.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-sm text-gray-700">
                  {user.email}
                </td>
                <td className="py-4 px-6 text-sm text-gray-700">
                  {user.contact}
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
