import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Globe2, Briefcase } from 'lucide-react';

export default function PortfolioContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    // Resetear formulario
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contacto
          </h1>
          <p className="text-xl text-slate-600">
            ¿Tienes un proyecto en mente? Me encantaría escucharte
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Info Cards */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Mail size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold">Email</h3>
            </div>
            <p className="text-slate-700">tu@email.com</p>
            <p className="text-slate-600 text-sm mt-2">Respondo en 24 horas</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                <Phone size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold">Teléfono</h3>
            </div>
            <p className="text-slate-700">+1 (XXX) XXX-XXXX</p>
            <p className="text-slate-600 text-sm mt-2">Lunes a Viernes, 9am-6pm</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                <MapPin size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold">Ubicación</h3>
            </div>
            <p className="text-slate-700">Tu Ciudad, País</p>
            <p className="text-slate-600 text-sm mt-2">Disponible para trabajo remoto</p>
          </div>
        </div>

        {/* Contact Form and Social */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">
              Envíame un mensaje
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-slate-900 mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-900 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-slate-900 mb-2"
                >
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Asunto del mensaje"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-slate-900 mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Tu mensaje..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">
              Sígueme en redes sociales
            </h2>
            <p className="text-slate-700 mb-8">
              Conecta conmigo en mis redes sociales profesionales para seguir mis
              últimos proyectos y actualizaciones.
            </p>

            <div className="space-y-4">
              <a
                href="https://www.linkedin.com/in/roger-valladares-42758b421/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-slate-300 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-colors group"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Globe2
                    size={24}
                    className="text-slate-900 group-hover:text-white transition-colors"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">LinkedIn</h3>
                  <p className="text-slate-600 text-sm">Sígueme en LinkedIn</p>
                </div>
              </a>

              <a
                href="https://github.com/ValladaresCode"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-slate-300 rounded-lg hover:border-slate-900 hover:bg-slate-50 transition-colors group"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-slate-900 transition-colors">
                  <Globe2
                    size={24}
                    className="text-slate-900 group-hover:text-white transition-colors"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">GitHub</h3>
                  <p className="text-slate-600 text-sm">Ver mis repositorios</p>
                </div>
              </a>

              <a
                href="https://candidato.gt.computrabajo.com/candidate/home"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-slate-300 rounded-lg hover:border-cyan-600 hover:bg-cyan-50 transition-colors group"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-cyan-600 transition-colors">
                  <Briefcase
                    size={24}
                    className="text-slate-900 group-hover:text-white transition-colors"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Computrabajo</h3>
                  <p className="text-slate-600 text-sm">Ver mi perfil de Computrabajo</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
