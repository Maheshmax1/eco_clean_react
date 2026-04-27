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
    <div className="bg-green-50 p-8 rounded-xl shadow-sm 
    transition-all duration-300 ease-in-out
    hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]">

      <h3 className="text-xl font-semibold text-green-700 mb-4 
      transition-colors duration-300 hover:text-green-900">
        ✅ {title}
      </h3>

      <p className="text-slate-700 leading-relaxed">
        {desc}
      </p>

    </div>
  );
}

export default ValuesCard;
  