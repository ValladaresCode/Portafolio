import React from 'react';

export default function PortfolioSkills() {
  const skills = [
    { name: 'HTML/CSS', level: 85, category: 'Frontend' },
    { name: 'JavaScript', level: 75, category: 'Frontend' },
    { name: 'React', level: 82, category: 'Frontend' },
    { name: 'React Native', level: 70, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 70, category: 'Frontend' },
    { name: 'Node.js', level: 65, category: 'Backend' },
    { name: 'SQL', level: 85, category: 'Backend' },
    { name: 'JavaFX', level: 78, category: 'Backend' },
    { name: 'MongoDB', level: 75, category: 'Backend' },
    { name: 'Git', level: 75, category: 'Herramientas' },
    { name: 'Responsive Design', level: 80, category: 'Frontend' },
  ];

  const categories = ['Frontend', 'Backend', 'Herramientas'];

  // Se corrigió el slug de visualstudiocode a visual-studio-code
  const tools = [
    { name: 'VS Code', icon: 'https://cdn.simpleicons.org/visual-studio-code/007ACC' },
    { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/FFFFFF' },
    { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman/FF6C37' },
    { name: 'NPM/PNPM', icon: 'https://cdn.simpleicons.org/npm/CB3837' },
    { name: 'Vite', icon: 'https://cdn.simpleicons.org/vite/646CFF' },
    { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
    { name: 'Trello', icon: 'https://cdn.simpleicons.org/trello/0079BF' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white overflow-hidden relative">
      {/* Efectos de luces de fondo (Glow Effects) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        {/* Header */}
        <div className="mb-20 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
            Mis Habilidades
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl">
            Tecnologías y herramientas que estoy desarrollando y aplicando en mis proyectos, con un enfoque junior en crecimiento continuo.
          </p>
        </div>

        {/* Habilidades por Categoría */}
        <div className="space-y-20 mb-24">
          {categories.map((category) => (
            <div key={category} className="group">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-bold tracking-wide text-white group-hover:text-blue-400 transition-colors">
                  {category}
                </h2>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-slate-800 to-transparent" />
              </div>

              {/* Grid de habilidades */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div 
                      key={skill.name} 
                      className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-slate-700/80 transition-all duration-300 hover:translate-x-1 backdrop-blur-sm"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-base font-medium text-slate-200 tracking-wide">
                          {skill.name}
                        </span>
                        <span className="text-sm font-semibold bg-blue-500/10 text-blue-400 px-2.5 py-0.5 rounded-full border border-blue-500/20">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Barra de progreso estilizada */}
                      <div className="relative w-full bg-slate-800 rounded-full h-3 overflow-hidden shadow-inner">
                        <div
                          className="relative bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-full h-full transition-all duration-1000 ease-out shadow-[0_0_12px_rgba(59,130,246,0.5)]"
                          style={{ width: `${skill.level}%` }}
                        >
                          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-semibold text-white/90">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Sección de Otras Herramientas */}
        <div className="relative p-1 md:p-px bg-gradient-to-b from-slate-800 to-slate-900/50 rounded-2xl shadow-2xl">
          <div className="bg-slate-900/90 p-8 md:p-12 rounded-2xl backdrop-blur-md">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Otras Tecnologías y Entornos
              </h3>
              <p className="text-sm text-slate-400">
                Herramientas esenciales en mi flujo de trabajo diario para desarrollo, diseño y despliegue.
              </p>
            </div>
            
            {/* Grid de tarjetas de herramientas con Imagen/Icono */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 flex flex-col items-center justify-center gap-3 hover:border-purple-500/40 hover:bg-slate-950 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:-translate-y-1 transition-all duration-300 group/tool"
                >
                  {/* Contenedor de la Imagen del Icono */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-900/50 p-2 border border-slate-800 group-hover/tool:border-slate-750 transition-colors">
                    <img 
                      src={tool.icon} 
                      alt={`Logo de ${tool.name}`}
                      className="w-full h-full object-contain filter drop-shadow-[0_0_4px_rgba(255,255,255,0.1)] group-hover/tool:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <p className="font-medium text-sm text-slate-400 group-hover/tool:text-purple-300 transition-colors tracking-wide text-center">
                    {tool.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}