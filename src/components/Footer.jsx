import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Contacto', href: '#contacto' },
  ]

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: 'https://github.com/Valbu07',
      label: 'GitHub',
    },
    {
      icon: <FaLinkedin />,
      href: 'https://www.linkedin.com/in/daniel-valbuena-rodriguez-69834a25a',
      label: 'LinkedIn',
    },
    {
      icon: <FaEnvelope />,
      href: 'mailto:valbuenadaniel09@gmail.com?subject=Contacto&body=Hola, vi tu portafolio y...',
      label: 'Email',
    },
  ]

  return (
    <footer className="relative border-t border-white/10 bg-slate-950/80 backdrop-blur-md py-12 px-6 overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold tracking-tight text-white mb-1">
              Daniel <span className="text-cyan-400">Valbuena</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Desarrollador Full Stack 
            </p>
          </div>

          
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-cyan-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition-all duration-300 text-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            
            <button
              onClick={scrollToTop}
              aria-label="Volver arriba"
              className="w-10 h-10 rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 flex items-center justify-center transition-all duration-300 ml-2"
            >
              <FaArrowUp className="text-sm" />
            </button>
          </div>
        </div>

        
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Daniel Valbuena. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer