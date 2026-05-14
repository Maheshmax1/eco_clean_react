import React, { useEffect, useState } from 'react';
import EventTable from './EventTable';
import { ENDPOINTS } from '../../api/constants';

function EventRegistrationsSection() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRegistrations = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await fetch(ENDPOINTS.ADMIN.EVENT_REGISTRATIONS, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
                if (res.ok) {
                    const data = await res.json();
                    setEvents(data);
                }
            } catch (err) {
                console.error("Error fetching registrations:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchRegistrations();
    }, []);
   return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        Event Registrations
      </h2>
      <p className="text-gray-600 mb-8">
        View all volunteers registered for each event
      </p>

      <div className="space-y-6">
      {events.map((event, index) => (
        <EventTable key={index} event={event} />
      ))}
      </div>
    </div>
  );
}

export default EventRegistrationsSection
