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
    <div className="bg-emerald-50 rounded-2xl p-10 shadow-sm border border-emerald-100 
    transition-all duration-300 
    hover:shadow-xl hover:-translate-y-2">
      
      <h3 className="text-3xl font-bold text-emerald-800 mb-6">
        {title}
      </h3>

      <p className="text-slate-700 mb-4 leading-relaxed">
        {para1}
      </p>

      <p className="text-slate-700 leading-relaxed">
        {para2}
      </p>

    </div>
  );
}

export default AboutCards;