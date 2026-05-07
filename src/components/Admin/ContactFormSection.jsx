import React from "react";
import ContactFormCard from "./ContactFormCard";

function ContactFormSection() {
  const contactForms = [
    {
      name: "Mahesh",
      email: "mahesh@gmail.com",
      message:
        "I am interested in volunteering for beach cleanup. Please provide more details about the event and how I can participate.",
    },
    {
      name: "Hari",
      email: "hari@gmail.com",
      message:
        "I am interested in volunteering for beach cleanup. Please provide more details about the event and how I can participate.",
    },
    {
      name: "Kamalesh",
      email: "kamalesh@gmail.com",
      message:
        "I am interested in volunteering for beach cleanup. Please provide more details about the event and how I can participate.",
    },
  ];

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
        {contactForms.map((form, index) => (
          <ContactFormCard
            key={index}
            name={form.name}
            email={form.email}
            message={form.message}
          />
        ))}
      </div>
    </div>
  );
}

export default ContactFormSection;