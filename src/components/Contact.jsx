import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()

    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const message = form.message.value

    const subject = `Contacto Portfolio - ${name}`
    const body = `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`

    window.location.href = `mailto:valbuenadaniel09@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <section
      id="contacto"
      className="py-28 px-6 scroll-mt-24 relative overflow-hidden"
    >
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.1),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal>
          <SectionTitle
            subtitle="Trabajemos juntos"
            title="Contáctame"
          />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mt-12">
          
          <Reveal>
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight tracking-tight">
                  ¿Tienes una idea, proyecto o propuesta laboral?
                </h3>

                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-10">
                  Estoy disponible para colaboraciones en proyectos web,
                  desarrollo de APIs REST o incorporación a equipos de software. 
                  Iniciemos una conversación para llevar tus ideas al siguiente nivel.
                </p>

                
                <div className="space-y-6 mb-10">
                  <a
                    href="mailto:valbuenadaniel09@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-slate-900/40 hover:bg-slate-800/60 hover:border-cyan-500/30 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                      <FaEnvelope className="text-lg" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">
                        Email
                      </p>
                      <h4 className="font-medium text-gray-200 group-hover:text-cyan-300 transition-colors">
                        valbuenadaniel09@gmail.com
                      </h4>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-slate-900/40">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <FaMapMarkerAlt className="text-lg" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">
                        Ubicación
                      </p>
                      <h4 className="font-medium text-gray-200">
                        Bogotá, Colombia
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              
              <div className="pt-6 border-t border-white/10">
                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">
                  Redes profesionales
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Valbu07"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/5 hover:border-cyan-400/40 text-gray-300 hover:text-white transition-all text-sm"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/daniel-valbuena-rodriguez-69834a25a"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/5 hover:border-cyan-400/40 text-gray-300 hover:text-white transition-all text-sm"
                  >
                    <FaLinkedin /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-2xl space-y-6"
            >
              
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Tu Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Ej. Camila Casallas"
                  className="w-full px-5 py-3.5 rounded-xl bg-slate-950/70 border border-white/10 text-gray-100 placeholder-gray-500 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 text-sm"
                />
              </div>

              
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Tu Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="correo525@ejemplo.com"
                  className="w-full px-5 py-3.5 rounded-xl bg-slate-950/70 border border-white/10 text-gray-100 placeholder-gray-500 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 text-sm"
                />
              </div>

              
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Cuéntame sobre tu proyecto o consulta..."
                  className="w-full px-5 py-3.5 rounded-xl bg-slate-950/70 border border-white/10 text-gray-100 placeholder-gray-500 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 resize-none text-sm"
                />
              </div>

              
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base cursor-pointer"
              >
                <span>Enviar mensaje</span>
                <FaPaperPlane className="text-xs" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Contact