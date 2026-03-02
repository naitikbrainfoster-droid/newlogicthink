import serviceBgLeft from '../../assets/img/servicebgleft1.png'
import serviceBgRight from '../../assets/img/servicebgright1.png'
import serviceBgCards from '../../assets/img/servicebgcards.png'

import iconTop from '../../assets/img/servicetopicon.svg'
import iconLeft from '../../assets/img/servicelefticon.svg'
import iconCenter from '../../assets/img/servicecentericon.svg'
import iconRight from '../../assets/img/servicerighticon.svg'
import iconBottom from '../../assets/img/servicebottomicon.svg'
import './homeservices.css'

export default function OurServices() {
  return (
    <section className="relative bg-[#1A0F3D] py-32 overflow-hidden">

      {/* BACKGROUND WAVES */}
      <img
        src={serviceBgLeft}
        alt=""
        className="absolute left-0 top-0 h-full opacity-60 pointer-events-none"
      />
      <img
        src={serviceBgRight}
        alt=""
        className="absolute right-0 top-0 h-full opacity-60 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-24">
          <p className="text-[#EAB308] text-md font-semibold tracking-wide mb-4">
            — Our Services
          </p>

          <h2 className="text-4xl md:text-2xl font-bold text-white mb-6">
            Digital{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #F472B6, #EAB308)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Solutions
            </span>{' '}
            Designed to Drive Growth
          </h2>

          <p className="text-white/90 max-w-3xl mx-auto leading-relaxed">
            At Logicthink Solutions, we deliver end-to-end digital marketing
            services tailored to help brands attract, convert, and retain
            customers. Our performance-driven strategies combine creativity,
            technology, and data to generate measurable business results.
          </p>
        </div>

        {/* ================= DESKTOP DESIGN ================= */}
        <div className="relative hidden md:block">

          {/* CARD BACKGROUND IMAGE */}
          <img
            src={serviceBgCards}
            alt=""
            className="mx-auto"
          />

          {/* YELLOW CENTER GLOW */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[420px] h-[420px]  blur-[120px]" />
          </div>

          {/* TOP CARD */}
          <OverlayCard
            icon={iconTop}
            title="Search Engine Optimization"
            text="Enhance online presence with our strategic SEO services. Boost rankings, drive organic traffic, and achieve lasting digital success."
            className="top-[0%] left-1/2 -translate-x-1/2"
          />

          {/* LEFT CARD */}
          <OverlayCard
            icon={iconLeft}
            title="Web Design & Development"
            text="Creating digital personas through personalized website development. Elevate your brand with captivating design."
            className="top-1/2 left-[2%] -translate-y-1/2"
          />

          {/* CENTER CARD */}
          <OverlayCard
            icon={iconCenter}
            title="Social Media Marketing"
            text="Fuel brand growth with impactful social media marketing. Connect, engage, and achieve remarkable online presence."
            className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.05]"
          />

          {/* RIGHT CARD */}
          <OverlayCard
            icon={iconRight}
            title="Content Marketing"
            text="Empower your brand with captivating content. Our skilled writing drives engagement and sparks conversions."
            className="top-1/2 right-[2%] -translate-y-1/2"
          />

          {/* BOTTOM CARD */}
          <OverlayCard
            icon={iconBottom}
            title="Branding & Creative Design"
            text="Build a strong brand identity with creative design that leaves a lasting impression."
            className="bottom-[1%] left-1/2 -translate-x-1/2"
          />
        </div>

        {/* ================= MOBILE DESIGN ================= */}
        <div className="grid grid-cols-1 gap-8 md:hidden">
          <MobileCard icon={iconTop} title="Search Engine Optimization" />
          <MobileCard icon={iconLeft} title="Web Design & Development" />
          <MobileCard icon={iconCenter} title="Social Media Marketing" />
          <MobileCard icon={iconRight} title="Content Marketing" />
          <MobileCard icon={iconBottom} title="Branding & Creative Design" />
        </div>

      </div>
    </section>
  )
}

/* ================= DESKTOP OVERLAY CARD ================= */
function OverlayCard({ icon, title, text, className }) {
  return (
    <div
      className={`absolute w-[360px] bg-gradient-to-b rounded-2xl px-8 py-10 text-center ${className}`}
    >
      <img src={icon} alt="" className="w-14 h-14 mx-auto mb-5" />
      <h4 className="text-white font-semibold text-lg mb-3">{title}</h4>
      <p className="text-white/70 text-sm leading-relaxed mb-6">{text}</p>

      <button className="
        text-sm
        text-[#EAB308]
        border border-[#EAB308]/60
        px-5 py-2
        rounded-full
        hover:bg-[#EAB308]
        hover:text-black
        transition
      ">
        View Details
      </button>
    </div>
  )
}

/* ================= MOBILE CARD ================= */
function MobileCard({ icon, title }) {
  return (
    <div className="bg-[#241A4A]/90 rounded-2xl px-6 py-8 text-center">
      <img src={icon} alt="" className="w-12 h-12 mx-auto mb-4" />
      <h4 className="text-white font-semibold mb-3">{title}</h4>
      <p className="text-white/70 text-sm mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <button className="text-sm text-[#EAB308] border border-[#EAB308]/50 px-4 py-2 rounded-full">
        View Details
      </button>
    </div>
  )
}
