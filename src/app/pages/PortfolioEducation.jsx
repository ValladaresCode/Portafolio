import { useState } from 'react';
import { BookOpen, Code2, Brain, Calendar, CheckCircle2, Download, X } from 'lucide-react';

export default function PortfolioEducation() {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const education = [
    {
      id: 1,
      degree: 'Diversificado (Informática)',
      institution: 'Centro Educativo Técnico Laboral Kinal',
      year: '2024 - 2026',
      description: 'Formación técnica avanzada centrada en la ingeniería de software frontend, metodologías ágiles de programación, lógica de desarrollo estructurado y administración de bases de datos.',
      skills: ['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'SQL', 'Java'],
    },
    {
      id: 2,
      degree: 'Pre-Primaria, Primaria y Básicos',
      institution: 'Centro Educativo Lincoln',
      year: '2013 - 2023',
      description: 'Estudios de educación fundamental y ciclo básico, desarrollando las competencias lógicas y de comunicación base para la formación técnica.',
      skills: ['Formación Base', 'Lógica', 'Comunicación'],
    },
  ];

  const conocimientos = [
    'Junior en POO',
    'JavaFx',
    'HTML y CSS',
    'Conocimiento en .NET',
    'MySQL',
    'MongoDB',
    'Flujo de trabajo / Git',
    'Marco de trabajo SCRUM',
    'Gestión de proyectos en GitHub',
    'Paquetería de Office 365',
    'Herramientas digitales (Teams, Zoom, Meet)'
  ];

  const habilidades = [
    'Extrovertido',
    'Adaptabilidad',
    'Atención al cliente',
    'Trabajo en equipo',
    'Resolución de problemas',
    'Manejo del estrés',
    'Trabajo bajo presión',
    'Manejo del tiempo'
  ];

  return (
    <div className="min-h-screen bg-[#0f1123] text-slate-100 overflow-x-hidden selection:bg-blue-500 selection:text-white">
      {/* Fondo Decorativo Sutil */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-tr from-blue-500/5 to-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        
        {/* Header de la Sección */}
        <div className="mb-16 flex flex-col md:flex-row items-center md:items-start gap-8">
          <button
            type="button"
            onClick={() => setIsImageOpen(true)}
            className="group w-28 h-28 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-slate-950/40 shrink-0 bg-slate-900/60 cursor-zoom-in"
          >
            <img
              src="/src/assets/img/FotoPerfil.png"
              alt="Foto de perfil"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
              style={{ imageRendering: 'auto', objectPosition: 'center' }}
            />
          </button>
          <div className="space-y-3 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
              Educación y Competencias
            </h1>
            <p className="text-base md:text-lg text-slate-400 border-l-4 border-purple-500 pl-4 max-w-2xl leading-relaxed">
              Mi trayectoria académica junto al conjunto de herramientas tecnológicas y habilidades interpersonales que manejo.
            </p>
          </div>
        </div>

        {/* Grid Dual: Historial Académico vs Conocimientos/Habilidades */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Bloque Educación */}
          <div className="space-y-10">
            <div className="flex items-center gap-3 border-b border-slate-800/60 pb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50/10 flex items-center justify-center border border-blue-500/20">
                <BookOpen size={22} className="text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Historial Académico</h2>
            </div>

            <div className="relative border-l-2 border-slate-800/80 ml-4 space-y-12">
              {education.map((edu) => (
                <div key={edu.id} className="relative pl-8 group">
                  {/* Punto indicador de la línea de tiempo */}
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#0f1123] border-2 border-blue-500 group-hover:border-blue-400 transition-colors duration-300 ring-4 ring-blue-500/10 group-hover:ring-blue-500/30" />
                  
                  {/* Contenedor tipo Tarjeta */}
                  <div className="bg-[#0e1022]/40 border border-slate-900/60 rounded-2xl p-6 transition-all duration-300 hover:bg-[#0e1022]/80 hover:border-slate-800/80 hover:-translate-y-0.5 shadow-xl">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors duration-300 text-left">
                        {edu.degree}
                      </h3>
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-900/50 px-2.5 py-1 rounded-md border border-slate-800/40 whitespace-nowrap">
                        <Calendar size={12} className="text-blue-400" />
                        {edu.year}
                      </span>
                    </div>

                    <p className="text-sm font-semibold text-blue-400/90 mb-3 text-left">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed font-normal mb-4 text-left md:text-justify">
                      {edu.description}
                    </p>

                    {/* Tags de Skills */}
                    <div className="flex flex-wrap gap-1.5">
                      {edu.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-medium bg-blue-500/5 border border-blue-500/10 text-blue-300 px-2.5 py-0.5 rounded-md tracking-wide"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bloque Conocimientos y Habilidades */}
          <div className="space-y-12">
            
            {/* Sub-bloque Conocimientos */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800/60 pb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50/10 flex items-center justify-center border border-purple-500/20">
                  <Code2 size={22} className="text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">Conocimientos</h2>
              </div>
              
              <div className="bg-[#0e1022]/40 border border-slate-900/60 rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-3 shadow-xl">
                {conocimientos.map((item, idx) => (
                  <div key={idx} className="text-xs md:text-sm text-slate-300 flex items-center gap-2 font-normal text-left">
                    <CheckCircle2 size={14} className="text-purple-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sub-bloque Habilidades */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800/60 pb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50/10 flex items-center justify-center border border-emerald-500/20">
                  <Brain size={22} className="text-emerald-400" />
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">Habilidades</h2>
              </div>
              
              <div className="bg-[#0e1022]/40 border border-slate-900/60 rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-3 shadow-xl">
                {habilidades.map((item, idx) => (
                  <div key={idx} className="text-xs md:text-sm text-slate-300 flex items-center gap-2 font-normal text-left">
                    <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Sección de Llamado a la Acción (CV CTA) */}
        <div className="mt-24 bg-[#0b0c16]/60 border border-slate-900 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden text-center max-w-4xl mx-auto group">
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-6 max-w-xl mx-auto">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                ¿Quieres revisar mi perfil completo?
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed font-normal">
                Explora mi currículum interactivo en formato digital para conocer en profundidad mi stack técnico, proyectos y metodologías de trabajo.
              </p>
            </div>
            
            <a
              href="https://canva.link/874y15wu0yc3auf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-purple-900/20 hover:shadow-purple-900/40 hover:-translate-y-0.5"
            >
              <Download size={16} />
              Ver CV en Canva
            </a>
          </div>
        </div>

      </div>

      {isImageOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
          onClick={() => setIsImageOpen(false)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              type="button"
              onClick={() => setIsImageOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 transition-colors"
              aria-label="Cerrar imagen"
            >
              <X size={20} />
            </button>
            <img
              src="/src/assets/img/FotoPerfil.png"
              alt="Foto de perfil ampliada"
              className="w-full h-auto max-h-[85vh] object-contain rounded-2xl border border-slate-700 shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}