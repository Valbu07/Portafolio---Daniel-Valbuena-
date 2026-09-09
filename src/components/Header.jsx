import { useEffect, useState, useRef } from 'react'
import { navLinks } from '../data/data'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('inicio')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  const headerRef = useRef(null)
  const mobileMenuRef = useRef(null)

  // Scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      setScrolled(scrollY > 60)

      const winScroll = document.documentElement.scrollTop
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight

      setScrollProgress(
        height > 0 ? (winScroll / height) * 100 : 0
      )
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Detectar sección activa
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    }

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(
      handleIntersect,
      observerOptions
    )

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id)

      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  // Cerrar menú al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedHeader = headerRef.current?.contains(event.target)
      const clickedMenu = mobileMenuRef.current?.contains(event.target)

      if (!clickedHeader && !clickedMenu) {
        setMenuOpen(false)
      }
    }

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('touchstart', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [menuOpen])

  // Cerrar menú cuando cambia a desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleNavClick = (id) => {
    setActive(id)
    setMenuOpen(false)
  }

  return (
    <>
      {/* Barra de progreso */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 z-[60] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* HEADER */}
      <header
        ref={headerRef}
        className={`
          fixed z-50 left-1/2 -translate-x-1/2
          transition-all duration-500
          ease-[cubic-bezier(0.32,0.72,0,1)]
          ${
            scrolled
              ? `
                top-4
                w-[min(92%,440px)]
                rounded-full
                bg-[#020617]/85
                backdrop-blur-2xl
                border border-white/10
                shadow-[0_8px_32px_rgba(0,0,0,0.5)]
              `
              : `
                top-0
                w-full
                rounded-none
                bg-[#020617]/80
                backdrop-blur-xl
                border-b border-white/5
                shadow-lg shadow-black/20
              `
          }
        `}
      >
        {/* NAVBAR */}
        <div
          className={`
            mx-auto flex items-center justify-between
            transition-all duration-500
            ${
              scrolled
                ? 'h-12 px-4'
                : 'h-[72px] max-w-7xl px-5 sm:px-6'
            }
          `}
        >
          {/* LOGO */}
          <a
            href="#inicio"
            onClick={() => handleNavClick('inicio')}
            className={`
              font-black tracking-tight
              transition-all duration-500
              text-white hover:opacity-90
              ${scrolled ? 'text-lg' : 'text-2xl sm:text-3xl'}
            `}
          >
            Daniel
            <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
              .
            </span>
          </a>

          {/* DESKTOP NAV */}
          <nav
            className={`
              hidden md:flex items-center
              transition-all duration-500
              ${scrolled ? 'gap-1' : 'gap-2'}
            `}
          >
            {navLinks.map((link) => {
              const isActive = active === link.id

              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  aria-current={isActive ? 'page' : undefined}
                  className={`
                    relative font-medium rounded-full
                    transition-all duration-300
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-cyan-400/50

                    ${scrolled
                      ? 'px-3 py-1 text-xs'
                      : 'px-4 py-2 text-sm'
                    }

                    ${
                      isActive
                        ? `
                          text-cyan-400
                          bg-cyan-400/15
                          shadow-[inset_0_0_12px_rgba(34,211,238,0.15)]
                          border border-cyan-400/20
                        `
                        : `
                          text-gray-300
                          hover:text-cyan-300
                          hover:bg-white/5
                          border border-transparent
                        `
                    }
                  `}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`
              md:hidden
              flex items-center justify-center
              p-2
              rounded-lg
              transition-all duration-300
              text-gray-300
              hover:text-cyan-400
              hover:bg-white/5
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-cyan-400/50
              ${scrolled ? 'text-lg' : 'text-xl'}
            `}
            aria-label={
              menuOpen ? 'Cerrar menú' : 'Abrir menú'
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        ref={mobileMenuRef}
        className={`
          md:hidden
          fixed
          z-40
          left-1/2
          -translate-x-1/2
          transition-all duration-300
          ease-out

          ${
            scrolled
              ? `
                top-[68px]
                w-[min(92%,360px)]
              `
              : `
                top-[72px]
                w-full
              `
          }

          ${
            menuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-3 pointer-events-none'
          }
        `}
      >
        <div
          className={`
            bg-[#020617]/95
            backdrop-blur-2xl
            border border-white/10
            shadow-2xl
            overflow-hidden

            ${
              scrolled
                ? 'rounded-2xl p-3'
                : 'rounded-none border-x-0 border-b border-white/10 p-4'
            }
          `}
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.id

              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`
                    font-medium
                    rounded-xl
                    transition-all duration-200

                    ${
                      scrolled
                        ? 'text-sm px-4 py-2.5'
                        : 'text-base px-4 py-3'
                    }

                    ${
                      isActive
                        ? `
                          text-cyan-400
                          bg-cyan-400/15
                          border border-cyan-400/20
                        `
                        : `
                          text-gray-300
                          hover:text-cyan-400
                          hover:bg-white/5
                          border border-transparent
                        `
                    }
                  `}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header