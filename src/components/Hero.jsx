import { useRef } from 'react'
import { useMagnetic, useParallax } from '../hooks/useAnimations'

/* ─────────────────────────────────────────────────────────────────────────────
   KEY FIXES:
   1. Headline font-size reduced so it fits inside its grid column cleanly.
      No more bleeding past the column boundary.
   2. Cards moved OUTSIDE the headline column entirely — they live in a
      dedicated absolute wrapper that is positioned to the RIGHT of the
      headline text, flush against the left edge of the right sidebar gap.
   3. Cards are spaced with explicit top values so they never overlap.
   4. Right sidebar has overflow:hidden so nothing bleeds in from the left.
   5. All three cards have distinct, non-overlapping vertical positions.
───────────────────────────────────────────────────────────────────────────── */

/* ── Floating editorial image card ──────────────── */
function FloatImg({ style, tag, num, children, depth, rotate }) {
  return (
    <div
      className="absolute rounded-[10px] overflow-hidden shadow-float
        hover:shadow-float-lg hover:z-10 transition-shadow duration-400"
      style={style}
      data-parallax={depth}
      data-rotate={rotate}
    >
      {children}
      <span className="absolute top-[10px] left-[11px] font-mono text-[0.5rem] tracking-[0.14em] uppercase text-ink/40">
        {tag}
      </span>
      <span className="absolute bottom-[10px] right-[12px] font-display text-[1.6rem] font-bold text-ink/10">
        {num}
      </span>
    </div>
  )
}

/* ── Tagline bar ─────────────── */
function TaglineBar() {
  const segments = ['Venture Studio', 'Early Stage', 'Hands-On Capital']
  return (
    <div
      className="flex items-center gap-[10px] mb-6 opacity-0"
      style={{ animation: 'fadeUp 0.5s 0.05s ease forwards' }}
    >
      {segments.map((seg, i) => (
        <span key={seg} className="flex items-center gap-[10px]">
          <span style={{
            fontFamily: 'monospace',
            fontSize: '11px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(12,12,11,0.38)',
          }}>
            {seg}
          </span>
          {i < segments.length - 1 && (
            <span style={{
              display: 'inline-block',
              width: '5px', height: '5px',
              borderRadius: '50%',
              background: '#B8954A',
              opacity: 0.75,
              flexShrink: 0,
            }} />
          )}
        </span>
      ))}
    </div>
  )
}

/* ── Ghost network — opacity 0.03, anchored below AMBITIONS ── */
function NetworkBackdrop() {
  return (
    <svg
      aria-hidden="true"
      style={{
        position: 'absolute',
        left: '-20px',
        top: '55px',          /* sits under the baseline, not through letters */
        width: '380px',
        height: '170px',
        opacity: 0.03,
        pointerEvents: 'none',
        zIndex: 0,
      }}
      viewBox="0 0 380 170"
      fill="none"
    >
      {[[45, 28], [140, 14], [235, 42], [330, 18], [80, 100], [188, 84], [290, 112], [360, 72], [38, 155], [135, 140], [232, 158], [332, 142]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill="#0C0C0B" />
      ))}
      {[
        [[45, 28], [140, 14]], [[140, 14], [235, 42]], [[235, 42], [330, 18]],
        [[45, 28], [80, 100]], [[140, 14], [188, 84]], [[235, 42], [290, 112]],
        [[330, 18], [360, 72]], [[80, 100], [188, 84]], [[188, 84], [290, 112]],
        [[290, 112], [360, 72]], [[80, 100], [38, 155]], [[188, 84], [135, 140]],
        [[290, 112], [232, 158]], [[360, 72], [332, 142]], [[38, 155], [135, 140]],
        [[135, 140], [232, 158]], [[232, 158], [332, 142]], [[140, 14], [80, 100]],
      ].map(([[x1, y1], [x2, y2]], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0C0C0B" strokeWidth="0.6" />
      ))}
    </svg>
  )
}

export default function Hero() {
  const orbitRef = useRef(null)
  useMagnetic(orbitRef)
  useParallax()

  return (
    <section className="pt-[calc(72px+96px)] pb-[100px] bg-ivory relative overflow-hidden">

      {/* Gold ambient glow */}
      <div className="absolute top-0 right-0 w-[420px] h-[420px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, #FBF6EC 0%, transparent 70%)' }}
      />

      <div className="max-w-container mx-auto px-[52px]">

        {/*
          LAYOUT:
          - Col 1: headline text block — fixed max-width so type never bleeds
          - Col 2: right sidebar — fixed 280px
          - The floating cards live in an absolutely-positioned cluster
            that sits in the GAP between col1 and col2, overlapping neither
        */}
        <div
          className="relative"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 280px',
            gap: '0 80px',
            alignItems: 'start',
          }}
        >

          {/* ── LEFT: Headline column ─────────────────────────────── */}
          <div style={{ position: 'relative', minWidth: 0 }}>

            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-7 opacity-0"
              style={{ animation: 'fadeUp 0.6s 0.1s ease forwards' }}>
              <span className="bg-forest-bg border border-sage px-[14px] py-[5px] rounded-sm
                font-mono text-[0.58rem] tracking-[0.18em] uppercase text-forest">
                Venture Studio
              </span>
              <div className="w-[1px] h-[14px] bg-rule" />
              <span className="font-mono text-[0.58rem] tracking-[0.14em] text-ink-50">
                Est. 2014 — San Francisco
              </span>
            </div>

            {/* Tagline */}
            <TaglineBar />

            {/*
              HEADLINE
              - clamp() capped lower: max 7.5rem keeps it inside the column
              - lineHeight 0.88 = tight luxury stack
              - paddingRight 200px creates a clear whitespace corridor on the
                right where the cards will float — they never touch letters
            */}
            <h1
              className="font-display font-bold uppercase"
              style={{
                fontSize: 'clamp(3.6rem, 7vw, 7.5rem)',
                lineHeight: 0.88,
                letterSpacing: '-0.02em',
                /*
                  Right padding = card width (130px) + breathing gap (40px).
                  This carves the whitespace pocket the cards float in.
                */
                paddingRight: '170px',
                marginBottom: 0,
              }}
            >
              <span className="hl-wrap" style={{ display: 'block' }}>
                <span className="hl-inner" style={{ animationDelay: '0.28s' }} data-scramble>
                  Business
                </span>
              </span>

              <span className="hl-wrap relative" style={{ display: 'block' }}>
                <NetworkBackdrop />
                <span className="hl-inner italic text-ink-80 pl-[0.1em] relative"
                  style={{ animationDelay: '0.44s', zIndex: 1 }} data-scramble>
                  Ambitions
                </span>
              </span>

              <span className="hl-wrap" style={{ display: 'block' }}>
                <span className="hl-inner" style={{ animationDelay: '0.60s' }} data-scramble>
                  Turned
                </span>
              </span>

              <span className="hl-wrap" style={{ display: 'block' }}>
                <span className="hl-inner" style={{ animationDelay: '0.72s' }} data-scramble>
                  <span className="text-gold">Real.</span>
                </span>
              </span>
            </h1>

            {/* Anchor line — tight to REAL, signature-style */}
            <p className="opacity-0" style={{
              animation: 'fadeUp 0.6s 0.78s ease forwards',
              fontSize: '16px',
              color: 'rgba(12,12,11,0.40)',
              maxWidth: '420px',
              lineHeight: 1.5,
              marginTop: '14px',
              marginBottom: 0,
            }}>
              We co-build technology companies from zero to funded.
            </p>
          </div>

          {/* ── RIGHT: Sidebar ────────────────────────────────────── */}
          <div
            className="pt-14 border-l border-rule flex-col opacity-0 lg:flex hidden"
            style={{
              paddingLeft: '36px',
              animation: 'fadeUp 0.8s 0.95s ease forwards',
              /*
                overflow hidden stops anything from the left column
                bleeding into this column
              */
              overflow: 'hidden',
            }}
          >
            <p className="section-label mb-[14px]">Our Mandate</p>

            <p className="font-body leading-[1.78] text-ink-50 mb-0"
              style={{ fontSize: '0.86rem', maxWidth: '240px' }}>
              We partner with <strong className="text-ink font-medium">exceptional founders</strong> at
              the earliest stage — providing capital, product infrastructure, and an operator network
              built for velocity. Not trends. <strong className="text-ink font-medium">Conviction.</strong>
            </p>

            {/* CTA — below paragraph, above stats */}
            <div className="cta-orbit relative w-[128px] h-[128px]"
              style={{ marginTop: '28px' }}
              ref={orbitRef}
            >
              <div className="orbit-ring" />
              <a href="#"
                className="cta-circle mag-target w-[128px] h-[128px] border-[1.5px] border-ink
                  rounded-full flex items-center justify-center flex-col gap-[3px]
                  no-underline cursor-none transition-colors duration-300"
              >
                <svg aria-hidden="true" style={{
                  position: 'absolute', inset: 0, width: '100%', height: '100%',
                  opacity: 0.18, pointerEvents: 'none',
                }} viewBox="0 0 128 128" fill="none">
                  <path d="M 64 5 A 59 59 0 0 1 123 64"
                    stroke="#B8954A" strokeWidth="1.5" strokeLinecap="round" />
                </svg>

                {['ENTER', 'THE', 'STUDIO'].map((word, i) => (
                  <span key={word}
                    className="font-mono uppercase relative z-10 transition-colors duration-300"
                    style={{
                      fontSize: i === 1 ? '0.47rem' : '0.57rem',
                      letterSpacing: '0.18em',
                      lineHeight: 1.3,
                      opacity: 0,
                      animation: `fadeUp 0.4s ${0.95 + i * 0.08}s ease forwards`,
                    }}
                  >
                    {word}
                  </span>
                ))}
              </a>
            </div>

            {/* Stats */}
            <div className="pt-6 border-t border-rule flex gap-6" style={{ marginTop: '28px' }}>
              {[
                { count: '480', sfx: 'M', dec: '0', label: 'AUM' },
                { count: '75', sfx: '+', dec: '0', label: 'Startups' },
                { count: '4.2', sfx: '×', dec: '1', label: 'Avg. MOIC' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display font-bold leading-none tracking-[-0.02em] text-ink"
                    style={{ fontSize: '1.55rem' }}
                    data-count={s.count} data-sfx={s.sfx} data-dec={s.dec}>
                    —
                  </div>
                  <div className="font-mono tracking-[0.15em] uppercase text-ink-50 mt-[5px]"
                    style={{ fontSize: '0.49rem' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/*
            ── FLOATING CARD CLUSTER ─────────────────────────────────────────
            Absolutely positioned relative to the grid wrapper.
            Cards sit in the paddingRight corridor of the headline column.

            Measurements (at ~1280px viewport):
            - Left column is roughly 1fr of (viewport - 52px*2 - 80px gap - 280px sidebar)
            - paddingRight: 170px on headline carves a 170px wide corridor
            - Cards (130px wide) sit within that corridor

            We position from the right edge of the grid:
              right = sidebarWidth(280) + gap(80) + some offset from right

            Cards are vertically distributed across the full headline height
            with explicit gaps so they NEVER overlap each other.

            Card heights: 188, 148, 168 = 504px total
            Spacing between cards: 16px each
            Total span: ~536px — matches headline block height

            No z-index clash with sidebar because sidebar has overflow:hidden.
          */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              /*
                Position the cluster so it sits in the right edge of
                the headline column's paddingRight corridor.
                right: 280px(sidebar) + 80px(gap) + 8px(breathing) = 368px
                But since cards are 130px wide and corridor is 170px,
                center them: right = 368 + (170-130)/2 = 388px
              */
              right: '388px',
              top: '0',
              width: '134px',
              /* tall enough to hold all cards without clipping */
              height: '600px',
              /* cards position themselves absolutely within this */
              pointerEvents: 'none',
            }}
          >
            {/* Card 1 — Session 04 (blue-green) — TOP */}
            <FloatImg
              style={{
                position: 'absolute',
                top: '0px',
                left: '0',
                width: '130px',
                height: '170px',
                transform: 'rotate(-2.5deg)',
                animation: 'floatIn 0.9s 0.85s ease both',
                pointerEvents: 'auto',
              }}
              tag="Session 04" num="01" depth="6" rotate="-2.5"
            >
              <div className="w-full h-full bg-forest-bg relative">
                <svg width="130" height="170" viewBox="0 0 152 200" fill="none" className="absolute bottom-0 left-0">
                  <rect x="22" y="130" width="108" height="6" rx="2" fill="rgba(30,52,38,.08)" />
                  <rect x="36" y="90" width="80" height="50" rx="6" fill="rgba(30,52,38,.10)" />
                  <rect x="40" y="94" width="72" height="42" rx="4" fill="rgba(30,52,38,.06)" />
                  <rect x="46" y="101" width="44" height="2" rx="1" fill="rgba(30,52,38,.15)" />
                  <rect x="46" y="108" width="36" height="2" rx="1" fill="rgba(184,149,74,.40)" />
                  <rect x="46" y="115" width="40" height="2" rx="1" fill="rgba(30,52,38,.10)" />
                  <ellipse cx="76" cy="64" rx="16" ry="18" fill="rgba(30,52,38,.10)" />
                </svg>
              </div>
            </FloatImg>

            {/* Card 2 — Q2 Growth (gold) — MIDDLE: top(170) + gap(16) = 186 */}
            <FloatImg
              style={{
                position: 'absolute',
                top: '186px',
                left: '0',
                width: '112px',
                height: '144px',
                transform: 'rotate(3.2deg)',
                animation: 'floatIn 0.9s 1.05s ease both',
                pointerEvents: 'auto',
              }}
              tag="Q2 Growth" num="62" depth="10" rotate="3.2"
            >
              <div className="w-full h-full bg-gold-bg relative">
                <svg width="112" height="144" viewBox="0 0 122 158" fill="none" className="absolute bottom-0 left-0">
                  <rect x="10" y="100" width="12" height="44" rx="2" fill="rgba(184,149,74,.20)" />
                  <rect x="28" y="80" width="12" height="64" rx="2" fill="rgba(184,149,74,.30)" />
                  <rect x="46" y="60" width="12" height="84" rx="2" fill="rgba(184,149,74,.40)" />
                  <rect x="64" y="44" width="12" height="100" rx="2" fill="rgba(184,149,74,.55)" />
                  <rect x="82" y="28" width="12" height="116" rx="2" fill="rgba(184,149,74,.65)" />
                  <rect x="100" y="16" width="12" height="128" rx="2" fill="rgba(184,149,74,.78)" />
                  <line x1="8" y1="144" x2="114" y2="144" stroke="rgba(184,149,74,.20)" strokeWidth="1" />
                </svg>
              </div>
            </FloatImg>

            {/* Card 3 — Network (beige) — BOTTOM: 186 + 144 + gap(16) = 346 */}
            <FloatImg
              style={{
                position: 'absolute',
                top: '346px',
                left: '0',
                width: '124px',
                height: '158px',
                transform: 'rotate(-1.8deg)',
                animation: 'floatIn 0.9s 1.25s ease both',
                pointerEvents: 'auto',
              }}
              tag="Network" num="14×" depth="8" rotate="-1.8"
            >
              <div className="w-full h-full bg-ivory-dd relative">
                <svg width="124" height="158" viewBox="0 0 140 178" fill="none" className="absolute inset-0">
                  <circle cx="70" cy="60" r="7" fill="rgba(12,12,11,.12)" />
                  <circle cx="30" cy="100" r="5" fill="rgba(30,52,38,.15)" />
                  <circle cx="110" cy="100" r="5" fill="rgba(30,52,38,.15)" />
                  <circle cx="50" cy="148" r="4" fill="rgba(184,149,74,.50)" />
                  <circle cx="90" cy="148" r="4" fill="rgba(184,149,74,.40)" />
                  <line x1="70" y1="60" x2="30" y2="100" stroke="rgba(12,12,11,.08)" strokeWidth="1" />
                  <line x1="70" y1="60" x2="110" y2="100" stroke="rgba(12,12,11,.08)" strokeWidth="1" />
                  <line x1="30" y1="100" x2="50" y2="148" stroke="rgba(184,149,74,.25)" strokeWidth="1" />
                  <line x1="110" y1="100" x2="90" y2="148" stroke="rgba(184,149,74,.25)" strokeWidth="1" />
                  <line x1="30" y1="100" x2="90" y2="148" stroke="rgba(12,12,11,.05)" strokeWidth="1" strokeDasharray="3 3" />
                </svg>
              </div>
            </FloatImg>
          </div>

        </div>

        {/* Scroll hint */}
        <div className="flex items-center gap-[18px] mt-14 opacity-0"
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