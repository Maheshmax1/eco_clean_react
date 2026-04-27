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
    <div className="bg-emerald-50 py-1 px-1">
      <WorldSection/>
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-emerald-900 mb-4">
          Our Mission, Vision & Core Values
        </h2>

        <div className="w-20 h-1 bg-emerald-700 mx-auto mb-6 rounded"></div>

        <div className="bg-emerald-100 p-6 rounded-xl text-slate-700">
          At EcoClean, we are driven by a shared belief that a cleaner world is
          a healthier world. Our mission, vision, and values guide every action,
          campaign, and initiative we undertake to protect our planet and
          empower people to take responsibility for a greener tomorrow.
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
      <div>
        <AboutImpactSection
          title="Our Impact This Week"
          data={weekData}
          bgColor="bg-emerald-100"
        />

        <AboutImpactSection
          title="Our Impact This Month"
          data={monthData}
          bgColor="bg-emerald-200"
        />

        <AboutImpactSection
          title="Our Impact This Year"
          data={yearData}
          bgColor="bg-emerald-300"
        />
      </div>
    </div>
  );
}

export default About;
