import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';

export default function PortfolioNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: 'Inicio', to: '/portfolio' },
    { label: 'Acerca de mí', to: '/portfolio/about' },
    { label: 'Habilidades', to: '/portfolio/skills' },
    { label: 'Proyectos', to: '/portfolio/projects' },
    { label: 'Educación', to: '/portfolio/education' },
  ];

  return (
    <nav className="bg-slate-950/80 backdrop-blur-md text-white border-b border-slate-900 sticky top-0 z-50 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo / Marca Personalizada e Impactante */}
          <Link to="/portfolio" className="flex items-center gap-2.5 group min-w-0">
            <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white shadow-md shadow-blue-500/10 group-hover:scale-105 transition-transform">
              <Code2 size={16} />
            </div>
            <div className="flex flex-col leading-tight min-w-0">
              <span className="font-bold text-sm sm:text-base tracking-wide text-slate-100 truncate">
                Roger Valladares
              </span>
              <span className="text-[10px] sm:text-xs text-blue-400 font-medium tracking-tight truncate">
                Programador Fundación Kinal
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all duration-150
                    ${isActive 
                      ? 'bg-blue-500/10 text-blue-400 border border-blue-500/10' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-900 transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-900 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                    ${isActive 
                      ? 'bg-blue-500/10 text-blue-400' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
