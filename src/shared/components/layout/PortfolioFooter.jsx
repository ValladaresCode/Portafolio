import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

export default function PortfolioFooter() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      label: 'Email',
      // Usamos Lucide para el correo que sí funciona bien
      renderIcon: () => <Mail size={18} />, 
      link: 'mailto:rvalladares-2024060@kinal.edu.gt',
      color: 'text-red-400 border-red-500/20 hover:bg-red-500/10'
    },
    {
      label: 'GitHub',
      // Imagen SVG directa de GitHub (Garantiza que no muestre el planeta)
      renderIcon: () => (
        <img 
          src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg" 
          alt="GitHub" 
          className="w-[18px] h-[18px] invert opacity-80 group-hover:opacity-100"
        />
      ),
      link: 'https://github.com/ValladaresCode',
      color: 'border-slate-700 hover:bg-slate-800'
    },
    {
      label: 'LinkedIn',
      // Imagen SVG directa de LinkedIn
      renderIcon: () => (
        <img 
          src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg" 
          alt="LinkedIn" 
          className="w-[18px] h-[18px] brightness-0 sepia-[100%] hue-rotate-[190%] saturate-[500%]"
        />
      ),
      link: 'https://linkedin.com/in/tuusuario',
      color: 'border-blue-500/20 hover:bg-blue-500/10'
    },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-900/60 text-slate-400 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          
          {/* Columna 1: Información */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Roger Valladares</h3>
            <p className="text-sm text-slate-500">
              Desarrollador web y móvil apasionado por crear experiencias digitales excepcionales usando las últimas tecnologías.
            </p>
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  aria-label={social.label}
                  className={`group p-2.5 rounded-lg bg-slate-900/50 border hover:border-slate-600 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center ${social.color}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.renderIcon()}
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/portfolio" className="hover:text-blue-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/portfolio/about" className="hover:text-blue-400 transition-colors">
                  Acerca de
                </Link>
              </li>
              <li>
                <Link to="/portfolio/skills" className="hover:text-blue-400 transition-colors">
                  Habilidades
                </Link>
              </li>
              <li>
                <Link to="/portfolio/projects" className="hover:text-blue-400 transition-colors">
                  Proyectos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-900/60 pt-8">
          <div className="flex justify-center text-center text-xs text-slate-500">
            <p>
              &copy; {currentYear} Roger Valladares. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}