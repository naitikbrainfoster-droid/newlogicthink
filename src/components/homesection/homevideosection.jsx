import homeVideo from '../../assets/video/homesection.mp4'

export default function HomeVideoSection() {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden">

      {/* VIDEO BACKGROUND */}
      <video
        src={homeVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F3B]/80 via-[#0B0F3B]/60 to-[#0B0F3B]/80" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="max-w-4xl text-center text-white">

          

          {/* HEADING */}
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Let’s{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #F472B6, #EAB308)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Build
            </span>{' '}
            Your Growth Strategy
          </h1>

          {/* DESCRIPTION */}
          <p className="text-white/80 text-base md:text-lg mb-10 leading-relaxed">
            Ready to take your digital marketing to the next level? Partner with
            Logicthink Solutions and start building scalable growth with
            strategies designed to perform.
          </p>

          {/* CTA */}
          <button
            className="
              px-8 py-4
              rounded-full
              text-white
              font-semibold
              text-sm md:text-base
              transition
              hover:scale-105
            "
            style={{
              background: 'linear-gradient(90deg, #F472B6, #7C3AED)'
            }}
          >
            Get Started With Logicthink
          </button>

        </div>
      </div>
    </section>
  )
}
