const SectionTitle = ({ 
  title, 
  subtitle, 
  description, 
  centered = true,
  className = '' 
}) => {
  return (
    <div 
      className={`
        mb-16 
        ${centered ? 'text-center' : 'text-left'} 
        ${className}
      `}
    >
      {subtitle && (
        <span className="inline-block text-cyan-400 uppercase tracking-[0.25em] text-xs md:text-sm font-semibold mb-3 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20">
          {subtitle}
        </span>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
        {title}
      </h2>

      {description && (
        <p className={`mt-4 text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}

      <div 
        className={`
          h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mt-4
          ${centered ? 'mx-auto' : ''}
        `}
      />
    </div>
  )
}

export default SectionTitle