import { ExternalLink, Globe2 } from 'lucide-react';

export default function PortfolioProjects() {
  const projects = [
    {
      id: 1,
      title: 'Plataforma de Barbería',
      description:
        'Sistema completo para gestión de barbería con reservas, catálogo de cortes y administración.',
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'SQL'],
      image: '🏪',
      link: 'https://github.com',
      skills: ['Frontend', 'Backend', 'Bases de Datos', 'Autenticación'],
    },
    {
      id: 2,
      title: 'E-commerce de Productos',
      description:
        'Tienda online con carrito de compras, búsqueda avanzada y panel de administración.',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'API REST'],
      image: '🛍️',
      link: 'https://github.com',
      skills: ['React Hooks', 'State Management', 'API Integration'],
    },
    {
      id: 3,
      title: 'App de Tareas Colaborativa',
      description:
        'Aplicación para gestionar tareas en equipo con asignación de responsables y seguimiento.',
      technologies: ['React', 'Tailwind CSS', 'Zustand', 'Firebase'],
      image: '✅',
      link: 'https://github.com',
      skills: ['React', 'State Management', 'Real-time Updates'],
    },
    {
      id: 4,
      title: 'Dashboard Analytics',
      description:
        'Panel de control con gráficos interactivos para visualizar datos en tiempo real.',
      technologies: ['React', 'Chart.js', 'Tailwind CSS', 'API'],
      image: '📊',
      link: 'https://github.com',
      skills: ['Visualización de Datos', 'Responsivo', 'Performance'],
    },
    {
      id: 5,
      title: 'Red Social',
      description:
        'Plataforma social con publicaciones, comentarios, likes y sistema de seguimiento.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      image: '💬',
      link: 'https://github.com',
      skills: ['Full Stack', 'Real-time', 'User Authentication'],
    },
    {
      id: 6,
      title: 'Blog Personal',
      description:
        'Blog con sistema de categorías, búsqueda y comentarios para compartir conocimiento.',
      technologies: ['React', 'Tailwind CSS', 'Markdown', 'SEO'],
      image: '📝',
      link: 'https://github.com',
      skills: ['Frontend', 'CMS', 'SEO Optimization'],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Mis Proyectos
          </h1>
          <p className="text-xl text-slate-600">
            Proyectos destacados que demuestran mis habilidades
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                <span className="text-6xl">{project.image}</span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <p className="text-xs text-slate-500 font-semibold mb-2">
                    HABILIDADES APLICADAS
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs text-slate-600 bg-slate-200 px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-slate-200">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 flex-1 justify-center px-3 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm font-semibold"
                  >
                    <Globe2 size={16} />
                    GitHub
                  </a>
                  <button className="flex items-center gap-2 flex-1 justify-center px-3 py-2 border border-slate-300 text-slate-900 rounded-lg hover:bg-slate-100 transition-colors text-sm font-semibold">
                    <ExternalLink size={16} />
                    Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 p-12 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">
            ¿Más proyectos?
          </h2>
          <p className="text-slate-600 mb-6">
            Visita mi GitHub para ver más proyectos y colaboraciones
          </p>
          <a
            href="https://github.com/ValladaresCode"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
          >
            <Globe2 size={20} />
            Ver en GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
