export default function PortfolioAbout() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Acerca de Mí
          </h1>
          <p className="text-xl text-slate-600 border-l-4 border-blue-600 pl-4">
            Desarrollador Web Full Stack apasionado por crear soluciones digitales
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Descripción */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              ¿Quién Soy?
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Soy un desarrollador web con pasión por crear interfaces limpias,
              intuitivas y funcionales. Me especializo en transformar diseños en código
              de calidad, utilizando las mejores prácticas de desarrollo.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Mi objetivo es crear soluciones que no solo sean visualmente atractivas,
              sino también eficientes y escalables. Me encanta aprender nuevas
              tecnologías y mantenerme actualizado con las tendencias del desarrollo web.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Cuando no estoy programando, me gusta colaborar en proyectos open source
              y compartir conocimiento con la comunidad de desarrolladores.
            </p>
          </div>

          {/* Info General */}
          <div className="bg-slate-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">
              Información General
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-slate-600 font-semibold">Nombre</p>
                <p className="text-slate-900">Tu Nombre Aquí</p>
              </div>
              <div>
                <p className="text-slate-600 font-semibold">Email</p>
                <p className="text-slate-900">tu@email.com</p>
              </div>
              <div>
                <p className="text-slate-600 font-semibold">Ubicación</p>
                <p className="text-slate-900">Tu Ciudad, País</p>
              </div>
              <div>
                <p className="text-slate-600 font-semibold">Experiencia</p>
                <p className="text-slate-900">2+ años en desarrollo web</p>
              </div>
              <div>
                <p className="text-slate-600 font-semibold">Estado Actual</p>
                <p className="text-slate-900">Disponible para nuevos proyectos</p>
              </div>
              <div>
                <p className="text-slate-600 font-semibold">Teléfono</p>
                <p className="text-slate-900">+1 (XXX) XXX-XXXX</p>
              </div>
            </div>
          </div>
        </div>

        {/* Metas y Aspiraciones */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-12 rounded-lg">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">
            Metas y Aspiraciones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                emoji: '🎯',
                title: 'Corto Plazo',
                description: 'Consolidar mis habilidades en React y especializarme en desarrollo frontend moderno.',
              },
              {
                emoji: '📈',
                title: 'Mediano Plazo',
                description: 'Convertirme en un desarrollador Full Stack competente y contribuir a proyectos impactantes.',
              },
              {
                emoji: '🚀',
                title: 'Largo Plazo',
                description: 'Liderar equipos de desarrollo y crear productos que hagan diferencia en el mundo.',
              },
            ].map((goal) => (
              <div key={goal.title}>
                <div className="text-3xl mb-3">{goal.emoji}</div>
                <h3 className="font-semibold mb-2">{goal.title}</h3>
                <p className="text-slate-700">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
