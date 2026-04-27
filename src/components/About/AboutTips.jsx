// import React from "react";

// function AboutTips() {
//   const tips = [
//     {
//       title: "Use Separate Bins",
//       desc: "Keep dry and wet waste separate for recycling.",
//     },
//     {
//       title: "Avoid Plastic",
//       desc: "Switch to reusable cloth bags instead of single-use plastic.",
//     },
//     {
//       title: "Keep Water Clean",
//       desc: "Don't throw waste or chemicals into rivers or drains.",
//     },
//     {
//       title: "Join Local Drives",
//       desc: "Be part of neighborhood or school cleaning programs.",
//     },
//     {
//       title: "Plant Trees",
//       desc: "Trees act as nature's filters — they clean the air and support biodiversity.",
//     },
//     {
//       title: "Spread Awareness",
//       desc: "Educate friends and family about keeping the environment clean.",
//     },
//   ];

//   return (
//     <div className="bg-emerald-50 py-16 px-6">
//       <div className="max-w-6xl mx-auto bg-white/95 rounded-2xl shadow-md p-10 border border-emerald-100">
        
//         {/* Title */}
//         <h2 className="text-4xl font-bold text-green-700 text-center mb-3">
//           Simple Cleaning Tips Everyone Can Follow
//         </h2>

//         <div className="w-20 h-1 bg-emerald-700 mx-auto mb-10 rounded"></div>

//         {/* Tips */}
//         <div className="space-y-6">
//           {tips.map((tip, index) => (
//             <div
//               key={index}
//               className="bg-green-50 border-l-4 border-green-600 p-5 rounded-lg"
//             >
//               <p className="text-slate-700">
//                 <span className="font-semibold text-emerald-700">
//                   {tip.title}:
//                 </span>{" "}
//                 {tip.desc}
//               </p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }


// export default AboutTips;



import React from "react";

function AboutTips() {
  const tips = [
    {
      title: "Use Separate Bins",
      desc: "Keep dry and wet waste separate for recycling.",
    },
    {
      title: "Avoid Plastic",
      desc: "Switch to reusable cloth bags instead of single-use plastic.",
    },
    {
      title: "Keep Water Clean",
      desc: "Don't throw waste or chemicals into rivers or drains.",
    },
    {
      title: "Join Local Drives",
      desc: "Be part of neighborhood or school cleaning programs.",
    },
    {
      title: "Plant Trees",
      desc: "Trees act as nature's filters — they clean the air and support biodiversity.",
    },
    {
      title: "Spread Awareness",
      desc: "Educate friends and family about keeping the environment clean.",
    },
  ];

  return (
    <div className="bg-emerald-50 py-16 px-6">
      <div className="max-w-6xl mx-auto bg-white/95 rounded-2xl shadow-md p-10 border border-emerald-100 transition-all duration-500">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-green-700 text-center mb-3 animate-fade-in">
          Simple Cleaning Tips Everyone Can Follow
        </h2>

        <div className="w-20 h-1 bg-emerald-700 mx-auto mb-10 rounded"></div>

        {/* Tips */}
        <div className="space-y-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-green-50 border-l-4 border-green-600 p-5 rounded-lg
              transition-all duration-300 
              hover:shadow-lg hover:-translate-y-1 hover:bg-green-100"
            >
              <p className="text-slate-700">
                <span className="font-semibold text-emerald-700">
                  {tip.title}:
                </span>{" "}
                {tip.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default AboutTips;



// import React from "react";
// import { Leaf, Recycle, Droplets, Users, Trees, Megaphone } from "lucide-react";

// function AboutTips() {
//   const tips = [
//     {
//       title: "Use Separate Bins",
//       desc: "Keep dry and wet waste separate for recycling.",
//       icon: <Recycle size={28} />,
//     },
//     {
//       title: "Avoid Plastic",
//       desc: "Switch to reusable cloth bags instead of single-use plastic.",
//       icon: <Leaf size={28} />,
//     },
//     {
//       title: "Keep Water Clean",
//       desc: "Don't throw waste or chemicals into rivers or drains.",
//       icon: <Droplets size={28} />,
//     },
//     {
//       title: "Join Local Drives",
//       desc: "Be part of neighborhood or school cleaning programs.",
//       icon: <Users size={28} />,
//     },
//     {
//       title: "Plant Trees",
//       desc: "Trees clean air and support biodiversity.",
//       icon: <Trees size={28} />,
//     },
//     {
//       title: "Spread Awareness",
//       desc: "Educate friends and family about cleanliness.",
//       icon: <Megaphone size={28} />,
//     },
//   ];

//   return (
//     <div className="bg-gradient-to-b from-emerald-50 to-white py-16 px-6">
      
//       <div className="max-w-6xl mx-auto">
        
//         {/* Title */}
//         <h2 className="text-4xl font-bold text-center text-emerald-700 mb-12">
//           Simple Cleaning Tips Everyone Can Follow
//         </h2>

//         {/* Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
//           {tips.map((tip, index) => (
//             <div
//               key={index}
//               className="group bg-white rounded-2xl p-6 
//               shadow-sm border border-emerald-100 
//               transition-all duration-300 
//               hover:shadow-xl hover:-translate-y-2"
//             >
              
//               {/* Icon */}
//               <div className="w-12 h-12 flex items-center justify-center 
//               bg-emerald-100 text-emerald-700 rounded-xl mb-4
//               group-hover:bg-emerald-600 group-hover:text-white 
//               transition-all duration-300">
//                 {tip.icon}
//               </div>

//               {/* Title */}
//               <h3 className="text-xl font-semibold text-emerald-800 mb-2">
//                 {tip.title}
//               </h3>

//               {/* Description */}
//               <p className="text-slate-600 leading-relaxed">
//                 {tip.desc}
//               </p>

//             </div>
//           ))}

//         </div>
//       </div>
//     </div>
//   );
// }

// export default AboutTips;