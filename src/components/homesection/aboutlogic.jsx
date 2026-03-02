import aboutLeft1 from '../../assets/img/aboutleft1.png'
import aboutLeft2 from '../../assets/img/aboutleft2.png'
import aboutLeft3 from '../../assets/img/aboutleft3.png'
import aboutLeftIcon from '../../assets/img/aboutlefticon.svg'
import './aboutlogic.css'

import rightIcon1 from '../../assets/img/aboutright1.svg'
import rightIcon2 from '../../assets/img/aboutright2.svg'
import rightIcon3 from '../../assets/img/aboutright3.svg'

export default function AboutLogic() {
  return (
    <section className="bg-[#0B0F3B] py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

       {/* LEFT SIDE */}
      <div className="relative flex justify-center">

       {/* IMAGE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">

       {/* aboutleft1 */}
        <img
      src={aboutLeft1}
      alt=""
      className="rounded-2xl object-cover w-full"
       />

       {/* aboutleft2 – pushed slightly down */}
       <img
        src={aboutLeft2}
        alt=""
        className="rounded-2xl object-cover mt-10 sm:mt-32"
      />

    {/* aboutleft3 – centered between 1 & 2 */}
<div className="relative col-span-2 flex justify-center bottom-0 sm:bottom-72">

  {/* ROTATING IMAGE */}
  <img
    src={aboutLeft3}
    alt=""
    className="rounded-2xl object-cover w-[20%] mx-auto rotate-slow"
  />

  {/* FIXED CENTER ICON (no rotation) */}
  <img
    src={aboutLeftIcon}
    alt="Creative Agency"
    className="
      absolute
      left-1/2
      top-1/2
      -translate-x-1/2
      -translate-y-1/2
      w-10 h-10
      pointer-events-none
    "
  />
</div>

  </div>

  {/* TOP STAT – 110% */}
  <div
    className="
      absolute
      right-3
      border
      border-white/80
      rounded-xl
      px-8
      py-5
      w-[250px]
      text-center
    "
  >
    <h3
      className="text-4xl font-bold"
      style={{
        WebkitTextStroke: '1.3px #EAB308',
        color: 'transparent'
      }}
    >
      110%
    </h3>
    <p className="text-ellipsis text-white/90 mt-1">
      Average Growth Rate
    </p>
  </div>

  {/* BOTTOM STAT – 150+ */}
  <div
    className="
      absolute
      bottom-32
      -left-1
      border
      border-white/90
      rounded-2xl
      px-8
      py-6
      w-[270px]
      text-center
    "
  >
    <h3
      className="text-4xl font-bold"
      style={{
        WebkitTextStroke: '1.5px #EAB308',
        color: 'transparent'
      }}
    >
      150+
    </h3>
    <p className="text-sm text-white mt-1">
      Successful Campaigns
    </p>
  </div>

</div>


        {/* RIGHT SIDE */}
        <div className="text-white">

          {/* LABEL */}
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-[2px] bg-yellow-400" />
            <span className="text-yellow-400 text-sm font-semibold">
              About Logicthink Solutions
            </span>
          </div>

          {/* HEADING */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            A Modern{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #F472B6, #EAB308)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Agency
            </span>{' '}
            Built For Performance
          </h2>

          {/* DESCRIPTION */}
          <p className="text-white/70 mb-10 max-w-xl">
            Logicthink Solutions is a modern digital marketing agency built
            to help brands grow in an ever-evolving digital world. We combine
            data, creativity, and technology to create marketing strategies
            that deliver real, measurable impact.
          </p>

          {/* INFO CARDS */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <InfoCard
              icon={rightIcon1}
              title="Data-driven decision making"
            />
            <InfoCard
              icon={rightIcon2}
              title="Analytics Powered Growth"
            />
          </div>

          {/* CTA */}
          <div className="flex items-center gap-8">
            <button
              className="px-7 py-3 rounded-full font-semibold text-white"
              style={{
                background: 'linear-gradient(90deg, #F472B6, #7C3AED)'
              }}
            >
              Learn More About
            </button>

            <div className="flex items-center gap-4">
              <img src={rightIcon3} alt="" className="w-10 h-10" />
              <div>
                <p className="text-sm font-semibold">Call Us Now</p>
                <p className="text-sm text-white/70">+88-987-8547</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* INFO CARD */
function InfoCard({ icon, title }) {
  return (
    <div className="bg-white/10 rounded-2xl p-6">
      <img src={icon} alt="" className="w-11 h-11 mb-4" />
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-sm text-white/70">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  )
}
