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
    <div>
      <p className="text-center text-green-500 font-bold ">
        Volunteer Application
      </p>

      <div className="border border-emerald-100 rounded-lg p-6 bg-emerald-50 shadow-md w-[90%] mx-auto mt-12">
        <table className="min-w-full">
          <thead className="bg-emerald-100">
            <tr className="border-b text-center">
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4 ">Name</th>
              <th className="py-2 px-4">Volunteer ID</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Contact</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="py-2 px-4 text-center border-b-1">{user.id}</td>
                <td className="py-2 px-4 text-center border-b-1">
                  {user.name}
                </td>
                <td className="py-2 px-4 text-center border-b-1">
                  {user.vol_id}
                </td>
                <td className="py-2 px-4 text-center border-b-1">
                  {user.status}
                </td>
                <td className="py-2 px-4 text-center border-b-1">
                  {user.email}
                </td>
                <td className="py-2 px-4 text-center border-b-1">
                  {user.contact}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserSection;
