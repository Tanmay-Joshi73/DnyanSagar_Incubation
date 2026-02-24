import { useRef } from 'react'
import { useMagnetic, useParallax } from '../hooks/useAnimations'

/* ── Floating editorial image card ──────────────── */
function FloatImg({ className, tag, num, children, depth, rotate }) {
  return (
    <div
      className={`absolute rounded-[10px] overflow-hidden shadow-float
        hover:shadow-float-lg hover:z-10 transition-shadow duration-400 ${className}`}
      data-parallax={depth}
      data-rotate={rotate}
    >
      {children}
      <span className="absolute top-[10px] left-[11px] font-mono text-[0.5rem] tracking-[0.14em] uppercase text-ink/40">
        {tag}
      </span>
      <span className="absolute bottom-[10px] right-[12px] font-display text-[1.8rem] font-bold text-ink/10">
        {num}
      </span>
    </div>
  )
}

export default function Hero() {
  const orbitRef = useRef(null)
  useMagnetic(orbitRef)
  useParallax()

  return (
    <section className="pt-[calc(72px+96px)] pb-[100px] bg-ivory relative overflow-hidden">
      {/* Gold ambient glow top-right */}
      <div className="absolute top-0 right-0 w-[420px] h-[420px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, #FBF6EC 0%, transparent 70%)' }}
      />

      <div className="max-w-container mx-auto px-[52px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-x-[80px] items-start relative">

          {/* ── LEFT ─────────────────────────────── */}
          <div className="relative">
            {/* Eyebrow */}
            <div
              className="flex items-center gap-4 mb-12 opacity-0"
              style={{ animation: 'fadeUp 0.6s 0.1s ease forwards' }}
            >
              <span className="bg-forest-bg border border-sage px-[14px] py-[5px] rounded-sm
                font-mono text-[0.58rem] tracking-[0.18em] uppercase text-forest">
                Venture Studio
              </span>
              <div className="w-[1px] h-[14px] bg-rule" />
              <span className="font-mono text-[0.58rem] tracking-[0.14em] text-ink-50">
                Est. 2014 — San Francisco
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-bold uppercase mb-14"
              style={{ fontSize: 'clamp(4.2rem, 9.8vw, 10rem)', lineHeight: 0.88, letterSpacing: '-0.02em' }}
            >
              <span className="hl-wrap">
                <span className="hl-inner" style={{ animationDelay: '0.28s' }} data-scramble>
                  Business
                </span>
              </span>
              <span className="hl-wrap">
                <span className="hl-inner italic text-ink-80 pl-[0.1em]" style={{ animationDelay: '0.44s' }} data-scramble>
                  Ambitions
                </span>
              </span>
              <span className="hl-wrap">
                <span className="hl-inner" style={{ animationDelay: '0.60s' }} data-scramble>
                  Turned <span className="text-gold">Real.</span>
                </span>
              </span>
            </h1>

            {/* Floating Images */}
            <FloatImg
              className="w-[152px] h-[200px]"
              style={{ right: '-10px', top: '-40px', transform: 'rotate(-2.5deg)', animation: 'floatIn 0.9s 0.85s ease both' }}
              tag="Session 04" num="01" depth="6" rotate="-2.5"
            >
              <div className="w-full h-full bg-forest-bg relative">
                <svg width="152" height="200" viewBox="0 0 152 200" fill="none" className="absolute bottom-0 left-0">
                  <rect x="22" y="130" width="108" height="6" rx="2" fill="rgba(30,52,38,.08)"/>
                  <rect x="36" y="90" width="80" height="50" rx="6" fill="rgba(30,52,38,.10)"/>
                  <rect x="40" y="94" width="72" height="42" rx="4" fill="rgba(30,52,38,.06)"/>
                  <rect x="46" y="101" width="44" height="2" rx="1" fill="rgba(30,52,38,.15)"/>
                  <rect x="46" y="108" width="36" height="2" rx="1" fill="rgba(184,149,74,.40)"/>
                  <rect x="46" y="115" width="40" height="2" rx="1" fill="rgba(30,52,38,.10)"/>
                  <ellipse cx="76" cy="64" rx="16" ry="18" fill="rgba(30,52,38,.10)"/>
                </svg>
              </div>
            </FloatImg>

            <FloatImg
              className="w-[122px] h-[158px]"
              style={{ right: '188px', top: '100px', transform: 'rotate(3.2deg)', animation: 'floatIn 0.9s 1.05s ease both' }}
              tag="Q2 Growth" num="62" depth="10" rotate="3.2"
            >
              <div className="w-full h-full bg-gold-bg relative">
                <svg width="122" height="158" viewBox="0 0 122 158" fill="none" className="absolute bottom-0 left-0">
                  <rect x="10" y="100" width="12" height="44" rx="2" fill="rgba(184,149,74,.20)"/>
                  <rect x="28" y="80"  width="12" height="64" rx="2" fill="rgba(184,149,74,.30)"/>
                  <rect x="46" y="60"  width="12" height="84" rx="2" fill="rgba(184,149,74,.40)"/>
                  <rect x="64" y="44"  width="12" height="100" rx="2" fill="rgba(184,149,74,.55)"/>
                  <rect x="82" y="28"  width="12" height="116" rx="2" fill="rgba(184,149,74,.65)"/>
                  <rect x="100" y="16" width="12" height="128" rx="2" fill="rgba(184,149,74,.78)"/>
                  <line x1="8" y1="144" x2="114" y2="144" stroke="rgba(184,149,74,.20)" strokeWidth="1"/>
                </svg>
              </div>
            </FloatImg>

            <FloatImg
              className="w-[140px] h-[178px]"
              style={{ right: '54px', top: '260px', transform: 'rotate(-1.8deg)', animation: 'floatIn 0.9s 1.25s ease both' }}
              tag="Network" num="14×" depth="8" rotate="-1.8"
            >
              <div className="w-full h-full bg-ivory-dd relative">
                <svg width="140" height="178" viewBox="0 0 140 178" fill="none" className="absolute inset-0">
                  <circle cx="70" cy="60"  r="7" fill="rgba(12,12,11,.12)"/>
                  <circle cx="30" cy="100" r="5" fill="rgba(30,52,38,.15)"/>
                  <circle cx="110" cy="100" r="5" fill="rgba(30,52,38,.15)"/>
                  <circle cx="50" cy="148" r="4" fill="rgba(184,149,74,.50)"/>
                  <circle cx="90" cy="148" r="4" fill="rgba(184,149,74,.40)"/>
                  <line x1="70" y1="60"  x2="30"  y2="100" stroke="rgba(12,12,11,.08)" strokeWidth="1"/>
                  <line x1="70" y1="60"  x2="110" y2="100" stroke="rgba(12,12,11,.08)" strokeWidth="1"/>
                  <line x1="30" y1="100" x2="50"  y2="148" stroke="rgba(184,149,74,.25)" strokeWidth="1"/>
                  <line x1="110" y1="100" x2="90" y2="148" stroke="rgba(184,149,74,.25)" strokeWidth="1"/>
                  <line x1="30" y1="100" x2="90"  y2="148" stroke="rgba(12,12,11,.05)" strokeWidth="1" strokeDasharray="3 3"/>
                </svg>
              </div>
            </FloatImg>
          </div>

          {/* ── RIGHT SIDEBAR ─────────────────────── */}
          <div
            className="pt-14 pl-[44px] border-l border-rule flex flex-col
              opacity-0 lg:block hidden"
            style={{ animation: 'fadeUp 0.8s 0.95s ease forwards' }}
          >
            <p className="section-label mb-[18px]">Our Mandate</p>

            <p className="font-body text-[0.92rem] leading-[1.78] text-ink-50 max-w-[270px] mb-11">
              We partner with <strong className="text-ink font-medium">exceptional founders</strong> at
              the earliest stage — providing capital, product infrastructure, and an operator network
              built for velocity. Not trends. <strong className="text-ink font-medium">Conviction.</strong>
            </p>

            {/* Circular CTA */}
            <div className="cta-orbit relative w-[140px] h-[140px]" ref={orbitRef}>
              <div className="orbit-ring" />
              <a
                href="#"
                className="cta-circle mag-target w-[140px] h-[140px] border-[1.5px] border-ink
                  rounded-full flex items-center justify-content-center flex-col gap-[5px]
                  no-underline cursor-none transition-colors duration-300
                  flex items-center justify-center"
              >
                <span className="cta-text font-mono text-[0.58rem] tracking-[0.16em] uppercase
                  text-ink text-center relative z-10 leading-[1.5] transition-colors duration-300">
                  Get<br />Started
                </span>
              </a>
            </div>

            {/* Stats */}
            <div className="mt-11 pt-8 border-t border-rule flex gap-8">
              {[
                { count: '480', sfx: 'M',  dec: '0', label: 'AUM' },
                { count: '75',  sfx: '+',  dec: '0', label: 'Startups' },
                { count: '4.2', sfx: '×',  dec: '1', label: 'Avg. MOIC' },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="font-display text-[1.7rem] font-bold leading-none tracking-[-0.02em] text-ink"
                    data-count={s.count} data-sfx={s.sfx} data-dec={s.dec}
                  >
                    —
                  </div>
                  <div className="font-mono text-[0.54rem] tracking-[0.15em] uppercase text-ink-50 mt-[5px]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex items-center gap-[18px] mt-20 opacity-0"
          style={{ animation: 'fadeUp 0.6s 1.4s ease forwards' }}>
          <div className="scan-line w-12 h-px bg-rule" />
          <span className="font-mono text-[0.56rem] tracking-[0.2em] uppercase text-ink-20">
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  )
}
