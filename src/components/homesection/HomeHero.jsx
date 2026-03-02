import heroBg from '../../assets/img/home_hero2.png'
import { motion } from 'framer-motion'

export default function HomeHero() {

  // LEFT SLIDE animation
  const leftContainer = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.25,
        ease: 'easeOut',
        duration:0.8
      }
    }
  }
const leftItem = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' }
  }
}


  // BOTTOM animation (12+)
  const bottomItem = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(
          90deg,
          rgba(0,0,0,0.60),
          rgba(0,0,0,0.20)
        ), url(${heroBg})`
      }}
    >
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center">

        {/* LEFT CONTENT */}
        <motion.div
          className="w-full md:w-1/2 text-white mt-24 md:mt-0"
          variants={leftContainer}
          initial="hidden"
          animate="visible"
        >

          {/* Label */}
          <motion.div variants={leftItem} className="flex items-center gap-3 mb-5">
            <span className="w-8 h-[2px] bg-yellow-400"></span>
            <span className="text-yellow-400 text-sm font-semibold">
              Analytics Powered Growth
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={leftItem}
            className="text-4xl md:text-5xl font-bold leading-tight mb-6"
          >
            Digital{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #F472B6, #EAB308)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Growth
            </span>
            <br />
            That Performs
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={leftItem}
            className="text-gray-300 max-w-xl mb-8 text-sm"
          >
            Logicthink Solutions is a full-service digital marketing agency
            dedicated to growing your brand with innovative strategies,
            data-driven campaigns
          </motion.p>

          {/* Button */}
          <motion.button
            variants={leftItem}
            className="px-7 py-3 rounded-full font-semibold text-white mb-10"
            style={{
              background: 'linear-gradient(90deg, #F472B6, #7C3AED)'
            }}
          >
            Explore Services
          </motion.button>

          {/* Experience (BOTTOM SLIDE) */}
          <motion.div
            variants={bottomItem}
            transition={{ delay: 0.9, duration: 0.8, ease: 'easeOut' }}
            className="flex items-center gap-4"
          >
            <span
              className="text-7xl font-bold"
              style={{
                WebkitTextStroke: '2px #EAB308',
                color: 'transparent'
              }}
            >
              12+
            </span>
            <div>
              <p className="font-semibold text-sm">Years Marketing</p>
              <p className="text-gray-400 text-sm">Experience</p>
            </div>
          </motion.div>

        </motion.div>

        {/* RIGHT CONTENT (NO CHANGE) */}
        <div className="hidden md:block w-1/2 relative">

          <div className="absolute right-20 top-1/2 -translate-y-[40%] flex flex-col gap-4">
            <Point text="Precision Targeting" />
            <Point text="Strategic Innovation" />
            <Point text="Sustainable Growth" />
          </div>

          <div className="absolute right-6 bottom-16 w-40 h-40 flex items-center justify-center">
            {/* FIXED YELLOW ARROW */}
  <svg
    width="34"
    height="34"
    viewBox="0 0 20 20"
    fill="none"
    className="absolute"
  >
    <path
      d="M7 17L17 7M17 7H9M17 7V15"
      stroke="#EAB308"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>

  {/* 360° FULL CIRCLE TEXT */}
  <svg
    viewBox="0 0 200 200"
    className="w-full h-full animate-spin"
    style={{ animationDuration: '20s' }}
  >
    <defs>
      <path
        id="circlePath"
        d="
          M 100,100
          m -85,0
          a 85,85 0 1,1 170,0
          a 85,85 0 1,1 -170,0
        "
      />
    </defs>

    <text
      fill="white"
      fontSize="12"
      letterSpacing="8"
      dominantBaseline="middle"
      textAnchor="middle"
    >
      <textPath href="#circlePath" startOffset="0%">
        BRAND STRATEGY • SEO • PPC • MARKETING • BRAND STRATEGY • SEO • PPC • MARKETING •
      </textPath>
    </text>
  </svg>
          </div>

        </div>
      </div>
    </section>
  )
}

function Point({ text }) {
  return (
    <div className="flex items-center gap-3 bg-[#0B1220]/70 border border-[#1E293B] px-5 py-2 rounded-full">
      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
      <span className="text-white text-sm">{text}</span>
    </div>
  )
}
