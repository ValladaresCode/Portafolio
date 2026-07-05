import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function PortfolioHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 text-slate-900">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contenido */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Hola, Soy Desarrollador Web
              </h1>
              <p className="text-xl text-slate-600">
                Transformo ideas en soluciones digitales innovadoras y funcionales
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/portfolio/projects"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Ver Mis Proyectos
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/portfolio/contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Contáctame
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {[
                { value: '15+', label: 'Proyectos' },
                { value: '5+', label: 'Habilidades' },
                { value: '2+', label: 'Años Exp.' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
                  <p className="text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Imagen/Ilustración */}
          <div className="flex items-center justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg shadow-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">💻</div>
                <p className="text-white text-lg font-semibold">Web Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
            Mis Servicios
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Desarrollo Web',
                description: 'Creación de sitios web modernos y responsivos',
                icon: '🌐',
              },
              {
                title: 'Aplicaciones React',
                description: 'Desarrollo de aplicaciones interactivas con React',
                icon: '⚛️',
              },
              {
                title: 'Diseño Responsivo',
                description: 'Interfaces adaptables a cualquier dispositivo',
                icon: '📱',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="p-8 border border-slate-200 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
