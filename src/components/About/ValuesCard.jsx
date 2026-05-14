// import React from "react";

// function ValuesCard({ title, desc }) {
//   return (
//     <div className="bg-green-50 p-8 rounded-xl shadow-sm hover:shadow-md transition">

//       <h3 className="text-xl font-semibold text-green-700 mb-4">
//         ✅ {title}
//       </h3>

//       <p className="text-slate-700 leading-relaxed">
//         {desc}
//       </p>

//     </div>
//   );
// }

// export default ValuesCard;

import React from "react";

function ValuesCard({ title, desc }) {
  return (
    <div className="bg-white/40 backdrop-blur-xl p-8 rounded-[2rem] border border-white/60 shadow-lg hover:shadow-2xl hover:bg-white/80 transition-all duration-500 group">
      <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 text-emerald-600">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>

      <h3 className="text-xl font-black text-emerald-900 mb-4 tracking-tight">
        {title}
      </h3>

      <p className="text-slate-600 leading-relaxed font-medium text-sm">
        {desc}
      </p>
    </div>
  );
}

export default ValuesCard;
  