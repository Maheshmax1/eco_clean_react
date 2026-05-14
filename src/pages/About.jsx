import React from "react";
import AboutCards from "../components/About/AboutCards";
import ValuesCard from "../components/About/ValuesCard";
import AboutTips from "../components/About/AboutTips";
import AboutImpactSection from "../components/About/AboutImpactSection";
import WorldSection from "../components/About/WorlsSection";

function About() {
  const values = [
    {
      title: "Positivity",
      desc: "We believe in optimism as the seed for change. By fostering a hopeful outlook, we motivate others to act responsibly for a better planet.",
    },
    {
      title: "Inclusivity",
      desc: "Everyone has a role to play in restoring Earth. We unite people from all backgrounds, cultures, and nations under one green mission.",
    },
    {
      title: "Responsibility",
      desc: "True change starts with accountability. We encourage individuals and organizations alike to lead by example.",
    },
    {
      title: "Transparency",
      desc: "We believe in honesty, openness, and trust. Our work is guided by clear communication.",
    },
  ];
  const weekData = [
    { id:1,title: "Growth", value: "Increased by 50%", highlight: true },
    { id:2,title: "20,000 kg", value: "Waste Diverted from Landfills" },
    { id:3,title: "5,000+", value: "Active Volunteers" },
    { id:4,title: "150+", value: "Cleanup Events Organized" },
  ];

  const monthData = [
    { id:1,title: "Growth", value: "Increased by 40%", highlight: true },
    { id:2,title: "85,000 kg", value: "Waste Diverted from Landfills" },
    { id:3,title: "12,000+", value: "Active Volunteers" },
    { id:4,title: "420+", value: "Cleanup Events Organized" },
  ];

  const yearData = [
    { id:1,title: "Growth", value: "Increased by 90%", highlight: true },
    { id:2,title: "500,000 kg", value: "Waste Diverted from Landfills" },
    { id:3,title: "50,000+", value: "Active Volunteers" },
    { id:4,title: "2,500+", value: "Cleanup Events Organized" },
  ];

  return (
    <div className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 min-h-screen pb-20">
      <WorldSection/>
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 pt-20 mb-24 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl -z-10"></div>

        <div className="text-center mb-16">
          <p className="text-emerald-600 font-black text-xs uppercase tracking-[0.4em] mb-4">Our Legacy</p>
          <h2 className="text-5xl md:text-8xl font-black text-emerald-950 mb-8 tracking-tighter leading-none">
            Driving <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Real Change</span>
          </h2>

          <div className="bg-white/40 backdrop-blur-xl p-8 md:p-14 rounded-[3rem] text-slate-600 text-xl md:text-2xl font-medium leading-relaxed shadow-2xl shadow-emerald-900/5 border border-white max-w-5xl mx-auto">
            "At EcoClean, we don't just dream of a cleaner world; we build it. Through relentless action and community-driven initiatives, we are restoring the balance of nature, one mission at a time."
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-6xl mx-auto mb-16">
        <AboutCards
          title="🌱 Mission"
          para1="Our mission is to empower individuals, communities, and governments to build sustainable waste management systems through education, collaboration, and action."
          para2="We collaborate globally with organizations, volunteers, and eco-activists to implement impactful programs."
        />
      </div>

      {/* Core Values */}
      <div className="max-w-6xl mx-auto mb-10">
        <h2 className="text-3xl font-bold text-green-700 mb-8">
          🌿 Core Values
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <ValuesCard key={index} title={item.title} desc={item.desc} />
          ))}
        </div>
      </div>

      <AboutTips />
      {/* Impact Roadmap */}
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl font-black text-emerald-950 tracking-tight">Impact Roadmap</h2>
          <div className="flex-1 h-[2px] bg-emerald-100"></div>
        </div>

        <AboutImpactSection
          title="Weekly Milestones"
          data={weekData}
          bgColor="bg-transparent"
        />

        <AboutImpactSection
          title="Monthly Achievements"
          data={monthData}
          bgColor="bg-emerald-600/5 rounded-[3rem] border border-emerald-100"
        />

        <AboutImpactSection
          title="Annual Legacy"
          data={yearData}
          bgColor="bg-transparent"
        />
      </div>
    </div>
  );
}

export default About;
