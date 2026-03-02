import { useEffect, useRef, useState } from 'react'
import arrow from '../../assets/img/ourprocess.svg'
import './ourprocess.css'

export default function OurProcessSection() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        } else {
          setVisible(false) // 👈 jab section bahar jaye, reset
        }
      },
      {
        threshold: 0.3,                 // 30% visible hone pe
        rootMargin: '0px 0px -100px 0px'
      }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`relative py-32 bg-gradient-to-br from-[#261B48] to-[#10123C]
        ${visible ? 'process-visible' : ''}`}
    >
      {/* ================= HEADER ================= */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-24">
        <p className="text-[#EAB308] font-bold mb-4">— Our Process</p>

        <h2 className="text-[48px] font-bold text-white mb-6">
          A Clear{' '}
          <span className="bg-gradient-to-r from-[#F472B6] to-[#EAB308] bg-clip-text text-transparent">
            Path
          </span>{' '}
          To Digital Success
        </h2>

        <p className="max-w-3xl mx-auto text-white/80 text-[15px] leading-relaxed">
          At Logicthink Solutions, our workflow is designed to deliver clarity,
          efficiency, and measurable results.
        </p>
      </div>

      {/* ================= PROCESS ROW ================= */}
      <div className="relative max-w-6xl mx-auto px-0">
        <div className="relative grid grid-cols-4 gap-16 ourprocess-grid">

          <ProcessCard number="01" title="Discover & Research" direction="left" />
          <ProcessCard number="02" title="Strategy & Planning" direction="left" />
          <ProcessCard number="03" title="Execute & Launch" direction="right" />
          <ProcessCard number="04" title="Optimize & Scale" direction="right" />

          <Arrow className="left-[21.2%]" />
          <Arrow className="left-[47.5%]" />
          <Arrow className="left-[74%]" />
        </div>
      </div>
    </section>
  )
}


function ProcessCard({ number, title, direction }) {
  return (
    <div
      className={`overflow-hidden
      bg-[#2E335E]/80 border border-white/70
      rounded-2xl px-6 pt-12 pb-12 text-center
      min-h-[20px]
      process-card slide-${direction}`}
    >
      <span className="process-card-overlay"></span>

      <div className="absolute -top-0 left-1/2 -translate-x-1/2
        bg-[#EAB308] text-black text-sm font-bold
        px-5 py-1 rounded-md shadow-lg">
        {number}
      </div>

      <h3 className="text-white text-xl font-semibold mb-4">{title}</h3>

      <p className="text-white/70 text-sm leading-relaxed">
        Class aptent taciti sociosqu ad litora torquent per conubia nostra
      </p>
    </div>
  )
}



/* ================= ARROW ================= */
function Arrow({ className }) {
  return (
    <img
      src={arrow}
      alt=""
      className={`absolute top-1/2 -translate-y-1/2 w-14 h-14 ourprocess-arrow ${className}`}
    />
  )
}
