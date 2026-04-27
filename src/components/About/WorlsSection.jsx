import React from "react";

function WorldSection() {
  const cards = [
    {
      img1: "https://images.unsplash.com/photo-1618477462146-050d2767e9f1",
      img2: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      img1: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5",
      img2: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
      img1: "https://images.unsplash.com/photo-1621451537084-482c73073a0f",
      img2: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    },
  ];

  return (
    <div className="bg-green-100 py-16  w-full h-170 mb-10">

      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
        The World is like cursor 🌍
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">

        {cards.map((card, index) => (
          <div 
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-lg"
          >
            
            {/* First Image */}
            <img
              src={card.img1}
              alt=""
              className="w-full h-92 object-cover 
              transition-all duration-500 
              group-hover:opacity-0"
            />

            {/* Hover Image */}
            <img
              src={card.img2}
              alt=""
              className="absolute top-0 left-0 w-full h-92 
              object-cover opacity-0 
              transition-all duration-500 
              group-hover:opacity-100"
            />

          </div>
        ))}

      </div>

      {/* Button */}
      <div className="flex justify-center mt-12">
        <button className="bg-yellow-300 text-green-900 px-8 py-3 
        rounded-full font-semibold 
        shadow-lg hover:scale-105 
        transition duration-300">
          Learn More
        </button>
      </div>

    </div>
  );
}

export default WorldSection;