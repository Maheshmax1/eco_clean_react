import React from "react";
import SupportCard from "../components/ContactPage/SupportCard";
import SupportForm from "../components/ContactPage/SupportForm";

function CustomerSupport() {
  const supportData = [
    {
      icon: "📧",
      title: "Email Support",
      desc: "Send us your queries anytime.",
      value: "support@ecoclean.com",
    },
    {
      icon: "📞",
      title: "Call Us",
      desc: "Available during working hours.",
      value: "+91 98765 43210",
    },
    {
      icon: "💬",
      title: "Live Chat",
      desc: "Chat with us instantly.",
      value: "Available Now",
    },
  ];

  return (
    <div className="bg-emerald-50 py-16 px-6">
      
      {/*  TOP CONTENT (Heading + Description) */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-emerald-900 mb-4">
          Customer Support 💬
        </h2>

        <div className="w-20 h-1 bg-emerald-700 mx-auto mb-6 rounded"></div>

        <p className="text-slate-600 max-w-2xl mx-auto">
          Have questions or need help? Our support team is always ready to assist you.
          Choose your preferred way to connect with us.
        </p>
      </div>

      {/*  SUPPORT CARDS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {supportData.map((item, index) => (
          <SupportCard key={index} {...item} />
        ))}
      </div>

      {/*  FORM SECTION */}
      <SupportForm />
    </div>
  );
}

export default CustomerSupport;