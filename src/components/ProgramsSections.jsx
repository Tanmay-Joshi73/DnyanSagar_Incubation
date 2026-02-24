/* ── Programs ────────────────────────────────────── */
const programs = [
  {
    phase: 'Pre-Idea',
    phaseClass: 'bg-forest-bg text-forest border-sage',
    title: 'Exploration\nTrack',
    desc: 'For operators and domain experts who know a problem exists but haven\'t yet committed to a company. We help you find the right problem — and the right co-founder — before you build anything.',
  },
  {
    phase: 'Early Startup',
    phaseClass: 'bg-gold-bg text-gold border-gold-lt',
    title: 'Venture\nStudio Track',
    desc: 'For founders with a hypothesis and early traction. We embed our product team, provide a pre-seed check, and work alongside you until you have enough signal to raise a Seed or Series A.',
  },
  {
    phase: 'Growth',
    phaseClass: 'bg-blush text-[#8B5E3C] border-[#d4a882]',
    title: 'Growth\nPartner Track',
    desc: 'For post-Seed companies who need distribution, enterprise relationships, or a follow-on check. We provide operational support, LP network access, and hands-on go-to-market resources.',
  },
]

export function Programs() {
  return (
    <section className="py-[120px] bg-ivory">
      <div className="max-w-container mx-auto px-[52px]">
        <div className="mb-16 reveal">
          <p className="section-label mb-6">Programs</p>
          <h2 className="font-display font-bold tracking-[-0.02em] text-ink"
            style={{ fontSize: 'clamp(2rem, 3vw, 2.6rem)' }}>
            Wherever you are in the journey.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-rule">
          {programs.map((p, i) => (
            <div
              key={p.phase}
              className={`feat-card group py-[52px] transition-colors duration-300 hover:bg-gold/[0.03]
                ${i < 2 ? 'lg:border-r border-rule' : ''}
                ${i > 0 ? 'lg:px-[44px]' : 'pr-[44px]'}
                reveal reveal-d${i}`}
            >
              <span className={`inline-block px-3 py-1 rounded-sm border font-mono text-[0.54rem]
                tracking-[0.16em] uppercase mb-6 ${p.phaseClass}`}>
                {p.phase}
              </span>
              <h3 className="font-display text-[1.45rem] font-bold tracking-[-0.02em] text-ink mb-4 leading-[1.1]"
                style={{ whiteSpace: 'pre-line' }}>
                {p.title}
              </h3>
              <p className="font-body text-[0.8rem] leading-[1.78] text-ink-50 max-w-[280px]">
                {p.desc}
              </p>
              <a href="#"
                className="feat-link inline-flex items-center gap-2 mt-7 font-mono text-[0.58rem]
                  tracking-[0.14em] uppercase text-ink no-underline border-b border-rule pb-[2px]
                  hover:text-gold hover:border-gold">
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Metrics Bar ─────────────────────────────────── */
const metrics = [
  { count: '480', sfx: 'M', dec: '0', label: 'Assets Under Management' },
  { count: '75',  sfx: '+', dec: '0', label: 'Startups Launched' },
  { count: '14',  sfx: '',  dec: '0', label: 'Successful Exits' },
  { count: '4.2', sfx: '×', dec: '1', label: 'Average MOIC' },
]

export function MetricsBar() {
  return (
    <div className="py-[80px] bg-ink">
      <div className="max-w-container mx-auto px-[52px]">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`reveal reveal-d${i} px-[48px] first:pl-0
                ${i < 3 ? 'border-r border-white/8' : ''}`}
            >
              <div
                className="font-display font-bold text-white leading-none mb-[10px]"
                style={{ fontSize: 'clamp(2.4rem, 4vw, 3.8rem)' }}
                data-count={m.count} data-sfx={m.sfx} data-dec={m.dec}
              >
                —
              </div>
              <div className="font-mono text-[0.58rem] tracking-[0.16em] uppercase text-white/40">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Partnership Comparison ──────────────────────── */
const weProvide = [
  'Pre-seed capital ($250K – $1M)',
  'Embedded product team (design + engineering)',
  'Legal setup, cap table, incorporation',
  'Enterprise customer introductions',
  'Investor network & follow-on access',
  'Brand, marketing, and growth support',
]
const theyProvide = [
  'Full-time commitment',
  'Domain expertise & industry context',
  'Leadership & final decision authority',
  'Customer relationships & market access',
  'Cofounder (or willingness to find one)',
  '7–12% equity (varies by stage)',
]

export function Comparison() {
  return (
    <section className="py-[120px] bg-ivory-d border-t border-rule">
      <div className="max-w-container mx-auto px-[52px]">
        <div className="mb-16 reveal">
          <p className="section-label mb-6">Partnership Model</p>
          <h2 className="font-display font-bold tracking-[-0.02em] leading-[1.05] text-ink"
            style={{ fontSize: 'clamp(2rem, 3.2vw, 2.9rem)' }}>
            Complete clarity.<br />Before day one.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 border border-rule reveal reveal-d1">
          {/* Column 1 */}
          <div className="lg:border-r border-rule">
            <div className="px-9 py-7 border-b border-rule bg-ivory flex items-center gap-[14px]">
              <div className="w-8 h-8 rounded-full bg-forest flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M7 2v5l3 2"/><circle cx="7" cy="7" r="5"/>
                </svg>
              </div>
              <span className="font-body text-[0.8rem] font-semibold text-ink">What Meridian Provides</span>
            </div>
            {weProvide.map((item) => (
              <div key={item}
                className="px-9 py-[22px] border-b border-rule last:border-b-0 flex items-center gap-[14px]
                  hover:bg-ink/[0.025] transition-colors duration-200">
                <div className="w-[6px] h-[6px] rounded-full bg-forest flex-shrink-0" />
                <span className="font-body text-[0.82rem] text-ink-50">{item}</span>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div>
            <div className="px-9 py-7 border-b border-rule bg-ivory flex items-center gap-[14px]">
              <div className="w-8 h-8 rounded-full bg-gold-bg border border-gold-lt flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#B8954A" strokeWidth="1.5" strokeLinecap="round">
                  <circle cx="7" cy="4" r="2"/><path d="M3 12c0-2.2 1.8-4 4-4s4 1.8 4 4"/>
                </svg>
              </div>
              <span className="font-body text-[0.8rem] font-semibold text-ink">What the Founder Provides</span>
            </div>
            {theyProvide.map((item) => (
              <div key={item}
                className="px-9 py-[22px] border-b border-rule last:border-b-0 flex items-center gap-[14px]
                  hover:bg-ink/[0.025] transition-colors duration-200">
                <div className="w-[6px] h-[6px] rounded-full bg-gold flex-shrink-0" />
                <span className="font-body text-[0.82rem] text-ink-50">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
