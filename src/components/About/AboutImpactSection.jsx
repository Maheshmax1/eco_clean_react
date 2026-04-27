import AboutImpactCards from "./AboutImpactCards";

function AboutImpactSection({ id, title, data, bgColor }) {
  return (
    <div className={`${bgColor} py-16 px-6 mb-5`}>
      <h2 className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-12">
        {title} ✨
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {data.map((item) => (
          <AboutImpactCards
            key={item.id}
            title={item.title}
            text={item.value}
            highlight={item.highlight}
          />
        ))}
      </div>
    </div>
  );
}

export default AboutImpactSection;
