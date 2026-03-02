import { motion } from 'framer-motion'

const text = 'Digital Performance Engine'

export default function PerformanceStrip() {
  return (
    <div className="relative w-full -mt-4 z-20">

      {/* FLOATING TEXT WITH BLUR LETTER ANIMATION */}
      <h2
        className="
          absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2
          text-center font-bold uppercase tracking-widest
          text-3xl sm:text-4xl md:text-5xl lg:text-7xl
          text-[#C7CBD6]
          whitespace-nowrap
          z-30
        "
        style={{
          WebkitMaskImage:
            'linear-gradient(to bottom, black 55%, transparent 100%)',
          maskImage:
            'linear-gradient(to bottom, black 55%, transparent 100%)'
        }}
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            initial={{ opacity: 0, filter: 'blur(8px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{
              delay: index * 0.08,
              duration: 0.6,
              ease: 'easeOut'
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </h2>

      {/* BLUE STRIP – UNCHANGED */}
      <div
        className="w-full py-16 md:py-15"
        style={{ backgroundColor: '#10123C' }}
      />
    </div>
  )
}
