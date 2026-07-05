import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Monitor, 
  Smartphone, 
  Server, 
  Database 
} from 'lucide-react';
import StatCard from '../../shared/components/ui/StatCard';
import ServiceCard from '../../shared/components/ui/ServiceCard';

export default function PortfolioHome() {
  const stats = [
    { value: '15+', label: 'PROYECTOS' },
    { value: '12+', label: 'HABILIDADES' },
    { value: '2+', label: 'AÑOS EXP.' },
  ];

  const services = [
    {
      title: 'Desarrollo Frontend & Web',
      description: 'Construcción de interfaces interactivas, dinámicas y de alto rendimiento utilizando HTML, CSS, JavaScript y React, garantizando un diseño responsivo y optimizado.',
      icon: <Monitor className="w-8 h-8 text-blue-500" />,
    },
    {
      title: 'Backend & Spring Boot',
      description: 'Creación de REST APIs robustas, seguras y escalables con Java y Spring Boot, estructurando flujos de datos eficientes mediante JSON.',
      icon: <Server className="w-8 h-8 text-emerald-500" />,
    },
    {
      title: 'Desarrollo Móvil',
      description: 'Diseño y programación de aplicaciones móviles multiplataforma usando React Native, enfocadas en una gran experiencia de usuario.',
      icon: <Smartphone className="w-8 h-8 text-pink-500" />,
    },
    {
      title: 'Bases de Datos & DevOps',
      description: 'Modelado de bases de datos relacionales (MySQL) y NoSQL (MongoDB), integrando contenedores Docker para despliegues ágiles.',
      icon: <Database className="w-8 h-8 text-purple-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f1123] text-slate-100 overflow-x-hidden selection:bg-blue-500 selection:text-white">
      {/* Fondo Decorativo Sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-[120px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Columna Izquierda: Contenido Principal */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.15]">
                Te doy la bienvenida, <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Construyamos el Futuro Web
                </span>
              </h1>
              <p className="text-base md:text-lg text-slate-400 font-normal leading-relaxed max-w-2xl">
                Hola, es un gusto saludarte. Soy desarrollador frontend y backend apasionado por transformar ideas, y necesidades complejas en soluciones digitales optimizadas, interactivas y con un diseño visualmente impecable.
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start w-full sm:w-auto">
              <Link
                to="/portfolio/projects"
                className="group inline-flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5"
              >
                Ver Mis Proyectos
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
              <Link
                to="/portfolio/education"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-semibold rounded-xl bg-slate-900/40 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-0.5"
              >
                Ver mi Educación
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-12 pt-8 border-t border-slate-800/40 max-w-lg">
              {stats.map((stat) => (
                <StatCard key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>

          {/* Columna Derecha: Terminal Recreada con Tailwind CSS */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <div className="relative max-w-[480px] w-full group">
              {/* Brillo de fondo */}
              <div className="absolute inset-0 bg-blue-500/5 rounded-2xl blur-2xl group-hover:bg-blue-500/10 transition-all duration-500" />
              
              {/* Estructura de la ventana de la terminal */}
              <div className="relative w-full bg-[#070913] border border-slate-800/80 rounded-2xl p-6 shadow-2xl font-mono text-xs sm:text-sm leading-relaxed text-slate-300 select-none">
                {/* Barra superior del editor */}
                <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-800/40">
                  <div className="flex space-x-2">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="text-slate-500 text-[11px] flex items-center gap-1">
                    &gt;_ roger-dev.js
                  </span>
                </div>

                {/* Código interno */}
                <div className="space-y-1">
                  <p><span className="text-pink-500 font-semibold">const</span> <span className="text-blue-400">developer</span> = &#123;</p>
                  <p className="pl-4"><span className="text-slate-400">name:</span> <span className="text-emerald-400">'Roger Valladares'</span>,</p>
                  <p className="pl-4"><span className="text-slate-400">origin:</span> <span className="text-emerald-400">'Fundación Kinal'</span>,</p>
                  <p className="pl-4"><span className="text-slate-400">techStack:</span> &#91;</p>
                  <p className="pl-8"><span className="text-emerald-400">'React'</span>, <span className="text-emerald-400">'Tailwind CSS'</span>,</p>
                  <p className="pl-8"><span className="text-emerald-400">'JavaScript ES6+'</span></p>
                  <p className="pl-4">&#93;,</p>
                  <p className="pl-4"><span className="text-slate-400">passion:</span> <span className="text-emerald-400">'Building premium UIs'</span></p>
                  <p>&#125;;</p>
                  <p className="pt-4 text-slate-500">// ¡Listo para crear soluciones excepcionales!</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Sección de Servicios */}
      <section className="bg-[#0b0c16] border-t border-slate-900/60 py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              ¿Cómo puedo ayudarte?
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Me enfoco en crear productos digitales de extremo a extremo, asegurando que no solo se vean bien, sino que su arquitectura interna sea sólida y escalable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard 
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}