import { useState, useRef } from 'react';
import {
  ExternalLink,
  Globe2,
  Maximize2,
  X,
  Star,
  GitFork,
  Code2,
  FolderGit2,
  Sparkles,
  Layers,
  CheckCircle2,
  Calendar,
  Users,
  Activity,
  Palette,
  LayoutGrid
} from 'lucide-react';

export default function PortfolioProjects() {
  const showcaseRef = useRef(null);

  const relevantProjects = [
    {
      id: 1,
      title: 'Plataforma de Barbería',
      slug: 'barberia-booking',
      description: 'Sistema completo para la administración y reserva de citas de barbería en tiempo real, catálogo de cortes, control de estilistas y panel administrativo.',
      visualDetails: 'Diseño ultra moderno con componentes traslúcidos (glassmorphism), tipografía premium y tonos dorados/oscuros. Facilita la reserva intuitiva y visualización de perfiles de estilistas.',
      technologies: ['React', 'Node.js', 'Tailwind CSS', 'MongoDB', 'JavaScript', 'HTML'],
      image: '/projects/barberia.png',
      link: 'https://github.com/ZimriJahdai/HaircutFiveFriends-Full',
      demoLink: 'https://github.com/ZimriJahdai/HaircutFiveFriends-Full',
      repoName: 'ZimriJahdai/HaircutFiveFriends-Full',
      language: 'JavaScript',
      languageColor: '#f1e05a',
      stars: 28,
      forks: 7,
      skills: ['Frontend UI', 'State Management', 'Database Schema', 'API Design'],
      features: ['Calendario interactivo de reservas', 'Catálogo de cortes y servicios', 'Panel de administración de barberos', 'Control de citas y estados']
    },
    {
      id: 2,
      title: 'Sistema Bancario Web',
      slug: 'banco-web',
      description: 'Plataforma de gestión bancaria basada en microservicios que permite realizar transacciones seguras, transferencias inmediatas, consulta de saldos y gráficos de rendimiento.',
      visualDetails: 'Dashboard financiero moderno en modo oscuro con gráficos de barras y líneas en neón azul, tarjetas de crédito virtuales animadas y listas de movimientos limpias.',
      technologies: ['React', 'Node.js', 'Tailwind CSS', 'MongoDB', 'JavaScript', 'HTML'],
      image: '/projects/banco_web.png',
      link: 'https://github.com/Narizaico-code/Microservicios-GestorBancario',
      demoLink: 'https://github.com/Narizaico-code/Microservicios-GestorBancario',
      repoName: 'Narizaico-code/Microservicios-GestorBancario',
      language: 'JavaScript',
      languageColor: '#f1e05a',
      stars: 32,
      forks: 9,
      skills: ['Microservicios', 'Seguridad Financiera', 'Visualización de Datos', 'Estado Global'],
      features: ['Simulación de transferencias y pagos', 'Gestión de cuentas y tarjetas de crédito', 'Historial de movimientos detallado', 'Dashboard analítico de ingresos/egresos']
    },
    {
      id: 3,
      title: 'Sistema Bancario Móvil',
      slug: 'banco-movil',
      description: 'Aplicación móvil de banca en línea diseñada para smartphones, optimizando el flujo de transacciones bancarias, transferencias y transferencias rápidas.',
      visualDetails: 'Interfaz móvil nativa estilizada, adaptada a pantallas táctiles con navegación intuitiva gestual y modos oscuros de alta legibilidad.',
      technologies: ['React Native', 'Node.js', 'Tailwind CSS', 'MongoDB', 'JavaScript'],
      image: '/projects/banco_movil.png',
      link: 'https://github.com/ValladaresCode/Bancario-Movil',
      demoLink: 'https://github.com/ValladaresCode/Bancario-Movil',
      repoName: 'ValladaresCode/Bancario-Movil',
      language: 'JavaScript',
      languageColor: '#f1e05a',
      stars: 28,
      forks: 5,
      skills: ['Desarrollo Móvil', 'Navegación Nátiva', 'Componentes Touch', 'API Integration'],
      features: ['Acceso por biométricos simulados', 'Transferencias rápidas mediante QR', 'Gráficos simplificados de consumos', 'Alertas y notificaciones push']
    },
    {
      id: 4,
      title: 'Gestor Restaurantes Web',
      slug: 'restaurante-web',
      description: 'Sistema web de administración de restaurantes para controlar mesas en tiempo real, pedidos entrantes a cocina, facturación y catálogo de platos.',
      visualDetails: 'Dashboard táctil de punto de venta (POS) para meseros y administradores con estados visuales cromáticos para las mesas (Mesa Ocupada, Mesa Libre, Pedido Listo).',
      technologies: ['React', 'Node.js', 'Tailwind CSS', 'MongoDB', 'JavaScript', 'HTML'],
      image: '/projects/restaurante_web.png',
      link: 'https://github.com/KennXxX/Gestor-Restaurantes',
      demoLink: 'https://github.com/KennXxX/Gestor-Restaurantes',
      repoName: 'KennXxX/Gestor-Restaurantes',
      language: 'JavaScript',
      languageColor: '#f1e05a',
      stars: 19,
      forks: 4,
      skills: ['Real-time Orders', 'State Management', 'Grid de Mesas interactivo', 'Control de Inventario'],
      features: ['Monitoreo en tiempo real de mesas', 'Creación y despacho de comandas', 'Facturación automática de pedidos', 'Administrador de menú y platillos']
    },
    {
      id: 5,
      title: 'Gestor Restaurantes Móvil',
      slug: 'restaurante-movil',
      description: 'Aplicación móvil para clientes y meseros enfocada en la toma de pedidos desde mesa, visualización del menú digital y reservas de mesas.',
      visualDetails: 'Interfaz móvil optimizada para visualización de platillos con imágenes ricas, carrito de compras integrado para el pedido y transiciones dinámicas.',
      technologies: ['React Native', 'Node.js', 'Tailwind CSS', 'MongoDB', 'JavaScript'],
      image: '/projects/restaurante_movil.png',
      link: 'https://github.com/Narizaico-code/GestorRestaurantes-Movil',
      demoLink: 'https://github.com/Narizaico-code/GestorRestaurantes-Movil',
      repoName: 'Narizaico-code/GestorRestaurantes-Movil',
      language: 'JavaScript',
      languageColor: '#f1e05a',
      stars: 24,
      forks: 6,
      skills: ['Toma de pedidos móvil', 'Catálogo gastronómico digital', 'Sincronización API', 'Navegación Móvil'],
      features: ['Menú interactivo con filtros de comida', 'Toma y envío de pedidos a cocina', 'Reserva de mesas en tiempo real', 'Carrito dinámico de platillos']
    },
  ];

  const otherProjects = [
    {
      id: 6,
      repoName: 'ValladaresCode/FONENO',
      description: 'Aplicación móvil de comunicación y marcación telefónica inteligente enfocada en la gestión de contactos y registro de llamadas.',
      link: 'https://github.com/ValladaresCode/FONENO',
      language: 'JavaScript',
      languageColor: '#f1e05a',
      stars: 14,
      forks: 3,
    },
    {
      id: 7,
      repoName: 'ValladaresCode/client-user',
      description: 'Aplicación cliente frontend dedicada para la interfaz de usuario final, interactuando con pasarelas de pago y perfiles bancarios.',
      link: 'https://github.com/ValladaresCode/client-user',
      language: 'JavaScript',
      languageColor: '#f1e05a',
      stars: 19,
      forks: 4,
    },
    {
      id: 8,
      repoName: 'ValladaresCode/Client-admin',
      description: 'Dashboard de administración y portal de control para gestionar cuentas de clientes, configuraciones de límites y transacciones.',
      link: 'https://github.com/ValladaresCode/Client-admin',
      language: 'JavaScript',
      languageColor: '#f1e05a',
      stars: 21,
      forks: 5,
    },
    {
      id: 9,
      repoName: 'ValladaresCode/KinalSportsIN6BV',
      description: 'Sistema escolar para el control de torneos deportivos, campeonatos, asignación de campos y registro de puntuaciones.',
      link: 'https://github.com/ValladaresCode/KinalSportsIN6BV',
      language: 'Java',
      languageColor: '#b07219',
      stars: 26,
      forks: 7,
    },
    {
      id: 10,
      repoName: 'SuarezGil/Gestor_Bancario',
      description: 'Capa de servicios backend y API para el gestor bancario, encargada de la persistencia de datos, seguridad JWT y lógica de negocio.',
      link: 'https://github.com/SuarezGil/Gestor_Bancario',
      language: 'Java',
      languageColor: '#b07219',
      stars: 18,
      forks: 4,
    },
    {
      id: 11,
      repoName: 'ValladaresCode/GestorRestaurantes',
      description: 'API backend para el gestor de restaurantes, proporcionando servicios para reservas de mesas, toma de comandas y facturación.',
      link: 'https://github.com/ValladaresCode/GestorRestaurantes',
      language: 'JavaScript',
      languageColor: '#f1e05a',
      stars: 16,
      forks: 3,
    },
  ];

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const barberiaProject = relevantProjects[0];

  return (
    <div className="min-h-screen bg-[#0f1123] text-slate-100 overflow-x-hidden selection:bg-blue-500 selection:text-white">
      {/* Fondo Decorativo Sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-tr from-blue-500/5 to-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">

        {/* Header */}
        <div className="mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide mb-4">
            <Sparkles size={12} />
            Portafolio Interactivo
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Vistas de Proyectos
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl">
            Un espacio dedicado a demostrar la capacidad visual, arquitectónica e interactiva de mis aplicaciones, junto con vistas en tiempo real de sus repositorios de GitHub.
          </p>
        </div>

        {/* ================= APARTADO DE VISTAS DE PROYECTOS (SHOWCASE) ================= */}
        <div className="scroll-mt-24 mb-24">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide flex items-center gap-2">
              <Layers className="text-blue-500" size={20} />
              Apartado de Vistas & Capturas (Principal)
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-slate-800 to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-900/20 border border-slate-800/80 rounded-2xl p-6 lg:p-8 backdrop-blur-sm">
            {/* Visualizer (Browser Frame Mockup) */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="bg-[#070913] border border-slate-800 rounded-xl overflow-hidden shadow-2xl relative flex-1 flex flex-col">

                {/* Browser Tab Bar */}
                <div className="bg-[#0f1123] border-b border-slate-800/60 px-4 py-3 flex items-center gap-3">
                  <div className="flex space-x-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56] opacity-90 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e] opacity-90 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#27c93f] opacity-90 inline-block" />
                  </div>
                  <div className="flex-1 bg-[#070913] rounded-md py-1 px-3 text-[11px] text-slate-400 font-mono text-center truncate border border-slate-800/40">
                    https://rogerdev.com/projects/{barberiaProject.slug}
                  </div>
                </div>

                {/* Screenshot Container */}
                <div
                  onClick={() => setIsLightboxOpen(true)}
                  className="relative group cursor-pointer overflow-hidden flex-1 min-h-[300px] sm:min-h-[400px] flex items-center justify-center bg-[#070913]"
                >
                  <img
                    src={barberiaProject.image}
                    alt={barberiaProject.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                    <div className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                      <Maximize2 size={24} className="text-white" />
                    </div>
                    <span className="text-sm font-semibold text-white tracking-wide">
                      Ver pantalla completa
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Showcase Info & GitHub Card */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                {/* Detailed Title Block */}
                <div>
                  <div className="flex items-center gap-1.5 text-blue-400 text-xs font-semibold tracking-wider mb-2">
                    <Code2 size={14} />
                    <span>PROYECTO DESTACADO</span>
                  </div>
                  <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-350 tracking-tight leading-none mb-3">
                    {barberiaProject.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed border-l-2 border-blue-500 pl-3.5">
                    {barberiaProject.description}
                  </p>
                </div>

                {/* Tech Tags Block */}
                <div>
                  <span className="text-[10px] text-slate-500 font-bold block mb-2 tracking-wider uppercase">Tecnologías Usadas</span>
                  <div className="flex flex-wrap gap-1.5">
                    {barberiaProject.technologies.map((tech) => {
                      const colors = {
                        'React': 'bg-blue-500/10 text-blue-400 border-blue-500/25 shadow-blue-500/5',
                        'Node.js': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25 shadow-emerald-500/5',
                        'Tailwind CSS': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/25 shadow-cyan-500/5',
                        'MongoDB': 'bg-green-500/10 text-green-400 border-green-500/25 shadow-green-500/5',
                        'JavaScript': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/25 shadow-yellow-500/5',
                        'HTML': 'bg-orange-500/10 text-orange-400 border-orange-500/25 shadow-orange-500/5',
                      };
                      const style = colors[tech] || 'bg-slate-800/40 text-slate-300 border-slate-750';
                      return (
                        <span
                          key={tech}
                          className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border shadow-sm transition-all duration-300 hover:scale-105 ${style}`}
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Habilidades Clave Block */}
                <div>
                  <span className="text-[10px] text-slate-500 font-bold block mb-2 tracking-wider uppercase">Habilidades Clave</span>
                  <div className="flex flex-wrap gap-1">
                    {barberiaProject.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] text-slate-400 bg-slate-950/40 px-2 py-0.5 rounded border border-slate-800/40"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visual Details Card Block */}
                <div className="bg-gradient-to-br from-slate-950/70 to-indigo-950/20 border border-slate-800/80 rounded-xl p-4 shadow-lg shadow-blue-950/15 relative overflow-hidden group hover:border-slate-700/60 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-[60px] h-[60px] bg-indigo-500/5 blur-xl pointer-events-none rounded-full" />
                  <div className="flex items-center gap-2 mb-2">
                    <Palette size={14} className="text-pink-400" />
                    <span className="text-[10px] text-slate-300 font-bold tracking-wider uppercase">Diseño & Dirección Artística</span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed font-normal">
                    {barberiaProject.visualDetails}
                  </p>
                </div>

                {/* Features Checklist 2x2 Grid Block */}
                <div>
                  <span className="text-[10px] text-slate-500 font-bold block mb-2.5 tracking-wider uppercase">Funcionalidades Clave</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {barberiaProject.features?.map((feat, idx) => {
                      const icons = [
                        <Calendar size={15} className="text-blue-400 shrink-0" />,
                        <LayoutGrid size={15} className="text-purple-400 shrink-0" />,
                        <Users size={15} className="text-indigo-400 shrink-0" />,
                        <Activity size={15} className="text-emerald-400 shrink-0" />
                      ];
                      return (
                        <div key={idx} className="bg-slate-950/40 border border-slate-800/60 rounded-xl p-3 flex items-start gap-3 hover:border-slate-700/60 transition-colors duration-200">
                          <div className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-center shadow-inner">
                            {icons[idx] || <CheckCircle2 size={15} className="text-slate-400 shrink-0" />}
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="text-slate-200 text-xs font-semibold leading-tight">{feat}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* GitHub Repo Widget */}
              <div className="bg-[#070913] border border-slate-800/80 rounded-xl p-4 text-left font-sans select-none relative hover:border-slate-700/80 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg"
                      alt="GitHub"
                      className="w-4 h-4 invert opacity-80"
                    />
                    <a
                      href={barberiaProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-blue-400 hover:underline truncate max-w-[200px]"
                    >
                      {barberiaProject.repoName}
                    </a>
                  </div>
                  <span className="text-[10px] text-slate-400 border border-slate-800 px-2 py-0.5 rounded-full font-medium tracking-wide">
                    Público
                  </span>
                </div>

                <p className="text-slate-400 text-xs leading-snug mb-3 line-clamp-2">
                  {barberiaProject.description}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-slate-800/40 text-[11px] text-slate-400">
                  <div className="flex gap-4">
                    <span className="flex items-center gap-1">
                      <span
                        className="w-2.5 h-2.5 rounded-full inline-block"
                        style={{ backgroundColor: barberiaProject.languageColor }}
                      />
                      {barberiaProject.language}
                    </span>
                    <span className="flex items-center gap-0.5">
                      <Star size={11} className="text-amber-400 fill-amber-400" />
                      {barberiaProject.stars}
                    </span>
                    <span className="flex items-center gap-0.5">
                      <GitFork size={11} />
                      {barberiaProject.forks}
                    </span>
                  </div>
                  <a
                    href={barberiaProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[11px] font-semibold text-blue-400 hover:text-blue-300"
                  >
                    Ver Repo <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SECCIÓN: PROYECTOS MÁS RELEVANTES ================= */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide flex items-center gap-2">
              <FolderGit2 className="text-blue-500" size={20} />
              Proyectos Más Relevantes
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-slate-800 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relevantProjects.filter((project) => project.id !== 1).map((project) => (
              <div
                key={project.id}
                className={`group rounded-xl overflow-hidden transition-all duration-300 border backdrop-blur-sm flex flex-col justify-between
                  bg-slate-900/20 border border-slate-800/80 rounded-xl hover:border-slate-700/80 hover:-translate-y-1
                  }`}
              >
                {/* Project Image Header */}
                <div className="h-44 overflow-hidden relative bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] bg-slate-800/60 text-slate-300 px-2 py-0.5 rounded-md border border-slate-700/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Applied Skills */}
                    <div className="mb-6">
                      <p className="text-[10px] text-slate-500 font-bold mb-2 tracking-wider uppercase">Habilidades clave</p>
                      <div className="flex flex-wrap gap-1">
                        {project.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[10px] text-slate-400 bg-slate-950/40 px-2 py-0.5 rounded border border-slate-800/40"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Embedded GitHub Repo Widget (Replaces actions) */}
                  <div className="bg-[#070913] border border-slate-800/80 rounded-xl p-3.5 text-left font-sans select-none mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <img
                          src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg"
                          alt="GitHub"
                          className="w-3.5 h-3.5 invert opacity-80 shrink-0"
                        />
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-blue-400 hover:underline truncate"
                        >
                          {project.repoName}
                        </a>
                      </div>
                      <span className="text-[9px] text-slate-400 border border-slate-800 px-2 py-0.5 rounded-full font-medium shrink-0">
                        Público
                      </span>
                    </div>

                    <p className="text-slate-400 text-[11px] leading-snug mb-3 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-800/40 text-[10px] text-slate-400">
                      <div className="flex gap-3">
                        <span className="flex items-center gap-1">
                          <span
                            className="w-2 h-2 rounded-full inline-block"
                            style={{ backgroundColor: project.languageColor }}
                          />
                          {project.language}
                        </span>
                        <span className="flex items-center gap-0.5">
                          <Star size={10} className="text-amber-400 fill-amber-400" />
                          {project.stars}
                        </span>
                        <span className="flex items-center gap-0.5">
                          <GitFork size={10} />
                          {project.forks}
                        </span>
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-0.5 font-semibold text-blue-400 hover:text-blue-300"
                      >
                        Ver Repo <ExternalLink size={9} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SECCIÓN: OTROS PROYECTOS ================= */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide flex items-center gap-2">
              <FolderGit2 className="text-blue-500" size={20} />
              Otros Proyectos
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-slate-800 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="bg-[#070913] border border-slate-800/80 rounded-xl p-5 text-left font-sans hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg shadow-black/20"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <img
                        src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg"
                        alt="GitHub"
                        className="w-4 h-4 invert opacity-80 shrink-0"
                      />
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-bold text-blue-400 hover:underline truncate"
                      >
                        {project.repoName}
                      </a>
                    </div>
                    <span className="text-[10px] text-slate-400 border border-slate-800 px-2 py-0.5 rounded-full font-medium shrink-0">
                      Público
                    </span>
                  </div>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/40 mt-auto">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <div className="flex gap-4">
                      <span className="flex items-center gap-1.5">
                        <span
                          className="w-2.5 h-2.5 rounded-full inline-block"
                          style={{ backgroundColor: project.languageColor }}
                        />
                        {project.language}
                      </span>
                      <span className="flex items-center gap-0.5">
                        <Star size={12} className="text-amber-400 fill-amber-400" />
                        {project.stars}
                      </span>
                      <span className="flex items-center gap-0.5">
                        <GitFork size={12} />
                        {project.forks}
                      </span>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 font-semibold text-blue-400 hover:text-blue-300"
                    >
                      Ver Repo <ExternalLink size={11} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-slate-800/80 p-12 rounded-2xl relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/10 blur-[80px] pointer-events-none rounded-full" />
          <h2 className="text-2xl font-bold text-white mb-4 relative z-10">
            ¿Quieres explorar más repositorios?
          </h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto relative z-10">
            Visita mi perfil principal de GitHub para consultar todos mis proyectos, contribuciones de código abierto y desarrollos en curso.
          </p>
          <a
            href="https://github.com/ValladaresCode"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:-translate-y-0.5 relative z-10"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg"
              alt="GitHub"
              className="w-[18px] h-[18px] invert"
            />
            Ver en GitHub
          </a>
        </div>

      </div>

      {/* ================= LIGHTBOX MODAL ================= */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950/95 backdrop-blur-md transition-all duration-300"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 text-slate-400 hover:text-white p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer shadow-lg"
          >
            <X size={20} />
          </button>

          {/* Expanded Image */}
          <div className="max-w-[90%] max-h-[80vh] flex items-center justify-center p-2 relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={barberiaProject.image}
              alt={barberiaProject.title}
              className="max-w-full max-h-[80vh] rounded-xl shadow-2xl border border-slate-800 object-contain animate-in zoom-in-95 duration-200"
            />
          </div>

          {/* Project Details Bottom Bar */}
          <div className="mt-6 text-center max-w-xl px-4" onClick={(e) => e.stopPropagation()}>
            <h4 className="text-lg font-bold text-white mb-1">{barberiaProject.title}</h4>
            <p className="text-xs text-slate-400 leading-relaxed">{barberiaProject.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

