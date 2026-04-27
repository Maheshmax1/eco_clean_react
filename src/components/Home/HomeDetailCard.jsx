// import React from 'react'

// function HomeDetailCard({data}) {
//   return (
//     <section className="w-full py-12 px-6 ">

//       {/* Title */}
//       <h2 className="text-3xl font-bold text-center mb-8 text-green-600">
//         {data.title}
//       </h2>

//       {/* Content */}
//       <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">

//         {/* Image */}
//         <img 
//           src={data.image} 
//           alt={data.title}  
//           className="w-full md:w-1/2 h-80 object-cover rounded-xl shadow-lg"
//         />

//         {/* Text */}
//       <div className="space-y-4 text-slate-700 text-lg ">
//         <p>{data.para1}</p>
//           <p>{data.para2}</p>
//           {data.para3 && <p>{data.para3}</p>}
//         </div>

//       </div>

//     </section>
//   )
// }

// export default HomeDetailCard

import React from 'react'

function HomeDetailCard({data}) {
  return (
    <section className="w-full py-12 px-6">

      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-8 text-green-600">
        {data.title}
      </h2>

      {/* Card */}
      <div className="max-w-6xl mx-auto 
      transition-all duration-300 
      hover:shadow-2xl hover:-translate-y-2 
      rounded-2xl p-6 bg-white">

        <div className="flex flex-col md:flex-row items-center gap-8">

          {/* Image */}
          <div className="overflow-hidden rounded-xl">
            <img 
              src={data.image} 
              alt={data.title}  
              className="w-full md:w-[500px] h-80 object-cover 
              transition-transform duration-500 
              hover:scale-105"
            />
          </div>

          {/* Text */}
          <div className="space-y-4 text-slate-700 text-lg leading-relaxed">
            <p>{data.para1}</p>
            <p>{data.para2}</p>
            {data.para3 && <p>{data.para3}</p>}
          </div>

        </div>

      </div>

    </section>
  )
}

export default HomeDetailCard

