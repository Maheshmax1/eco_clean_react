import React from "react";
import ProfileHeader from "../components/admin/ProfileHeader";
import EventsGrid from "../components/admin/EventsGrid";

function Profile() {
  const user = {
    name: "hari haran",
    id: "ECO-VOL-3",
    email: "hari@gmail.com",
  };

  const events = [
    {
      image: "/images/event1.jpg",
      title: "Chennai Beach Cleanup Drive 2026",
      location: "Marina Beach, Chennai",
      date: "2026-04-26",
    },
    {
      image: "/images/event2.jpg",
      title: "Save Our River – Cleanup",
      location: "Adyar River Bank, Chennai",
      date: "2026-05-11",
    },
    {
      image: "/images/event3.jpg",
      title: "Green Earth Community Cleanup",
      location: "Besant Nagar Beach, Chennai",
      date: "2026-04-05",
    },
  ];

  return (
    <div>
      <ProfileHeader user={user} />
      <EventsGrid events={events} />
    </div>
  );
}

export default Profile;

