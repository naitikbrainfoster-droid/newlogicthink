import { useEffect, useRef, useState } from 'react'
import img1 from '../../assets/img/ourprocessing1.png'
import img2 from '../../assets/img/ourprocessing2.png'
import img3 from '../../assets/img/ourprocessing3.png'

import './blog.css'

export default function InsightsSection() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        } else {
          setVisible(false) // 👈 reset when out of view
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -120px 0px',
      }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`relative py-28 bg-gradient-to-br from-[#261B48] to-[#10123C] text-white
      ${visible ? 'insights-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= TOP ROW ================= */}
        <div className="grid lg:grid-cols-2 gap-1 items-stretch mb-5">

          <div className="insights-fade">
            <p className="text-[#EAB308] font-semibold mb-3">— Blogs</p>
            <h2 className="text-4xl font-semibold leading-tight mb-6">
              Insights That Drive <br />
              <span className="bg-gradient-to-r from-[#F472B6] to-[#EAB308] bg-clip-text text-transparent">
                Smarter
              </span>{' '}
              Digital Growth
            </h2>
          </div>

          <div className="flex flex-col items-start text-white/80 mb-5 insights-fade">
            <p className="max-w-md text-sm leading-relaxed mb-6">
              Stay ahead in the fast-changing digital landscape with expert
              insights from Logicthink. Our blog covers proven strategies,
              industry trends, and actionable tips designed to help brands
              make informed decisions.
            </p>

            <button className="px-7 py-3 rounded-full bg-gradient-to-r from-[#F472B6] to-[#7C3AED] text-white text-sm">
              View All Projects
            </button>
          </div>
        </div>

        {/* ================= CONTENT GRID ================= */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT IMAGE */}
          <div className="relative rounded-xl overflow-hidden 
            h-[540px] max-w-[520px] mb-5 insights-left">
            <img src={img1} alt="" className="w-full h-full object-cover" />
          </div>

          {/* RIGHT CARDS */}
          <div className="flex flex-col justify-between h-full space-y-8">
            <BlogCard img={img2} tag="Content Marketing" title="Content Strategies Built to Convert" />
            <BlogCard img={img3} tag="Paid Advertising" title="Smarter PPC Strategies for Scale" />
          </div>

        </div>
      </div>
    </section>
  )
}


/* ================= BLOG CARD ================= */

function BlogCard({ img, tag, title }) {
  return (
    <div className="flex h-[270px] bg-[#2B2F55] rounded-2xl overflow-hidden border border-white/10 insights-right">

      <img src={img} alt="" className="w-[240px] h-full object-cover" />

      <div className="p-8 flex flex-col justify-center">
        <p className="text-[#F472B6] text-sm mb-2">{tag}</p>
        <h4 className="font-semibold mb-4 leading-snug">{title}</h4>
        <span className="text-[#EAB308] text-sm cursor-pointer">Read More</span>
      </div>
    </div>
  )
}
