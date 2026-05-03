import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { EventContext } from '../Context/EventContext';


function DetailEvent() {
  const { id } = useParams();

  const {events} = useContext(EventContext)
  const event = events.find((e)=>e.id ===parseInt(id))

  // local state to simulate joining an event
  const [isRegistered, setIsRegistered] = useState(false);

  if (!event) {
    return (
      <div className="flex justify-center items-center h-screen bg-emerald-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Event Not Found</h2>
          <Link to="/events" className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-500 transition-colors">
            Go Back
          </Link>
        </div>
      </div>
    );
  }

  const handleJoin = () => {
    setIsRegistered(true);
  };

  const handleLeave = () => {
    setIsRegistered(false);
  };

  return (
    <div className="bg-emerald-50 min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden mt-6">
        
        {/* Header Image */}
        <div className="relative">
          <img src={event.image} alt={event.title} className="w-full h-80 object-cover" />
          <div className="absolute top-4 left-4 bg-emerald-700 text-white px-4 py-1 rounded-full text-sm font-semibold shadow">
            {event.tag}
          </div>
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-emerald-900 px-4 py-2 rounded-lg font-medium flex items-center shadow-md">
            📍 Location: Pending Coordinates
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          
          {/* Title & Status */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h1 className="text-3xl md:text-5xl font-extrabold text-emerald-900 leading-tight">
              {event.title}
            </h1>
            <span className={`px-5 py-2 rounded-full text-sm font-bold shadow-sm whitespace-nowrap ${event.status === 'completed' ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' : 'bg-amber-100 text-amber-800 border border-amber-200'}`}>
              {event.status === 'upcoming' ? '• Upcoming' : '✓ Completed'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-slate-700">
            <div className="flex items-center p-5 bg-emerald-50 rounded-2xl border border-emerald-100 transition-transform hover:-translate-y-1">
              <span className="text-3xl mr-4 drop-shadow-sm">📅</span>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Date</p>
                <p className="font-semibold text-lg text-emerald-950">{event.date}</p>
              </div>
            </div>
            <div className="flex items-center p-5 bg-emerald-50 rounded-2xl border border-emerald-100 transition-transform hover:-translate-y-1">
              <span className="text-3xl mr-4 drop-shadow-sm">⏰</span>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Time</p>
                <p className="font-semibold text-lg text-emerald-950">{event.time}</p>
              </div>
            </div>
          </div>

          <div className="mb-10 bg-white border border-slate-100 p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-emerald-800 mb-4 pb-2 border-b-2 border-emerald-50">
              About This Event
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              {event.desc}
            </p>
          </div>

          {/* Action Buttons */}
          {event.status === 'upcoming' ? (
            <div className="mt-8 pt-8 border-t-2 border-slate-50 flex flex-col sm:flex-row items-center gap-4">
              {!isRegistered ? (
                <button 
                  onClick={handleJoin}
                  className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-emerald-500 hover:to-teal-400 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Click to Join Event
                </button>
              ) : (
                <>
                  <div className="w-full sm:w-auto bg-emerald-50 text-emerald-700 px-8 py-3 rounded-full font-bold text-lg flex items-center justify-center cursor-default border-2 border-emerald-200">
                    <span className="mr-2 text-xl font-black">✓</span> Already Registered
                  </div>
                  <button 
                    onClick={handleLeave}
                    className="w-full sm:w-auto bg-transparent text-red-500 border-2 border-red-500 px-8 py-3 rounded-full font-bold hover:bg-red-50 hover:text-red-600 transition-colors"
                  >
                    Leave Event
                  </button>
                </>
              )}
            </div>
          ) : (
            <div className="mt-8 pt-8 border-t-2 border-slate-50">
              <div className="inline-block bg-slate-100 text-slate-500 px-8 py-3 rounded-full font-bold border border-slate-200">
                This Event Has Concluded
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default DetailEvent;
