import footerBg from '../assets/img/footerbg.png'
import logo from '../assets/logo2.svg'

import mapIcon from '../assets/img/footermap.svg'
import phoneIcon from '../assets/img/footerphone.svg'
import mailIcon from '../assets/img/footermail.svg'

import instagram from '../assets/img/footerinstagram.svg'
import facebook from '../assets/img/footerfacebook.svg'
import whatsapp from '../assets/img/footerwhatsapp.svg'
import linkedin from '../assets/img/footerlinkedin.svg'

export default function FooterSubscribeSection() {
  return (
    <section className="relative pt-32 pb-16 text-white overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${footerBg})` }}
      />
      <div className="absolute inset-0 " />

      {/* ================= SUBSCRIBE BOX ================= */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="
          bg-white/5 backdrop-blur-md
          border border-white/10
          rounded-[28px]
          px-14 py-12
          flex flex-col lg:flex-row
          items-center justify-between
          gap-14
        ">

          {/* LEFT TEXT */}
          <h2 className="text-[34px] lg:text-[38px] font-semibold leading-tight">
            Get Growth{' '}
            <span className="bg-gradient-to-r from-[#F472B6] to-[#EAB308] bg-clip-text text-transparent">
              Insights
            </span>
            <br />
            In Your Inbox
          </h2>

          {/* RIGHT FORM */}
          <div className="flex w-full lg:w-[520px] flex-col gap-4">
            <input
              type="email"
              placeholder="Email Address"
              className="
                h-[52px]
                rounded-full
                px-6
                text-sm
                text-black
                outline-none
              "
            />

            <button
              className="
                h-[52px]
                rounded-full
                font-medium
                text-white
                bg-gradient-to-r from-[#F472B6] to-[#7C3AED]
                hover:opacity-90
                transition
              "
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* ================= FOOTER CONTENT ================= */}
      <div className="relative max-w-7xl mx-auto px-6 mt-24 grid lg:grid-cols-4 gap-16">

        {/* BRAND */}
        <div>
          <img src={logo} className="h-10 mb-6" />

          <p className="text-white/70 text-[15px] leading-relaxed">
            Logicthink Solutions is a performance-driven digital marketing agency
            helping modern brands grow through strategic planning, creative
            execution, and data-backed optimization. We focus on measurable
            results, transparency, and long-term digital success.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-lg font-semibold mb-6 underline underline-offset-8">
            Quick Links
          </h4>
          <ul className="space-y-3 text-[15px] text-white/80">
            <li className="text-[#EAB308]">Home</li>
            <li>About Us</li>
            <li>Digital Marketing</li>
            <li>Web Development</li>
            <li>App Development</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-lg font-semibold mb-6 underline underline-offset-8">
            Services
          </h4>
          <ul className="space-y-3 text-[15px] text-white/80">
            <li className="text-[#EAB308]">Search Engine Optimization</li>
            <li>Pay-Per-Click Advertising</li>
            <li>Social Media Marketing</li>
            <li>Content Marketing</li>
            <li>Branding & Creative Design</li>
            <li>Software Development</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-lg font-semibold mb-6 underline underline-offset-8">
            Contact Info
          </h4>

          <div className="space-y-4 text-[15px] text-white/80">
            <div className="flex items-start gap-3">
              <img src={mapIcon} className="w-4 mt-1" />
              <span>NX-One, Greater Noida West</span>
            </div>

            <div className="flex items-center gap-3">
              <img src={phoneIcon} className="w-4" />
              <span>+91-9560037075</span>
            </div>

            <div className="flex items-center gap-3">
              <img src={mailIcon} className="w-4" />
              <span>services@logicthinksolutions.com</span>
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-6">
            {[instagram, facebook, whatsapp, linkedin].map((icon, i) => (
              <img
                key={i}
                src={icon}
                className="w-6 cursor-pointer hover:scale-110 transition"
              />
            ))}
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="relative max-w-7xl mx-auto px-6 mt-16 pt-6 border-t border-white/50 flex flex-col md:flex-row justify-between text-white/60 text-sm">
        <p>© 2026 www.logicthinksolutions.com All Rights Reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span>Privacy Policy</span>
          <span>Terms & Condition</span>
        </div>
      </div>
    </section>
  )
}
