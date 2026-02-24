/* ── Studio Model ────────────────────────────────── */
const diffs = [
  {
    icon: (
      <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M7 2v5l3 2"/><circle cx="7" cy="7" r="5"/>
      </svg>
    ),
    title: 'Speed over ceremony',
    desc:  'One partner, full authority. Decisions in days, not committee weeks.',
  },
  {
    icon: (
      <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M2 7h10M8 3l4 4-4 4"/>
      </svg>
    ),
    title: 'Hands-on operators',
    desc:  'Real engineers and designers in your Slack — not consultants on a retainer.',
  },
  {
    icon: (
      <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="7" cy="4" r="2"/><path d="M3 12c0-2.2 1.8-4 4-4s4 1.8 4 4"/>
      </svg>
    ),
    title: 'Founder-first alignment',
    desc:  'We succeed when you succeed — not on demo day participation certificates.',
  },
]

export function StudioModel() {
  return (
    <section className="py-[120px] bg-forest relative overflow-hidden">
      {/* ambient glow */}
      <div className="absolute top-[-60px] right-[-60px] w-[350px] h-[350px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(184,149,74,.12) 0%, transparent 70%)' }}
      />
      <div className="max-w-container mx-auto px-[52px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center">

          {/* Left */}
          <div className="reveal">
            <p className="font-mono text-[0.6rem] tracking-[0.22em] uppercase text-gold-lt mb-8 flex items-center gap-[14px] before:content-[''] before:w-6 before:h-px before:bg-gold-lt">
              The Meridian Difference
            </p>
            <h2 className="font-display font-bold text-white leading-[1.05] tracking-[-0.025em]"
              style={{ fontSize: 'clamp(2.4rem, 4vw, 3.6rem)' }}>
              We don't mentor startups.<br />
              We <em className="not-italic italic text-gold-lt">build them</em><br />
              with you.
            </h2>
          </div>

          {/* Right */}
          <div className="reveal reveal-d2 border-l border-white/10 pl-[56px]">
            <p className="font-body text-[0.9rem] leading-[1.82] text-white/60 mb-10">
              Accelerators give you <strong className="text-white font-medium">90 days and a demo day</strong>.
              Meridian provides a full operating infrastructure — designers, engineers, growth operators
              — embedded inside your company for as long as it takes to reach product-market fit.
            </p>
            <div className="flex flex-col divide-y divide-white/8">
              {diffs.map((d) => (
                <div key={d.title} className="flex gap-5 py-5 first:pt-0">
                  <div className="w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center
                    bg-gold/15 border border-gold/30 text-gold-lt">
                    <div className="w-[14px] h-[14px]">{d.icon}</div>
                  </div>
                  <div>
                    <div className="font-body text-[0.78rem] font-semibold text-white mb-[5px]">{d.title}</div>
                    <div className="font-body text-[0.78rem] leading-[1.6] text-white/45">{d.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ── Process Timeline ────────────────────────────── */
const steps = [
  { n: '01', title: 'Apply',     tag: '5-day response',  desc: 'A short form. No deck required. We want to understand the problem you are obsessed with — not a polished pitch.' },
  { n: '02', title: 'Interview', tag: '2–3 weeks',        desc: 'Two conversations. One with a partner, one with an operator. We assess conviction, not just credentials.' },
  { n: '03', title: 'Build',     tag: '90–180 days',      desc: 'Embedded sprints. Our team works inside your product. First users, first revenue, first real signal.' },
  { n: '04', title: 'Launch',    tag: 'Series A ready',   desc: 'Investor introductions, deck refinement, and warm intros to our LP network and co-investors globally.' },
]

export function ProcessTimeline() {
  return (
    <section className="py-[120px] bg-ivory">
      <div className="max-w-container mx-auto px-[52px]">
        <div className="mb-[72px] reveal">
          <p className="section-label mb-8">The Journey</p>
          <h2 className="font-display font-bold tracking-[-0.02em] leading-[1.05] text-ink max-w-[520px]"
            style={{ fontSize: 'clamp(2rem, 3.4vw, 3rem)' }}>
            Four stages. One focused arc.
          </h2>
        </div>

        {/* Timeline grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 relative">
          {/* Horizontal connector line */}
          <div className="absolute top-[22px] left-[12.5%] right-[12.5%] h-px bg-rule hidden lg:block" />

          {steps.map((s, i) => (
            <div
              key={s.n}
              className={`step-card pr-7 last:pr-0 relative z-10 reveal reveal-d${i}`}
            >
              {/* Dot */}
              <div className="step-dot w-11 h-11 border-[1.5px] border-rule rounded-full
                bg-ivory flex items-center justify-center mb-7 relative z-10
                transition-all duration-300">
                <span className="step-num font-mono text-[0.62rem] tracking-[0.12em] text-ink-50 transition-colors duration-300">
                  {s.n}
                </span>
              </div>

              <div className="step-title font-display text-[1.25rem] font-bold tracking-[-0.015em]
                text-ink mb-3 transition-colors duration-300">
                {s.title}
              </div>
              <p className="font-body text-[0.78rem] leading-[1.72] text-ink-50">
                {s.desc}
              </p>
              <span className="step-tag mt-[18px] inline-block bg-forest-bg border border-sage
                px-3 py-1 rounded-sm font-mono text-[0.52rem] tracking-[0.14em] uppercase text-forest">
                {s.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Testimonial ─────────────────────────────────── */
export function Testimonial() {
  return (
    <section className="py-[120px] bg-gold-bg border-t border-b border-ivory-dd">
      <div className="max-w-container mx-auto px-[52px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-[80px] items-center">

          {/* Quote */}
          <div className="reveal">
            <p className="font-mono text-[0.58rem] tracking-[0.2em] uppercase text-gold mb-8
              flex items-center gap-3 before:content-[''] before:w-[18px] before:h-px before:bg-gold">
              Founder Story
            </p>
            <blockquote className="font-display font-semibold italic leading-[1.25] tracking-[-0.01em]
              text-ink mb-10"
              style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.5rem)' }}>
              "Meridian didn't give us a curriculum. They gave us{' '}
              <span className="text-gold">engineers, customers,</span> and a term sheet
              — in the same quarter. I've never seen anything like it."
            </blockquote>
            <div className="flex items-center gap-[18px]">
              <div className="w-6 h-px bg-rule" />
              <div>
                <div className="font-body text-[0.82rem] font-semibold text-ink">Arjun Mehta</div>
                <div className="font-body text-[0.75rem] text-ink-50">CEO, Arclight — Raised $8.4M Series A</div>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="reveal reveal-d2 text-center">
            <div className="w-[220px] h-[280px] rounded-lg overflow-hidden bg-blush mx-auto
              shadow-[0_20px_48px_rgba(12,12,11,.10)] relative flex items-end">
              <svg width="220" height="280" viewBox="0 0 220 280" fill="none" className="absolute inset-0">
                <ellipse cx="110" cy="90" rx="36" ry="42" fill="rgba(139,94,60,.25)"/>
                <path d="M44 240 Q60 185 110 178 Q160 185 176 240 L220 280 L0 280 Z" fill="rgba(139,94,60,.18)"/>
                <rect x="0" y="220" width="220" height="60" fill="rgba(232,213,196,.30)"/>
                <line x1="0" y1="220" x2="220" y2="220" stroke="rgba(184,149,74,.30)" strokeWidth="1"/>
                <rect x="16" y="240" width="80" height="24" rx="2" fill="rgba(184,149,74,.15)"/>
                <rect x="20" y="247" width="52" height="3"  rx="1" fill="rgba(184,149,74,.40)"/>
                <rect x="20" y="254" width="36" height="2"  rx="1" fill="rgba(184,149,74,.25)"/>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
