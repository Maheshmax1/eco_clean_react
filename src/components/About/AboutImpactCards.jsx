function AboutImpactCards({ title, text, highlight }) {
  return (
    <div className="bg-emerald-50 rounded-3xl shadow-md p-10 text-center hover:shadow-xl transition duration-300 ">
      
      <h3 className="text-3xl font-semibold text-emerald-700 mb-4">
        {title}
      </h3>

      <p
        className={`text-lg ${
          highlight ? "text-emerald-700 font-semibold" : "text-slate-600"
        }`}
      >
        {text}
      </p>

    </div>
  );
}

export default AboutImpactCards;