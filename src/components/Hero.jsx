import { useRef } from 'react'

/* ─────────────────────────────────────────────────────────────────────────────
   CHANGES APPLIED:
   1. Headline block expanded to 70–72% canvas — text IS the layout
   2. Floating cards removed; replaced with a hairline architectural divider
   3. Secondary statement added below anchor line ("Operators, engineers…")
   4. Right panel unified into a single vertical narrative (label→para→CTA→stats)
   5. CTA circle gains a faint radial aura (opacity 0.05)
   6. Scroll hint repositioned near the vertical axis
───────────────────────────────────────────────────────────────────────────── */

/* ── Tagline bar ─────────────── */
function TaglineBar() {
  const segments = ['Venture Studio', 'Early Stage', 'Hands-On Capital']
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '24px',
        opacity: 0,
        animation: 'fadeUp 0.5s 0.05s ease forwards',
      }}
    >
      {segments.map((seg, i) => (
        <span key={seg} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{
            fontFamily: "'DM Mono', monospace",
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

/* ── Ghost network backdrop ──── */
function NetworkBackdrop() {
  return (
    <svg
      aria-hidden="true"
      style={{
        position: 'absolute',
        left: '-20px',
        top: '55px',
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

/* ── Headline word reveal ──────── */
function HLWord({ children, delay, italic, gold, indent }) {
  return (
    <span style={{
      display: 'block',
      /* overflow:hidden clips italic ascenders and pushes the line up visually.
         Removing it fixes the AMBITIONS vertical shift entirely. */
      overflow: 'visible',
      /* Compensate for DM Serif Display italic's extra internal leading */
      marginTop: italic ? '-0.04em' : undefined,
      marginBottom: italic ? '-0.02em' : undefined,
    }}>
      <span style={{
        display: 'block',
        opacity: 0,
        animation: `fadeUp 0.65s ${delay}s cubic-bezier(0.22,1,0.36,1) forwards`,
        fontStyle: italic ? 'italic' : 'normal',
        color: gold ? '#B8954A' : undefined,
        paddingLeft: indent ? '0.06em' : undefined,
        verticalAlign: 'baseline',
      }}>
        {children}
      </span>
    </span>
  )
}

export default function Hero() {
  const orbitRef = useRef(null)

  return (
    <>
      {/* ── Keyframes + font import ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pulseAura {
          0%, 100% { opacity: 0.04; transform: scale(1); }
          50%       { opacity: 0.07; transform: scale(1.04); }
        }

        .hero-section *,
        .hero-section *::before,
        .hero-section *::after {
          box-sizing: border-box;
        }

        /* Orbit ring spinner */
        .orbit-ring {
          position: absolute;
          inset: -12px;
          border-radius: 50%;
          border: 1px dashed rgba(12,12,11,0.12);
          animation: spinSlow 18s linear infinite;
        }

        /* Scroll hint scan line */
        @keyframes scanPulse {
          0%, 100% { width: 48px; opacity: 0.5; }
          50%       { width: 72px; opacity: 1; }
        }
        .scan-line {
          height: 1px;
          background: #E7E3DB;
          animation: scanPulse 2.8s ease-in-out infinite;
        }
      `}</style>

      <section
        className="hero-section"
        style={{
          paddingTop: 'calc(72px + 80px)',
          paddingBottom: '100px',
          background: '#F8F6F1',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* Gold ambient glow — top right */}
        <div style={{
          position: 'absolute',
          top: 0, right: 0,
          width: '480px', height: '480px',
          background: 'radial-gradient(ellipse at top right, #FBF6EC 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 44px',           /* tighter padding → more headline room */
        }}>

          {/*
            GRID:
            Left:  ~65% → headline commands the canvas
            Right: 340px → substantial panel with visual weight to balance headline
            Divider: the 1px hairline lives on the border-left of the right col
          */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 360px',
            gap: '0 0',
            alignItems: 'center',      /* vertically center both columns */
            position: 'relative',
          }}>

            {/* ════════════════════════════════════════════
                LEFT — Headline block
                ════════════════════════════════════════════ */}
            <div style={{ position: 'relative', minWidth: 0, paddingRight: '60px' }}>

              {/* Eyebrow */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '28px',
                opacity: 0,
                animation: 'fadeUp 0.6s 0.1s ease forwards',
              }}>
                <span style={{
                  background: 'rgba(30,52,38,0.06)',
                  border: '1px solid rgba(30,52,38,0.14)',
                  padding: '5px 14px',
                  borderRadius: '2px',
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '0.58rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#1E3426',
                }}>
                  Venture Studio
                </span>
                <div style={{ width: '1px', height: '14px', background: '#E7E3DB' }} />
                <span style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '0.58rem',
                  letterSpacing: '0.14em',
                  color: 'rgba(12,12,11,0.45)',
                }}>
                  Est. 2014 — San Francisco
                </span>
              </div>

              <TaglineBar />

              {/*
                HEADLINE
                clamp max bumped to 8.5rem — text IS the layout.
                No paddingRight needed — cards gone; right col handles its own space.
                lineHeight 0.865 = tight luxury stack.
              */}
              <h1 style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontWeight: 700,
                textTransform: 'uppercase',
                fontSize: 'clamp(4rem, 7.5vw, 8.5rem)',
                lineHeight: 0.865,
                letterSpacing: '-0.025em',
                margin: 0,
                marginBottom: 0,
                color: '#0C0C0B',
              }}>
                <HLWord delay={0.28}>Business</HLWord>

                <span style={{ display: 'block', position: 'relative' }}>
                  <NetworkBackdrop />
                  <HLWord delay={0.44} italic indent>Ambitions</HLWord>
                </span>

                <HLWord delay={0.60}>Turned</HLWord>
                <HLWord delay={0.72} gold>Real.</HLWord>
              </h1>

              {/* Primary anchor */}
              <p style={{
                opacity: 0,
                animation: 'fadeUp 0.6s 0.82s ease forwards',
                fontSize: '16px',
                color: 'rgba(12,12,11,0.42)',
                maxWidth: '420px',
                lineHeight: 1.56,
                marginTop: '18px',
                marginBottom: 0,
                fontFamily: "'DM Sans', sans-serif",
              }}>
                We co-build technology companies from zero to funded.
              </p>

              {/* Step 3 — Secondary authority statement */}
              <p style={{
                opacity: 0,
                animation: 'fadeUp 0.6s 0.96s ease forwards',
                fontSize: '14px',
                color: 'rgba(12,12,11,0.30)',
                maxWidth: '400px',
                lineHeight: 1.6,
                marginTop: '10px',
                marginBottom: 0,
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
              }}>
                Operators, engineers, and repeat founders<br />
                working beside you from day one.
              </p>

              {/* Step 6 — Scroll hint near the vertical divider axis */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
                marginTop: '56px',
                opacity: 0,
                animation: 'fadeUp 0.6s 1.45s ease forwards',
                paddingLeft: '2px',
              }}>
                <div className="scan-line" />
                <span style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '0.56rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(12,12,11,0.20)',
                }}>
                  Scroll to explore
                </span>
              </div>
            </div>

            {/* ════════════════════════════════════════════
                RIGHT — Unified narrative panel
                Step 2: 1px hairline divider (border-left)
                Step 4: single vertical rhythm: label → para → CTA → stats
                ════════════════════════════════════════════ */}
            <div
              style={{
                paddingLeft: '56px',
                paddingTop: '0',          /* grid center handles vertical alignment */
                paddingBottom: '0',
                borderLeft: '1px solid rgba(231,227,219,0.7)',
                opacity: 0,
                animation: 'fadeUp 0.8s 0.95s ease forwards',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              {/* Label */}
              <p style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.62rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(12,12,11,0.28)',
                margin: '0 0 20px 0',
              }}>
                Our Mandate
              </p>

              {/* Paragraph — full width of the column, larger */}
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '1.05rem',
                lineHeight: 1.78,
                color: 'rgba(12,12,11,0.52)',
                maxWidth: '295px',
                margin: 0,
              }}>
                We partner with{' '}
                <strong style={{ color: '#0C0C0B', fontWeight: 600 }}>exceptional founders</strong>
                {' '}at the earliest stage — providing capital, product infrastructure, and an operator
                network built for velocity. Not trends.{' '}
                <strong style={{ color: '#0C0C0B', fontWeight: 600 }}>Conviction.</strong>
              </p>

              {/* CTA circle — 168px, properly contained */}
              <div style={{ marginTop: '36px', position: 'relative' }} ref={orbitRef}>

                {/* Radial aura — clipped so it doesn't bleed outside */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '320px',
                  height: '320px',
                  transform: 'translate(-50%, -50%)',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(184,149,74,0.6) 0%, transparent 68%)',
                  opacity: 0.06,
                  pointerEvents: 'none',
                  animation: 'pulseAura 4s ease-in-out infinite',
                }} />

                {/* Orbit container — sized to circle + ring overflow */}
                <div style={{
                  position: 'relative',
                  width: '168px',
                  height: '168px',
                }}>
                  {/* Dashed orbit ring — inset negative so it rings outside */}
                  <div style={{
                    position: 'absolute',
                    inset: '-14px',
                    borderRadius: '50%',
                    border: '1px dashed rgba(12,12,11,0.10)',
                    animation: 'spinSlow 20s linear infinite',
                    pointerEvents: 'none',
                  }} />

                  {/* Gold dot on the ring — positioned at top-right of orbit */}
                  <div style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '50%',
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    background: '#B8954A',
                    transform: 'translateX(-50%)',
                    boxShadow: '0 0 6px rgba(184,149,74,0.5)',
                  }} />

                  <a
                    href="#"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      border: '1.5px solid rgba(12,12,11,0.75)',
                      borderRadius: '50%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '5px',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      transition: 'border-color 0.3s, background 0.3s',
                      background: 'transparent',
                    }}
                  >
                    {/* Gold arc inside circle */}
                    <svg aria-hidden="true" style={{
                      position: 'absolute', inset: 0,
                      width: '100%', height: '100%',
                      opacity: 0.22, pointerEvents: 'none',
                    }} viewBox="0 0 168 168" fill="none">
                      <path d="M 84 6 A 78 78 0 0 1 162 84"
                        stroke="#B8954A" strokeWidth="2" strokeLinecap="round" />
                    </svg>

                    {['ENTER', 'THE', 'STUDIO'].map((word, i) => (
                      <span key={word} style={{
                        fontFamily: "'DM Mono', monospace",
                        textTransform: 'uppercase',
                        fontSize: i === 1 ? '0.55rem' : '0.68rem',
                        letterSpacing: '0.2em',
                        lineHeight: 1.2,
                        color: '#0C0C0B',
                        opacity: 0,
                        animation: `fadeUp 0.4s ${0.98 + i * 0.08}s ease forwards`,
                        position: 'relative',
                        zIndex: 1,
                      }}>
                        {word}
                      </span>
                    ))}
                  </a>
                </div>
              </div>

              {/* Stats — bigger numbers, more generous spacing */}
              <div style={{
                marginTop: '48px',
                paddingTop: '28px',
                borderTop: '1px solid #E7E3DB',
                display: 'flex',
                gap: '36px',
                width: '100%',
              }}>
                {[
                  { count: '480', sfx: 'M', label: 'AUM' },
                  { count: '75', sfx: '+', label: 'Startups' },
                  { count: '4.2', sfx: '×', label: 'Avg. MOIC' },
                ].map((s) => (
                  <div key={s.label}>
                    <div style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontWeight: 700,
                      fontSize: '2.1rem',
                      lineHeight: 1,
                      letterSpacing: '-0.025em',
                      color: '#0C0C0B',
                    }}>
                      {s.count}<span style={{ fontSize: '1.2rem', letterSpacing: '-0.01em' }}>{s.sfx}</span>
                    </div>
                    <div style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '0.54rem',
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: 'rgba(12,12,11,0.38)',
                      marginTop: '7px',
                    }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}