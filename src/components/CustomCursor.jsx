// src/components/CustomCursor.jsx
import { useEffect, useState } from 'react'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 })
  const [visible, setVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    // Escuchar el movimiento del mouse
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }

    const handleMouseLeave = () => setVisible(false)
    const handleMouseEnter = () => setVisible(true)
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    // Detección de elementos interactivos (links, botones)
    const handleMouseOver = (e) => {
      const target = e.target
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [visible])

  // Animación fluida con Lerp para el anillo exterior
  useEffect(() => {
    let animationFrameId
    const followCursor = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }))
      animationFrameId = requestAnimationFrame(followCursor)
    }
    
    animationFrameId = requestAnimationFrame(followCursor)
    return () => cancelAnimationFrame(animationFrameId)
  }, [position])

  // Desactivar en pantallas táctiles / móviles
  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null
  }

  return (
    <>
      
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-cyan-400 transition-opacity duration-300 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          width: isHovered ? '8px' : '6px',
          height: isHovered ? '8px' : '6px',
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${
            isClicking ? 0.7 : 1
          })`,
          transitionProperty: 'width, height, transform, opacity',
          transitionDuration: '150ms',
        }}
      />

      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-cyan-400/50 bg-cyan-400/10 backdrop-blur-[1px] transition-opacity duration-300 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          width: isHovered ? '48px' : '32px',
          height: isHovered ? '48px' : '32px',
          borderColor: isHovered ? 'rgba(34, 211, 238, 0.9)' : 'rgba(34, 211, 238, 0.4)',
          backgroundColor: isHovered ? 'rgba(34, 211, 238, 0.15)' : 'transparent',
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%) scale(${
            isClicking ? 0.85 : 1
          })`,
          transitionProperty: 'width, height, border-color, background-color, transform, opacity',
          transitionDuration: '200ms',
        }}
      />
    </>
  )
}

export default CustomCursor