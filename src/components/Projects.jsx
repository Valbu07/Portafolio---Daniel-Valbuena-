import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { projects } from '../data/data'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  return (
    <section
      id="proyectos"
      className="py-28 px-6 scroll-mt-24 relative overflow-hidden"
    >
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.08),transparent_40%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal>
          <SectionTitle
            subtitle="Mi trabajo"
            title="Proyectos Destacados"
          />
        </Reveal>

        
        <div className="grid grid-cols-1 gap-12 mt-12">
          {projects.map((project) => (
            <Reveal key={project.id}>
              <article className="group grid lg:grid-cols-2 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-xl hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-500">
                
                
                <div className="relative overflow-hidden aspect-video lg:aspect-auto min-h-[260px] lg:min-h-[380px]">
                  <img
                    src={project.image}
                    alt={`Captura de pantalla de ${project.title}`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#020617]/80 opacity-80" />
                </div>

                <div className="p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <span className="text-cyan-400 font-semibold uppercase tracking-[0.2em] text-xs">
                        {project.category || 'Proyecto Web'}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed mb-6 text-base md:text-lg font-normal">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech?.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-xs md:text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/5">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all duration-300 font-semibold text-sm shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]"
                      >
                        <FaExternalLinkAlt className="text-xs" />
                        Demo en vivo
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300 font-medium text-sm"
                      >
                        <FaGithub className="text-base" />
                        Código Fuente
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects