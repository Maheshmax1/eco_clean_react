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
      name: "kamalesh",
      email: "kamalesh@gmail.com",
      message:
        "I am interested in volunteering for beach cleanup. Please provide more details about the event and how I can participate.",
    },
  ];
  return (
    <div className="border-2">
        <p className="text-center border-b-green-400 mt-2">Contact Form Section</p>
    <div className="flex p-6  gap-5">
      
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
