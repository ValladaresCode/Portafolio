export default function ServiceCard({ title, description, icon }) {
  return (
    <div className="group p-8 bg-slate-900/50 border border-slate-800/80 rounded-2xl hover:border-slate-700/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/50 relative overflow-hidden">
      {/* Glow de fondo al pasar el mouse */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="mb-5 p-3 w-fit bg-slate-800/80 rounded-xl border border-slate-700/50 group-hover:border-slate-600 transition-colors">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}