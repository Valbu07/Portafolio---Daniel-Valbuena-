import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import valbuenaImg from "../assets/Valbuena2.jpeg"

const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 px-6 scroll-mt-24"
    >
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(34,211,238,0.08),transparent_40%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal>
          <SectionTitle
            subtitle="Sobre mí"
            title="About Me"
          />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center mt-12">
          
          <Reveal>
            <div className="flex justify-center">
              <div className="relative group">
                
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-cyan-400/40 via-blue-500/20 to-transparent blur-md opacity-70 group-hover:opacity-100 transition duration-500" />
                
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-2 border-cyan-400/40 shadow-[0_0_40px_-10px_rgba(34,211,238,0.5)]">
                  <img
                    src={valbuenaImg}
                    alt="Daniel Valbuena Rodríguez"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          
          <Reveal>
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                Desarrollador{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Full Stack
                </span>
              </h3>

              <p className="text-gray-400 leading-relaxed text-lg">
                Desarrollador de software apasionado por construir aplicaciones web modernas, APIs REST y experiencias digitales de alto impacto. Me enfoco en crear soluciones eficientes, escalables y fáciles de mantener, combinando buenas prácticas de desarrollo, código limpio.
              </p>

              <p className="text-gray-400 leading-relaxed text-lg">
                Aprendizaje continuo en{" "}
                <span className="text-cyan-300/90">React</span>,{" "}
                <span className="text-cyan-300/90">Node.js</span>,{" "}
                <span className="text-cyan-300/90">Express</span>,{" "}
                <span className="text-cyan-300/90">TailwindCSS</span>,{" "}
                <span className="text-cyan-300/90">PHP</span>,{" "}
                <span className="text-cyan-300/90">MySQL</span> y{" "}
                <span className="text-cyan-300/90">Python</span>, aplicando
                buenas prácticas de arquitectura, clean code y diseño responsive.
              </p>

              
              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                {[
                  { title: "Backend", desc: "Node.js + Express" },
                  { title: "APIs REST", desc: "JWT + Seguridad" },
                  { title: "Frontend", desc: "React + Tailwind" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-5 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm
                               hover:border-cyan-400/50 hover:bg-cyan-400/5
                               transition-all duration-300"
                  >
                    <h4 className="font-semibold text-white mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="/CV_Daniel_Valbuena_Rodriguez.pdf"
                  download
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full
                             bg-gradient-to-r from-blue-500 to-cyan-500
                             hover:from-cyan-400 hover:to-blue-400
                             text-white font-semibold
                             shadow-[0_0_25px_-5px_rgba(34,211,238,0.6)]
                             hover:shadow-[0_0_35px_-5px_rgba(34,211,238,0.8)]
                             transition-all duration-300"
                >
                  Descargar CV
                </a>

                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full
                             border border-cyan-400/50 text-cyan-300
                             hover:bg-cyan-400/10 hover:border-cyan-400
                             font-medium transition-all duration-300"
                >
                  Contrátame
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About