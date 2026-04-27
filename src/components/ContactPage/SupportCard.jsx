import React from "react";

function SupportCard({ icon, title, desc, value }) {
  return (
    <div className="bg-emerald-50 rounded-2xl border border-emerald-100 shadow-sm p-6 text-center hover:shadow-xl transition">
      <div className="text-4xl mb-3">{icon}</div>

      <h3 className="text-lg font-semibold text-emerald-800 mb-2">
        {title}
      </h3>

      <p className="text-slate-600 text-sm mb-3">{desc}</p>

      <p className="text-emerald-700 font-medium">{value}</p>
    </div>
  );
}

export default SupportCard;