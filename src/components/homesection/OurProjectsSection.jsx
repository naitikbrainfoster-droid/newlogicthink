import { useEffect, useRef, useState } from 'react'
import projectBg from '../../assets/img/projectbg1.png'

import project1 from '../../assets/img/projectimg1.png'
import project2 from '../../assets/img/projectimg2.png'
import project3 from '../../assets/img/projectimg3.png'
import project4 from '../../assets/img/projectimg4.png'
import './ourproject.css'

export default function OurProjectsSection() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        } else {
          setVisible(false) // 👈 reset so animation runs again
        }
      },
      {
        threshold: 0.25,
        rootMargin: '0px 0px -120px 0px',
      }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`relative py-32 overflow-hidden ${visible ? 'projects-visible' : ''}`}
    >
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${projectBg})` }}
      />
      <div className="absolute inset-0" />

      <div className="relative max-w-7xl mx-auto px-8">

        {/* ================= HEADER ================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20 projects-fade">

          <div>
            <p className="text-[#EAB308] font-medium mb-4">— Our Projects</p>
            <h2 className="text-[42px] leading-tight text-white font-medium">
              Projects That Turn <span className="text-[#EAB308]">Strategy</span> into Results
            </h2>
          </div>

          <div>
            <p className="text-white/80 text-[15px] leading-relaxed mb-6 max-w-md">
              We partner with forward-thinking brands to create high-impact
              digital marketing solutions.
            </p>

            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-[#F472B6] to-[#EAB308] text-white text-sm font-medium">
              View All Projects
            </button>
          </div>
        </div>

        {/* ================= PROJECT GRID ================= */}
        <div className="grid lg:grid-cols-2 gap-10">
          <ProjectCard img={project1} tag="Performance Marketing" title="E-Commerce Growth Campaign" desc="A data-driven performance campaign focused on increasing conversions and scaling revenue through paid ads." direction="left" />
          <ProjectCard img={project2} tag="SEO & Content Strategy" title="Brand Visibility & SEO Expansion" desc="Improved organic visibility and search rankings with a long-term SEO and content marketing strategy." direction="right" />
          <ProjectCard img={project3} tag="Lead Generation" title="Lead Generation Funnel" desc="Built a high-converting funnel combining landing pages, paid traffic, and automated follow-ups." direction="left" />
          <ProjectCard img={project4} tag="Social Media Marketing" title="Social Media Growth Campaign" desc="Developed a content-led social strategy to increase engagement, reach, and brand loyalty." direction="right" />
        </div>
      </div>
    </section>
  )
}

/* ================= CARD ================= */
function ProjectCard({ img, tag, title, desc, direction }) {
  return (
    <div className={`relative group rounded-3xl overflow-hidden project-card project-${direction}`}>

      <img src={img} alt="" className="w-full h-[320px] object-cover" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#10123C]/90 via-[#10123C]/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#10123C] via-[#10123C]/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <span className="inline-block mb-3 px-4 py-1 rounded-full bg-[#EAB308] text-[#10123C] text-xs font-medium w-fit">
          {tag}
        </span>

        <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>

        <p className="text-white/80 text-sm leading-relaxed max-w-md">
          {desc}
        </p>
      </div>
    </div>
  )
}
