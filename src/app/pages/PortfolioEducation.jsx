import { BookOpen, Briefcase } from 'lucide-react';

export default function PortfolioEducation() {
  const education = [
    {
      id: 1,
      degree: 'Técnico en Desarrollo de Software',
      institution: 'Instituto Técnico Nacional',
      year: '2022 - 2024',
      description: 'Formación en desarrollo web, programación y gestión de bases de datos.',
      skills: ['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'SQL'],
    },
    {
      id: 2,
      degree: 'Diplomado en Desarrollo Web',
      institution: 'Plataforma Educativa Online',
      year: '2023',
      description: 'Especialización en React, Tailwind CSS y mejores prácticas de desarrollo.',
      skills: ['React Hooks', 'Estado Global', 'Tailwind CSS'],
    },
  ];

  const experience = [
    {
      id: 1,
      position: 'Prácticas Profesionales',
      company: 'Tech Solutions Inc.',
      year: '2024',
      description:
        'Desarrollo de componentes React reutilizables y optimización de rendimiento en aplicaciones web.',
      achievements: [
        'Creación de 15+ componentes React',
        'Mejora de performance en 40%',
        'Implementación de mejores prácticas',
      ],
    },
    {
      id: 2,
      position: 'Desarrollador Junior',
      company: 'Digital Agency',
      year: 'Actual',
      description:
        'Desarrollo de sitios web y aplicaciones responsive utilizando React y Tailwind CSS.',
      achievements: [
        'Desarrollo de 5+ proyectos exitosos',
        'Colaboración con diseñadores UI/UX',
        'Soporte y mantenimiento de aplicaciones',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Educación y Experiencia
          </h1>
          <p className="text-xl text-slate-600">
            Mi formación académica y trayectoria profesional
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Educación */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <BookOpen size={28} className="text-blue-600" />
              <h2 className="text-3xl font-semibold">Educación</h2>
            </div>

            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="relative pl-8 pb-8"
                  style={{
                    borderLeft: '2px solid #e2e8f0',
                  }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full -translate-x-[9px]" />

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-600 font-semibold mt-1">
                      {edu.institution}
                    </p>
                    <p className="text-slate-500 text-sm mt-1">{edu.year}</p>
                    <p className="text-slate-700 mt-3">{edu.description}</p>

                    {/* Skills */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {edu.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
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

          {/* Experiencia */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase size={28} className="text-purple-600" />
              <h2 className="text-3xl font-semibold">Experiencia</h2>
            </div>

            <div className="space-y-6">
              {experience.map((exp) => (
                <div
                  key={exp.id}
                  className="relative pl-8 pb-8"
                  style={{
                    borderLeft: '2px solid #e2e8f0',
                  }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-4 h-4 bg-purple-600 rounded-full -translate-x-[9px]" />

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {exp.position}
                    </h3>
                    <p className="text-purple-600 font-semibold mt-1">
                      {exp.company}
                    </p>
                    <p className="text-slate-500 text-sm mt-1">{exp.year}</p>
                    <p className="text-slate-700 mt-3">{exp.description}</p>

                    {/* Achievements */}
                    <ul className="mt-4 space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-slate-700 flex items-start">
                          <span className="text-purple-600 mr-2">✓</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resume CTA */}
        <div className="mt-16 text-center bg-slate-50 p-12 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">
            ¿Quieres ver mi CV completo?
          </h3>
          <p className="text-slate-600 mb-6">
            Descarga mi currículum para más detalles de mi experiencia
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            <BookOpen size={20} />
            Descargar CV
          </button>
        </div>
      </div>
    </div>
  );
}
