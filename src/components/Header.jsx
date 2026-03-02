import { useState } from 'react'
import logo from '../assets/logo2.svg'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute top-6 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <img src={logo} alt="Logic Think Solutions" className="h-9" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-7 text-white text-sm font-medium">
          <li className="text-yellow-400 cursor-pointer">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer">About</li>
          <li className="hover:text-yellow-400 cursor-pointer">
            Digital Marketing ▾
          </li>
          <li className="hover:text-yellow-400 cursor-pointer">
            Web Development ▾
          </li>
          <li className="hover:text-yellow-400 cursor-pointer">
            App Development ▾
          </li>
        </ul>

        {/* Desktop Button */}
        <button
          className="hidden md:block px-5 py-2 rounded-full text-sm font-semibold text-white"
          style={{
            background: 'linear-gradient(90deg, #F472B6, #7C3AED)'
          }}
        >
          Get Started
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            /* Close Icon */
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            /* Menu Icon */
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 6H21M3 12H21M3 18H21"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mx-6 mt-4 rounded-2xl bg-[#0B1220]/95 backdrop-blur border border-[#1E293B]">
          <ul className="flex flex-col text-white text-sm font-medium divide-y divide-[#1E293B]">

            <li className="px-6 py-4 text-yellow-400">Home</li>
            <li className="px-6 py-4 hover:text-yellow-400">About</li>
            <li className="px-6 py-4 hover:text-yellow-400">
              Digital Marketing
            </li>
            <li className="px-6 py-4 hover:text-yellow-400">
              Web Development
            </li>
            <li className="px-6 py-4 hover:text-yellow-400">
              App Development
            </li>

            {/* Mobile Button */}
            <li className="px-6 py-4">
              <button
                className="w-full py-3 rounded-full font-semibold text-white"
                style={{
                  background: 'linear-gradient(90deg, #F472B6, #7C3AED)'
                }}
              >
                Get Started
              </button>
            </li>

          </ul>
        </div>
      )}
    </header>
  )
}
