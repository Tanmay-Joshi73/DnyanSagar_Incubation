import { useState, useEffect } from 'react'

const links = ['How it Works', 'Programs', 'Portfolio', 'Community', 'Insights']

export default function Navbar() {
  const [stuck, setStuck] = useState(false)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[600] h-[72px] flex items-center
        border-b transition-all duration-400
        ${stuck
          ? 'bg-ivory/90 backdrop-blur-lg border-rule'
          : 'bg-transparent border-transparent'
        }`}
    >
      <div className="max-w-container mx-auto px-[52px] w-full flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="font-display text-[1.35rem] font-bold tracking-wide text-ink no-underline">
          Meridian<em className="not-italic text-gold">.</em>
        </a>

        {/* Center links */}
        <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-[38px] list-none">
          {links.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="relative font-body text-[0.72rem] font-medium tracking-[0.1em] uppercase
                  text-ink-50 no-underline transition-colors duration-200 hover:text-ink pb-[2px]
                  after:absolute after:bottom-0 after:left-0 after:right-full after:h-[1px]
                  after:bg-gold after:transition-all after:duration-300 hover:after:right-0"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#"
          className="font-body text-[0.7rem] font-semibold tracking-[0.12em] uppercase
            bg-forest text-white no-underline px-[22px] py-[10px] rounded-sm
            transition-colors duration-250 hover:bg-forest-lt"
        >
          Apply Now
        </a>
      </div>
    </nav>
  )
}
