export default function PortfolioSkills() {
  const skills = [
    { name: 'HTML/CSS', level: 95, category: 'Frontend' },
    { name: 'JavaScript', level: 90, category: 'Frontend' },
    { name: 'React', level: 85, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 88, category: 'Frontend' },
    { name: 'Node.js', level: 75, category: 'Backend' },
    { name: 'SQL', level: 80, category: 'Backend' },
    { name: 'Git', level: 85, category: 'Herramientas' },
    { name: 'Responsive Design', level: 90, category: 'Frontend' },
  ];

  const categories = ['Frontend', 'Backend', 'Herramientas'];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Mis Habilidades
          </h1>
          <p className="text-xl text-slate-600">
            Tecnologías y herramientas que domino
          </p>
        </div>

        {/* Skills por Categoría */}
        {categories.map((category) => (
          <div key={category} className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">
              {category}
            </h2>

            <div className="space-y-6">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-semibold text-slate-900">
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-blue-600">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%`, height: '0.75rem' }}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}

        {/* Herramientas Adicionales */}
        <div className="bg-slate-50 p-12 rounded-lg">
          <h2 className="text-2xl font-semibold text-slate-900 mb-8">
            Herramientas y Tecnologías
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'VS Code',
              'GitHub',
              'Figma',
              'Chrome DevTools',
              'Postman',
              'NPM/PNPM',
              'Vite',
              'Docker',
            ].map((tool) => (
              <div
                key={tool}
                className="bg-white p-4 rounded-lg border border-slate-200 text-center hover:shadow-md transition-shadow"
              >
                <p className="font-semibold text-slate-900">{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
