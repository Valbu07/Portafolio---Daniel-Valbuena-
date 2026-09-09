import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Reveal = ({ 
  children, 
  width = '100%', 
  delay = 0,
  duration = 0.7,
  yOffset = 50,
  className = '' 
}) => {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: '-50px',
  })

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className={className}
      initial={{ 
        opacity: 0, 
        y: yOffset, 
        filter: 'blur(8px)' 
      }}
      animate={
        isInView 
          ? { opacity: 1, y: 0, filter: 'blur(0px)' } 
          : { opacity: 0, y: yOffset, filter: 'blur(8px)' }
      }
      transition={{ 
        duration, 
        delay, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal