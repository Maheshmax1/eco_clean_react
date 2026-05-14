function AboutImpactCards({ title, text, highlight }) {
  return (
    <div className={`group p-8 rounded-[2.5rem] text-center transition-all duration-500 border border-white/60 shadow-lg hover:shadow-2xl hover:-translate-y-2 ${
      highlight ? 'bg-emerald-500 text-white shadow-emerald-500/20' : 'bg-white/60 backdrop-blur-md text-slate-800 hover:bg-white/80'
    }`}>
      
      <h3 className={`text-4xl font-black mb-3 tracking-tighter ${
        highlight ? 'text-white' : 'text-emerald-600'
      }`}>
        {title}
      </h3>

      <p className={`text-xs font-black uppercase tracking-[0.2em] leading-relaxed ${
        highlight ? 'text-emerald-100' : 'text-slate-400'
      }`}>
        {text}
      </p>
    </div>
  );
}

export default AboutImpactCards;