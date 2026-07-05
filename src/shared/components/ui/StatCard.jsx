export default function StatCard({ value, label }) {
  return (
    <div className="text-center lg:text-left transition-all duration-300 hover:scale-105">
      <p className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
        {value}
      </p>
      <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1 tracking-wide uppercase">
        {label}
      </p>
    </div>
  );
}