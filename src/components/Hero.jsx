import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa'
import { HiOutlineSparkles } from 'react-icons/hi'
import valbuenaImg from "../assets/Valbuena.JPEG"

const roles = [
  'Desarrollador Full Stack',
  'Frontend ',
  'Backend',
]

const Hero = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === roles.length - 1 ? 0 : prev + 1))
    }, 2800)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="inicio"
      className="min-h-[90vh] flex items-center justify-center scroll-mt-24 relative overflow-hidden py-12 md:py-0"
    >
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 grid md:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10 w-full">
        
        <motion.div
          className="order-2 md:order-1 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md"
          >
            <HiOutlineSparkles className="text-cyan-400 animate-pulse" />
            <span>Disponible para proyectos</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-4">
            Soy Daniel{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">
              Valbuena
            </span>
          </h1>

          
          <div className="h-12 sm:h-14 mb-4 flex items-center">
            <AnimatePresence mode="wait">
              <motion.h2
                key={roles[index]}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-200 flex items-center gap-3"
              >
                <FaCode className="text-cyan-400 text-xl sm:text-2xl" />
                <span className="text-cyan-400">{roles[index]}</span>
              </motion.h2>
            </AnimatePresence>
          </div>

          
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
            Desarrollador de software especializado en el desarrollo de aplicaciones web modernas con <span className="text-cyan-300 font-medium">React, Node.js, Express y MySQL</span>. Apasionado por construir soluciones escalables y eficientes, aplicando buenas prácticas de desarrollo, código limpio y un enfoque constante en rendimiento, seguridad y experiencia de usuario.
          </p>

          
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#contacto"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              Hablemos
            </a>
            <a
              href="#proyectos"
              className="px-8 py-3.5 rounded-full border border-gray-700 hover:border-cyan-400/50 hover:bg-slate-800/50 text-gray-300 hover:text-white font-medium transition-all duration-300 backdrop-blur-sm"
            >
              Ver proyectos
            </a>
          </div>

          
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold mr-2">Sígueme</span>
            {[
              { icon: <FaGithub />, href: "https://github.com/Valbu07", label: "GitHub" },
              { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/daniel-valbuena-rodriguez-69834a25a", label: "LinkedIn", target: "_blank" },
              { icon: <FaEnvelope />, href: "mailto:valbuenadaniel09@gmail.com?subject=Contacto&body=Hola, vi tu portafolio y...", label: "Email" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target={social.target || "_self"}
                rel="noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center relative"
        >
          <div className="relative group">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-30 blur-2xl group-hover:opacity-60 transition duration-700" />

            <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] rounded-full p-1 bg-gradient-to-b from-cyan-400/50 to-blue-600/20 border border-cyan-400/30 overflow-hidden shadow-2xl">
              <img
                src={valbuenaImg}
                alt="Daniel Valbuena"
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition duration-500"
              />
            </div>

            
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-2 -left-4 sm:bottom-4 sm:left-0 bg-slate-900/90 border border-cyan-500/30 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl flex items-center gap-3 z-20"
            >
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs font-semibold text-gray-200">Full Stack Focus</span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero