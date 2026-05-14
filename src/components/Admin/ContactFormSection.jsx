import React, { useEffect, useState } from "react";
import ContactFormCard from "./ContactFormCard";
import { ENDPOINTS } from "../../api/constants";

function ContactFormSection() {
  const [message, setMessage] = useState([]);

  const fetchMessage = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(ENDPOINTS.ADMIN.MESSAGES, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch message");
      }

      const data = await res.json();

      console.log("contact message DATA:", data);

      setMessage(data.messages || data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteMessage = async (id) => {
    if (!window.confirm("Are you sure you want to mark this as solved?")) return;
    
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(ENDPOINTS.ADMIN.DELETE_MESSAGE(id), {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (res.ok) {
        setMessage(message.filter(msg => msg.id !== id));
      }
    } catch (err) {
      console.error("Error deleting message:", err);
    }
  };

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <div className="py-8">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Contact Requests
        </h2>
        <p className="text-gray-600">
          Manage and respond to user inquiries and support requests
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {message.map((form) => (
          <ContactFormCard
            key={form.id}
            id={form.id}
            name={form.name}
            email={form.email}
            message={form.message}
            onDelete={handleDeleteMessage}
          />
        ))}
      </div>
    </div>
  );
}

export default ContactFormSection;
