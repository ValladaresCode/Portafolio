import { User, Mail, MapPin, Briefcase, Calendar, Phone, Target, TrendingUp, Rocket } from 'lucide-react';

export default function PortfolioAbout() {
  const generalInfo = [
    { icon: User, label: 'Nombre', value: 'Roger Valladares', color: 'text-blue-400' },
    { icon: Mail, label: 'Email', value: 'rvalladares@kinal.edu.gt', color: 'text-rose-400' },
    { icon: MapPin, label: 'Ubicación', value: 'Guatemala, Ciudad de Guatemala', color: 'text-emerald-400' },
    { icon: Briefcase, label: 'Experiencia', value: '+2 años de desarrollo', color: 'text-amber-400' },
    { icon: Calendar, label: 'Disponibilidad', value: 'Inmediata (Freelance / Full-time)', color: 'text-purple-400' },
    { icon: Phone, label: 'Teléfono', value: '+502 XXXX XXXX', color: 'text-indigo-400' }, // <-- Cambia por tu número real o tu usuario de Discord/Telegram
  ];

  const goals = [
    {
      icon: Target,
      title: 'Corto Plazo',
      description: 'Consolidar mis habilidades en React, optimización del Frontend y profundizar en la integración de interfaces dinámicas.',
      iconColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    },
    {
      icon: TrendingUp,
      title: 'Mediano Plazo',
      description: 'Fortalecer la arquitectura Full Stack dominando el ecosistema de Spring Boot y el diseño estructurado de bases de datos.',
      iconColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    },
    {
      icon: Rocket,
      title: 'Largo Plazo',
      description: 'Desplegar aplicaciones móviles multiplataforma nativas y liderar soluciones digitales optimizadas de extremo a extremo.',
      iconColor: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f1123] text-slate-100 overflow-x-hidden selection:bg-blue-500 selection:text-white">
      {/* Fondo Decorativo Sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-gradient-to-br from-purple-500/5 to-blue-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        
        {/* Header de la Sección */}
        <div className="mb-16 space-y-3">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            Acerca de Mí
          </h1>
          <p className="text-base md:text-lg text-slate-400 border-l-4 border-blue-500 pl-4 max-w-3xl leading-relaxed">
            Desarrollador Full Stack Jr. apasionado por transformar lógicas complejas en interfaces completamente estructuradas, limpias y funcionales.
          </p>
        </div>

        {/* Contenido Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Descripción Personal */}
          <div className="lg:col-span-7 space-y-6 text-left md:text-justify">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              ¿Quién Soy?
            </h2>
            <div className="space-y-4 text-slate-400 text-sm md:text-base leading-relaxed font-normal">
              <p>
                Soy un desarrollador enfocado en el ecosistema web y móvil con un fuerte compromiso por la calidad del código y la experiencia del usuario. Mi formación me permite abordar proyectos desde la maquetación interactiva en el Frontend hasta la persistencia y seguridad de datos en el Backend.
              </p>
              <p>
                Me especializo en traducir requerimientos lógicos en componentes modulares, limpios y fáciles de mantener. Disfruto enfrentando desafíos técnicos que me exijan optimizar el rendimiento de una aplicación o estructurar arquitecturas eficientes.
              </p>
              <p>
                Me mantengo en constante evolución, explorando nuevas herramientas, metodologías ágiles y las mejores prácticas de la industria para garantizar que cada producto digital no solo sea visualmente atractivo, sino técnicamente sólido.
              </p>
            </div>
          </div>

          {/* Tarjeta de Información General */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0e1022]/50 border border-slate-800/80 rounded-2xl p-6 md:p-8 shadow-xl backdrop-blur-sm relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <h2 className="text-2xl font-bold text-white tracking-tight mb-6 relative z-10">
                Información General
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                {generalInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="space-y-1">
                      <div className="flex items-center gap-2 text-slate-500">
                        <Icon size={16} className={item.color} />
                        <span className="text-xs font-semibold tracking-wider uppercase">{item.label}</span>
                      </div>
                      <p className="text-sm font-medium text-slate-300 break-words">
                        {item.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Enlaces Profesionales Card */}
            <div className="bg-[#0e1022]/50 border border-slate-800/80 rounded-2xl p-6 shadow-xl backdrop-blur-sm relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <h2 className="text-xl font-bold text-white tracking-tight mb-4 relative z-10 flex items-center gap-2">
                <Briefcase size={18} className="text-blue-400" />
                Perfiles Profesionales
              </h2>
              
              <div className="flex flex-col gap-3 relative z-10">
                <a
                  href="https://github.com/ValladaresCode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-slate-950/40 border border-slate-800/60 rounded-xl hover:border-slate-500/50 hover:bg-slate-800/20 transition-all duration-300 group/link"
                >
                  <div className="flex items-center gap-2.5">
                    <img 
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg" 
                      alt="GitHub" 
                      className="w-4 h-4 invert opacity-80 group-hover/link:opacity-100 transition-opacity"
                    />
                    <span className="text-xs font-semibold text-slate-300 group-hover/link:text-white transition-colors">GitHub</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium group-hover/link:translate-x-0.5 transition-transform">Ver Repos →</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/roger-valladares-42758b421/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-slate-950/40 border border-slate-800/60 rounded-xl hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300 group/link"
                >
                  <div className="flex items-center gap-2.5">
                    <img 
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg" 
                      alt="LinkedIn" 
                      className="w-4 h-4 brightness-0 sepia-[100%] hue-rotate-[190%] saturate-[500%]"
                    />
                    <span className="text-xs font-semibold text-slate-300 group-hover/link:text-white transition-colors">LinkedIn</span>
                  </div>
                  <span className="text-[11px] text-blue-400 font-medium group-hover/link:translate-x-0.5 transition-transform">Ver Perfil →</span>
                </a>

                <a
                  href="https://candidato.gt.computrabajo.com/candidate/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-slate-950/40 border border-slate-800/60 rounded-xl hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300 group/link"
                >
                  <div className="flex items-center gap-2.5">
                    <Briefcase size={16} className="text-cyan-400" />
                    <span className="text-xs font-semibold text-slate-300 group-hover/link:text-white transition-colors">Computrabajo</span>
                  </div>
                  <span className="text-[11px] text-cyan-400 font-medium group-hover/link:translate-x-0.5 transition-transform">Ver Candidato →</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Sección de Metas y Aspiraciones con Micro-interacciones */}
        <div className="bg-[#0b0c16]/60 border border-slate-900 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <h2 className="text-2xl font-bold text-white tracking-tight mb-8">
            Metas y Aspiraciones
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {goals.map((goal, index) => {
              const Icon = goal.icon;
              return (
                <div 
                  key={index} 
                  className="flex flex-col space-y-4 p-6 rounded-2xl border border-slate-900 bg-[#0e1022]/40 hover:bg-[#0e1022]/80 hover:border-slate-800/80 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  <div className={`w-12 h-12 flex items-center justify-center rounded-xl border ${goal.iconColor}`}>
                    <Icon size={22} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-white text-lg tracking-tight">
                      {goal.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed font-normal">
                      {goal.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}