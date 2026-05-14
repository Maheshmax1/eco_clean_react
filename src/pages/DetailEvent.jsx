import React, { useContext, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { EventContext } from "../Context/EventContext";
import { ENDPOINTS } from "../api/constants";

function DetailEvent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { events } = useContext(EventContext);
  const safeEvents = Array.isArray(events) ? events : [];

  // Find Event
  const event = safeEvents.find((e) => e.id === parseInt(id));

  // Registration State
  const [isRegistered, setIsRegistered] = useState(false);
  const [participants, setParticipants] = useState([]);
  const [fetchLoading, setFetchLoading] = useState(false);

  const token = localStorage.getItem("token");
  const [userEmail, setUserEmail] = useState(localStorage.getItem("user_email"));

  const fetchParticipants = async (email) => {
    try {
      // Use detail endpoint which includes registrations
      const res = await fetch(ENDPOINTS.EVENTS.DETAIL(id));
      if (res.ok) {
        const data = await res.json();
        // The README says EventWithRegistrations contains a 'registrations' array
        const regs = data.registrations || [];
        setParticipants(regs);
        
        // Check if current user is in participants
        const currentEmail = email || userEmail;
        if (currentEmail) {
          const isUserRegistered = regs.some(p => (
            p.email === currentEmail || 
            p.user_email === currentEmail || 
            (p.user && p.user.email === currentEmail)
          ));
          setIsRegistered(isUserRegistered);
        }
      }
    } catch (err) {
      console.error("Error fetching participants:", err);
    }
  };

  useEffect(() => {
    const init = async () => {
      let currentEmail = userEmail;
      
      if (token && !currentEmail) {
        try {
          const res = await fetch(ENDPOINTS.USERS.ME, {
            headers: { Authorization: `Bearer ${token}` }
          });
          if (res.ok) {
            const userData = await res.json();
            localStorage.setItem("user_email", userData.email);
            localStorage.setItem("user_name", userData.full_name);
            currentEmail = userData.email;
            setUserEmail(currentEmail);
          }
        } catch (err) {
          console.error("Error fetching user data:", err);
        }
      }
      fetchParticipants(currentEmail);
    };
    init();
  }, [id, token]);

  // Event Not Found
  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f4f6f9]">
        <div className="bg-white p-10 rounded-xl shadow-lg text-center">
          <h2 className="text-3xl font-bold text-red-500 mb-4">
            Event Not Found
          </h2>

          <button
            onClick={() => navigate(-1)}
            className="inline-block mt-4 bg-[#328457] hover:bg-[#0c8a45] text-white px-8 py-3 rounded-md font-semibold transition-colors cursor-pointer"
          >
            ← Go Back
          </button>
        </div>
      </div>
    );
  }

  // Join Event
  const handleJoin = async () => {
    if (!token) {
      alert("Please login to join the event");
      return;
    }

    if (event.status === "completed") {
      alert("This event has already been completed.");
      return;
    }

    setFetchLoading(true);
    try {
      const res = await fetch(ENDPOINTS.EVENTS.JOIN(id), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });

      if (res.ok) {
        alert("Successfully joined the event! 🎉");
        await fetchParticipants();
        setIsRegistered(true);
      } else {
        const errorData = await res.json();
        alert(errorData.detail || "Failed to join event");
      }
    } catch (err) {
      console.error("Join error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setFetchLoading(false);
    }
  };

  // Leave Event
  const handleLeave = async () => {
    if (!token) return;

    setFetchLoading(true);
    try {
      const res = await fetch(ENDPOINTS.EVENTS.LEAVE(id), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });

      if (res.ok) {
        alert("You have left the event.");
        await fetchParticipants();
        setIsRegistered(false);
      } else {
        alert("Failed to leave event");
      }
    } catch (err) {
      console.error("Leave error:", err);
    } finally {
      setFetchLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f6f9] text-[#333] font-sans pb-10">
      {/* Event Section */}
      <section className="max-w-[1000px] mx-auto pt-10 px-5">
        <button 
          onClick={() => navigate(-1)} 
          className="mb-4 inline-flex items-center gap-2 text-[#2e8b57] hover:text-[#0c8a45] font-bold text-lg transition-colors cursor-pointer"
        >
          ← Back
        </button>
        <div className="bg-white rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.08)] grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          
          {/* Event Image */}
          <div id="event-header-image">
            <img 
              src={event.image_url || "https://via.placeholder.com/800x600"} 
              alt={event.title} 
              className="w-full rounded-lg object-cover" 
            />
            <p className="mt-2.5 font-bold text-[#4f46e5] text-lg flex items-start gap-1">
              <span>📍 Location:</span> 
              {event.location && event.location.startsWith("http") ? (
                <a href={event.location} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#3730a3] break-all ml-1">
                  View on Map
                </a>
              ) : (
                <a href={`https://maps.google.com/?q=${encodeURIComponent(event.location)}`} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#3730a3] ml-1">
                  {event.location}
                </a>
              )}
            </p>
            
            <div className="mt-4 flex gap-2">
              <span className={`px-4 py-1.5 rounded-md text-sm font-bold text-white shadow-sm ${
                event.status === "upcoming" ? "bg-[#328457]" : 
                event.status === "completed" ? "bg-red-500" : 
                event.status === "done" ? "bg-yellow-500" : "bg-gray-500"
              }`}>
                {event.status.toUpperCase()}
              </span>
            </div>
          </div>

          {/* Event Details */}
          <div className="flex flex-col">
            <h2 className="mt-0 text-[1.8rem] text-[#2e8b57] font-bold mb-4">{event.title}</h2>

            <p className="font-bold text-[#333] my-1 text-lg">
              Date: <span className="font-normal text-gray-700">{event.event_date}</span>
            </p>
            <p className="font-bold text-[#333] my-1 text-lg">
              Time: <span className="font-normal text-gray-700">{event.start_time} - {event.end_time}</span>
            </p>

            <div className="leading-[1.7] my-4 text-gray-700 text-base flex-grow">
              <p>{event.description}</p>
            </div>

            <div className="mt-6 mb-6">
              <h3 className="text-[#2e8b57] text-xl mb-3 border-b border-[#ddd] pb-2 font-bold">
                👥 Joined Volunteers
              </h3>
              
              {participants.length > 0 ? (
                <ul className="list-none p-0 flex flex-wrap gap-2.5">
                  {participants.map((p, index) => {
                    const isMe = p.email === userEmail || p.user_email === userEmail;
                    return (
                      <li key={index} className={`px-4 py-1.5 rounded-full text-sm font-medium border ${
                        isMe ? "bg-[#e8f5e9] text-[#2e8b57] border-[#3cb371]" : "bg-gray-100 text-gray-700 border-gray-200"
                      }`}>
                        {isMe ? "You" : (p.full_name || p.name || "?")}
                      </li>
                    )
                  })}
                </ul>
              ) : (
                <p className="text-gray-500 italic text-sm">No volunteers have joined yet. Be the first!</p>
              )}
            </div>

            <div className="mt-auto">
              {event.status === "completed" ? (
                <div className="inline-block px-6 py-3 bg-gray-200 text-gray-600 rounded-md text-base font-bold text-center w-full sm:w-auto">
                  ⚠️ Event Completed
                </div>
              ) : !isRegistered ? (
                <button 
                  onClick={handleJoin}
                  disabled={fetchLoading}
                  className="inline-block px-6 py-3 bg-[#328457] text-white rounded-md text-base font-bold hover:bg-[#0c8a45] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md w-full sm:w-auto text-center cursor-pointer border-none"
                >
                  {fetchLoading ? "Processing..." : "Click to Join Event"}
                </button>
              ) : (
                <div className="flex flex-col sm:flex-row gap-3 items-center">
                  <div className="px-5 py-3 bg-[#e8f5e9] text-[#2e8b57] border border-[#3cb371] rounded-md font-bold text-center flex-grow sm:flex-grow-0">
                    Joined
                  </div>
                  <button 
                    onClick={handleLeave}
                    disabled={fetchLoading}
                    className="px-5 py-3 border-2 border-red-500 text-red-500 bg-transparent rounded-md text-base font-bold hover:bg-red-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto text-center cursor-pointer"
                  >
                    {fetchLoading ? "Processing..." : "Leave Event"}
                  </button>
                </div>
              )}
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default DetailEvent;
