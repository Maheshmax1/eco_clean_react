// import React from "react";

// function AboutCards({ title, para1, para2 }) {
//   return (
//     <div className="bg-emerald-50 rounded-2xl p-10 shadow-sm border border-emerald-100">
      
//       <h3 className="text-3xl font-bold text-emerald-800 mb-6">
//         {title}
//       </h3>

//       <p className="text-slate-700 mb-4 leading-relaxed">
//         {para1}
//       </p>

//       <p className="text-slate-700 leading-relaxed">
//         {para2}
//       </p>

//     </div>
//   );
// }

// export default AboutCards;

import React from "react";

function AboutCards({ title, para1, para2 }) {
  return (
    <div className="bg-white/40 backdrop-blur-sm rounded-[2.5rem] p-6 md:p-12 shadow-sm border border-white
    transition-all duration-500 
    hover:shadow-2xl hover:bg-white/80 group">
      
      <h3 className="text-2xl md:text-4xl font-black text-emerald-900 mb-6 group-hover:text-emerald-600 transition-colors">
        {title}
      </h3>

      <p className="text-slate-600 mb-6 leading-relaxed md:text-lg">
        {para1}
      </p>

      <p className="text-slate-500 leading-relaxed md:text-base italic">
        {para2}
      </p>

    </div>
  );
}

export default AboutCards;