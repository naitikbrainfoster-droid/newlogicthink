import { useEffect, useState, useRef } from 'react'

import feedbackBg from '../../assets/img/feedbackbg.png'
import feedbackImg from '../../assets/img/feedbackimg.png'

import profile1 from '../../assets/img/feedbackprofile1.svg'
import profile2 from '../../assets/img/feedbackprofile2.svg'
import profile3 from '../../assets/img/feedbackprofile3.svg'

import './homefeedback.css'

export default function HomeFeedbackSection() {

  /* ================= TESTIMONIAL DATA ================= */
  const testimonials = [
    {
      img: profile1,
      text:
        "Logicthink Solution’s managed IT services have been a game-changer for us. Their proactive monitoring and quick response times ensure that our systems are always up and running smoothly.",
      name: "Cameron Williamson",
      role: "C.E.O, SSD Corp Pvt. Ltd."
    },
    {
      img: profile2,
      text:
        "Their team understands business needs deeply. We saw measurable growth and stability within weeks of onboarding.",
      name: "John Hoe",
      role: "C.E.O, Fin Corp Pvt. Ltd."
    },
    {
      img: profile3,
      text:
        "Highly professional, reliable, and scalable IT solutions. Logicthink truly delivers on promises.",
      name: "Nicholas Lee",
      role: "Founder"
    }
  ]

  /* ================= STATS SCROLL (FOOLPROOF) ================= */
  const statsTriggerRef = useRef(null)
  const [startCount, setStartCount] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true)
          observer.disconnect()
        }
      },
      {
        root: null,
        threshold: 0,
        // 👇 THIS IS THE KEY (page load pe trigger nahi hota)
        rootMargin: '0px 0px -50% 0px'
      }
    )

    if (statsTriggerRef.current) {
      observer.observe(statsTriggerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  /* ================= TESTIMONIAL SLIDER ================= */
  const [activeIndex, setActiveIndex] = useState(0)
  const [sliding, setSliding] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setSliding(true)

      setTimeout(() => {
        setActiveIndex(prev =>
          prev === testimonials.length - 1 ? 0 : prev + 1
        )
        setSliding(false)
      }, 700)
    }, 4500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative -mt-32 z-20">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${feedbackBg})` }}
      />

      <div className="relative max-w-7xl mx-auto px-8 py-28">

        {/* ===== INVISIBLE SCROLL TRIGGER (DO NOT STYLE / REMOVE) ===== */}
        <div ref={statsTriggerRef} style={{ height: 1 }} />

        {/* ================= STATS ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-28">
          <Stat number="220%" label="Average ROI Growth" start={startCount} />
          <Stat number="98%" label="Client Satisfaction" start={startCount} />
          <Stat number="15+" label="Industries Served" start={startCount} />
          <Stat number="170%" label="Traffic Growth" start={startCount} />
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid lg:grid-cols-[1.05fr_0.9fr_1.45fr] gap-8 items-center">

          {/* LEFT */}
          <div>
            <p className="text-[#EAB308] font-semibold mb-4">— Client Feedback</p>

            <h2 className="text-[42px] font-medium text-white leading-tight mb-6">
              Trusted by{' '}
              <span className="bg-gradient-to-r from-[#F472B6] to-[#EAB308] bg-clip-text text-transparent">
                Brands
              </span>
              <br />
              That Value Real Results
            </h2>

            <p className="text-white/80 mb-10 max-w-md text-[15px]">
              Discover the genuine feedbacks shared by our valued clients,
              showcasing the results.
            </p>

            <div className="bg-[#2C2F5A] rounded-2xl p-6 w-fit">
              <div className="text-[#EAB308] text-sm mb-2 tracking-widest">
                ★★★★★
              </div>
              <h4 className="text-4xl font-bold text-white">4.9</h4>
              <p className="text-white/70 text-sm">
                Average Client Rating
              </p>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={feedbackImg}
                alt=""
                className="rounded-3xl h-[520px] w-[360px] object-cover"
              />

              <div className="absolute bottom-6 left-6">
                <div className="circle-wrapper">
                  <svg viewBox="0 0 200 200" className="rotating-text">
                    <defs>
                      <path
                        id="circlePath"
                        d="
                          M 100, 100
                          m -80, 0
                          a 80,80 0 1,1 160,0
                          a 80,80 0 1,1 -160,0
                        "
                      />
                    </defs>

                    <text textLength="520" lengthAdjust="spacing">
                      <textPath href="#circlePath">
                        • BRAND STRATEGY • SEO • PPC MARKETING •
                      </textPath>
                    </text>
                  </svg>
                  <div className="arrow">↗</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT TESTIMONIAL */}
          <div className="space-y-4">

            <div className="testimonial-slider">
              <div className={`testimonial-card ${sliding ? 'slide-out' : 'active'}`}>
                <span className="absolute top-6 right-6 text-[#EAB308] text-[72px]">“</span>

                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={testimonials[activeIndex].img}
                    className="w-14 h-14 rounded-full"
                  />
                </div>

                <p className="testimonial-text">
                  {testimonials[activeIndex].text}
                </p>

                <div>
                  <p className="text-white font-semibold text-lg">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-[#EAB308] text-sm">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* SMALL CARDS */}
            <div className="grid grid-cols-2 gap-4">
              <MiniCard img={profile2} name="John Hoe" role="C.E.O, Fin Corp Pvt. Ltd." />
              <MiniCard img={profile3} name="Nicholas Lee" role="Founder" />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

/* ================= COMPONENTS ================= */

function Stat({ number, label, start }) {
  const finalValue = parseInt(number)
  const [count, setCount] = useState(finalValue)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!start || hasAnimated.current) return

    hasAnimated.current = true
    setCount(0)

    const duration = 1400
    const startTime = performance.now()

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1)
      setCount(Math.floor(progress * finalValue))
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [start])

  return (
    <div className="-mt-12">
      <h3 className="text-[65px] font-medium text-[#EAB308] leading-none mb-2">
        {count}
        {number.includes('%') && '%'}
        {number.includes('+') && '+'}
      </h3>
      <p className="text-white/90 tracking-wide">{label}</p>
    </div>
  )
}

function MiniCard({ img, name, role }) {
  return (
    <div className="bg-[#2C2F5A] rounded-2xl p-6">
      <p className="text-white/70 text-sm mb-4">
        Logicthink Solution’s managed IT services have been a game-changer for us...
      </p>
      <div className="flex items-center gap-3">
        <img src={img} className="w-10 h-10 rounded-full" />
        <div>
          <p className="text-white text-sm font-semibold">{name}</p>
          <p className="text-[#EAB308] text-xs">{role}</p>
        </div>
      </div>
    </div>
  )
}
