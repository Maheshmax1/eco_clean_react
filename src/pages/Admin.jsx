import React, { useContext, useEffect, useState } from "react";
import EventCard from "../components/Admin/EventsCard";
import { 
  Calendar, 
  CheckCircle, 
  LayoutDashboard, 
  Users, 
  MessageSquare, 
  PlusCircle, 
  LogOut,
  ClipboardList,
  ExternalLink
} from "lucide-react";
import UserSection from "../components/Admin/UserSection";
import ContactFormSection from "../components/Admin/ContactFormSection";
import EventRegistrationsSection from "../components/Admin/EventRegistrationsSection";
import EditEvent from "../components/Admin/EditOrAddEvent";
import { EventContext } from "../Context/EventContext";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    if (!token || role !== "admin") {
      navigate("/");
    }
  }, [token, role, navigate]);

  const { events } = useContext(EventContext);
  const safeEvents = Array.isArray(events) ? events : [];

  const upcomingEvents = safeEvents.filter((e) => e.status === "upcoming");
  const completedEvents = safeEvents.filter((e) => e.status === "completed");

  const logout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    navigate("/");
  };

  const navItems = [
    { id: "overview", label: "Dashboard", icon: LayoutDashboard },
    { id: "events", label: "Events", icon: Calendar },
    { id: "volunteers", label: "Volunteers", icon: Users },
    { id: "inquiries", label: "Messages", icon: MessageSquare },
    { id: "registrations", label: "Event Registrations", icon: ClipboardList },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fa] font-sans text-[#333]">
      {/* Header */}
      <header className="bg-gradient-to-br from-[#2e8b57] to-[#3cb371] text-white py-4 sticky top-0 z-50 shadow-md">
        <div className="w-[95%] max-w-[1400px] mx-auto px-4 flex justify-between items-center flex-wrap gap-4">
          <nav className="w-full flex justify-between items-center">
            <h2 className="text-2xl font-bold tracking-wide">🌿 EcoClean Admin</h2>
            <ul className="flex items-center gap-5 list-none m-0 p-0">
              <li>
                <button 
                  onClick={logout}
                  className="font-medium px-4 py-2 text-white rounded-md transition-all hover:bg-white/20 flex items-center gap-2"
                >
                  <LogOut size={18} /> Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Admin Layout */}
      <div className="w-[95%] max-w-[1400px] mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6 min-h-[calc(100vh-70px)]">
        {/* Sidebar */}
        <aside className="bg-white rounded-xl shadow-sm h-fit sticky top-[90px] py-2">
          <ul className="list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-5 py-3.5 border-l-4 transition-all duration-300 text-left ${
                    activeTab === item.id
                      ? "bg-gradient-to-r from-[#e8f5e9] to-transparent text-[#2e8b57] font-semibold border-l-[#ffd700]"
                      : "text-[#555] border-l-transparent hover:bg-[#e8f5e9] hover:text-[#2e8b57] hover:border-l-[#3cb371]"
                  }`}
                >
                  <item.icon size={18} /> {item.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => navigate("/")}
                className="w-full flex items-center gap-3 px-5 py-3.5 text-[#555] border-l-4 border-l-transparent hover:bg-[#e8f5e9] hover:text-[#2e8b57] hover:border-l-[#3cb371] transition-all duration-300 text-left mt-2 border-t border-gray-100"
              >
                <ExternalLink size={18} /> View Website
              </button>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="overflow-hidden pb-8">
          {activeTab === "overview" && (
            <div className="animate-in fade-in duration-500">
              <h1 className="text-[#2e8b57] text-3xl md:text-4xl font-bold mb-2">Admin Dashboard Overview</h1>
              <p className="text-[#666] mb-8 pb-4 border-b-2 border-[#e0e0e0]">
                Welcome back! Manage your EcoClean community efficiently. 🌱
              </p>

              <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-md group border border-gray-100">
                  <h3 className="text-sm text-[#777] font-semibold mb-2">Upcoming Events</h3>
                  <p className="text-4xl font-bold text-[#2e8b57] my-3">{upcomingEvents.length}</p>
                  <span className="flex items-center gap-1 text-sm font-semibold text-[#3cb371]">
                    Active Registrations
                  </span>
                  <Calendar className="absolute right-4 top-4 text-6xl opacity-10 text-[#2e8b57] group-hover:scale-110 transition-transform" />
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-md group border border-gray-100">
                  <h3 className="text-sm text-[#777] font-semibold mb-2">Completed Events</h3>
                  <p className="text-4xl font-bold text-[#2e8b57] my-3">{completedEvents.length}</p>
                  <span className="flex items-center gap-1 text-sm font-semibold text-[#3cb371]">
                    Successfully Finished
                  </span>
                  <CheckCircle className="absolute right-4 top-4 text-6xl opacity-10 text-[#2e8b57] group-hover:scale-110 transition-transform" />
                </div>
              </section>
            </div>
          )}

          {activeTab === "events" && (
            <div className="animate-in fade-in duration-500">
              <div className="flex justify-between items-center border-b-4 border-[#4ba14f] pb-2 mb-6">
                <h2 className="text-[#2e8b57] text-2xl md:text-3xl font-bold inline-block m-0 border-none pb-0">
                  Manage Events
                </h2>
                <button 
                  onClick={() => setActiveTab("add-event")}
                  className="bg-gradient-to-br from-[#3cb371] to-[#2e8b57] text-white px-5 py-2.5 rounded-md font-semibold text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2"
                >
                  <PlusCircle size={16} /> Add New Event
                </button>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {safeEvents.map((event) => (
                    <EventCard key={event.id} {...event} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "volunteers" && (
            <div className="animate-in fade-in duration-500">
              <h2 className="text-[#2e8b57] text-2xl md:text-3xl font-bold mt-2 mb-5 pb-2.5 border-b-4 border-[#4ba14f] inline-block">
                Volunteer Applications
              </h2>
              <UserSection />
            </div>
          )}

          {activeTab === "inquiries" && (
            <div className="animate-in fade-in duration-500">
              <h2 className="text-[#2e8b57] text-2xl md:text-3xl font-bold mt-2 mb-5 pb-2.5 border-b-4 border-[#4ba14f] inline-block">
                Contact Form Messages
              </h2>
              <ContactFormSection />
            </div>
          )}

          {activeTab === "registrations" && (
            <div className="animate-in fade-in duration-500">
              <h2 className="text-[#2e8b57] text-2xl md:text-3xl font-bold mt-2 mb-5 pb-2.5 border-b-4 border-[#4ba14f] inline-block">
                Event Registrations
              </h2>
              <EventRegistrationsSection />
            </div>
          )}

          {activeTab === "add-event" && (
            <div className="animate-in fade-in duration-500">
              <div className="flex justify-between items-center border-b-4 border-[#4ba14f] pb-2 mb-6">
                <h2 className="text-[#2e8b57] text-2xl md:text-3xl font-bold inline-block m-0 border-none pb-0">
                  Create Event
                </h2>
                <button 
                  onClick={() => setActiveTab("events")}
                  className="bg-gray-200 text-gray-700 px-5 py-2.5 rounded-md font-semibold text-sm hover:bg-gray-300 transition-all flex items-center gap-2"
                >
                  Cancel
                </button>
              </div>
              <EditEvent />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Admin;