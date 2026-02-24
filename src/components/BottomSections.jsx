/* ── Portfolio Grid ──────────────────────────────── */
const portfolio = [
  { name: 'Arclight',  tag: 'Infrastructure AI',   stage: 'Series A', sc: 'bg-gold-bg text-gold border-gold-lt' },
  { name: 'Vellum',    tag: 'Developer Tools',       stage: 'Seed',     sc: 'bg-forest-bg text-forest border-sage' },
  { name: 'Foundry',   tag: 'Climate Tech',           stage: 'Series B', sc: 'bg-blush text-[#8B5E3C] border-[#d4a882]' },
  { name: 'Coreto',    tag: 'FinTech',                stage: 'Series A', sc: 'bg-gold-bg text-gold border-gold-lt' },
  { name: 'Aperture',  tag: 'Media Intelligence',    stage: 'Seed',     sc: 'bg-forest-bg text-forest border-sage' },
  { name: 'Prism',     tag: 'Healthcare AI',          stage: 'Series A', sc: 'bg-gold-bg text-gold border-gold-lt' },
  { name: 'Baseline',  tag: 'Data Infrastructure',   stage: 'Series B', sc: 'bg-blush text-[#8B5E3C] border-[#d4a882]' },
  { name: 'Nomad',     tag: 'Future of Work',         stage: 'Seed',     sc: 'bg-forest-bg text-forest border-sage' },
  { name: 'Vertex',    tag: 'Deep Tech',              stage: 'Series A', sc: 'bg-gold-bg text-gold border-gold-lt' },
  { name: 'Cipher',    tag: 'Cybersecurity',          stage: 'Seed',     sc: 'bg-forest-bg text-forest border-sage' },
]

export function Portfolio() {
  return (
    <section className="py-[100px] bg-ivory border-t border-rule">
      <div className="max-w-container mx-auto px-[52px]">
        <p className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-ink-50 mb-[52px]">
          Selected Portfolio — 2014 to Present
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-5 border border-rule reveal">
          {portfolio.map((co, i) => (
            <div
              key={co.name}
              className={`group p-8 flex flex-col gap-[6px] transition-colors duration-250
                hover:bg-gold-bg hoverable cursor-none
                ${(i + 1) % 5 !== 0 ? 'lg:border-r' : ''} border-rule
                ${i < 5 ? 'lg:border-b' : ''} border-rule`}
            >
              <div className="font-display text-[0.98rem] font-bold text-ink tracking-[-0.01em]">
                {co.name}
              </div>
              <div className="font-mono text-[0.52rem] tracking-[0.12em] uppercase text-ink-50">
                {co.tag}
              </div>
              <span className={`mt-[6px] self-start px-2 py-[2px] rounded-sm border
                font-mono text-[0.48rem] tracking-[0.12em] uppercase ${co.sc}`}>
                {co.stage}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Insights ────────────────────────────────────── */
const articles = [
  { n: '001', tag: 'Fundraising',    date: 'Feb 2025', title: 'How to validate a startup idea in 21 days — without writing a line of code' },
  { n: '002', tag: 'Co-Founding',    date: 'Jan 2025', title: 'The cofounder conversation most founders never have — and why it kills companies' },
  { n: '003', tag: 'Venture Studio', date: 'Dec 2024', title: 'Why the accelerator model is broken — and what replaced it' },
  { n: '004', tag: 'Fundraising',    date: 'Nov 2024', title: 'The five fundraising mistakes that kill Series A conversations before they start' },
]

export function Insights() {
  return (
    <section className="py-[120px] bg-ivory border-t border-rule">
      <div className="max-w-container mx-auto px-[52px]">
        <div className="flex items-end justify-between mb-[60px] reveal">
          <h2 className="font-display font-bold tracking-[-0.02em] text-ink"
            style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)' }}>
            From the Studio
          </h2>
          <a href="#" className="font-mono text-[0.6rem] tracking-[0.16em] uppercase text-ink-50
            no-underline border-b border-rule pb-[2px] hover:text-gold hover:border-gold transition-colors duration-200">
            All articles →
          </a>
        </div>

        <div className="flex flex-col">
          {articles.map((a, i) => (
            <a
              key={a.n}
              href="#"
              className={`article-row group grid grid-cols-[80px_1fr_auto] gap-8 items-center
                py-7 border-b border-rule first:border-t no-underline hoverable
                reveal reveal-d${i}`}
            >
              <span className="font-mono text-[0.6rem] tracking-[0.14em] text-ink-20 text-right">
                {a.n}
              </span>
              <div>
                <div className="font-mono text-[0.52rem] tracking-[0.16em] uppercase text-gold mb-[6px]">
                  {a.tag}
                </div>
                <div className="font-display text-[1.15rem] font-semibold tracking-[-0.01em]
                  text-ink leading-[1.15] group-hover:text-gold transition-colors duration-200">
                  {a.title}
                </div>
              </div>
              <span className="font-mono text-[0.56rem] tracking-[0.12em] text-ink-20 whitespace-nowrap">
                {a.date}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Final CTA ───────────────────────────────────── */
export function FinalCTA() {
  return (
    <section className="py-[160px] bg-ivory border-t border-rule text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 80%, #FBF6EC 0%, transparent 65%)' }}
      />
      <div className="max-w-container mx-auto px-[52px] relative z-10">
        <p className="reveal font-mono text-[0.62rem] tracking-[0.22em] uppercase text-gold mb-9
          flex items-center justify-center gap-[14px]
          before:content-[''] before:w-10 before:h-px before:bg-gold
          after:content-[''] after:w-10 after:h-px after:bg-gold">
          The Studio is Open
        </p>

        <h2 className="reveal reveal-d1 font-display font-bold tracking-[-0.025em] leading-[1.05]
          text-ink max-w-[680px] mx-auto mb-4"
          style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}>
          Great companies<br />rarely start <em className="not-italic italic text-gold">alone.</em>
        </h2>

        <p className="reveal reveal-d2 font-body text-[0.88rem] text-ink-50 max-w-[380px]
          mx-auto mb-14 leading-[1.7]">
          Apply to Meridian. Tell us the problem you can't stop thinking about. We'll take it from there.
        </p>

        <div className="reveal reveal-d3 flex items-center justify-center gap-5">
          <a href="#"
            className="bg-forest text-white px-10 py-4 rounded-sm font-body text-[0.8rem]
              font-semibold tracking-[0.1em] uppercase no-underline border-[1.5px] border-forest
              transition-colors duration-250 hover:bg-forest-lt hover:border-forest-lt">
            Apply to the Studio
          </a>
          <a href="#"
            className="bg-transparent text-ink px-10 py-4 rounded-sm font-body text-[0.8rem]
              font-medium tracking-[0.1em] uppercase no-underline border-[1.5px] border-rule
              transition-colors duration-250 hover:border-ink">
            Read How It Works
          </a>
        </div>
      </div>
    </section>
  )
}

/* ── Footer ──────────────────────────────────────── */
const footerCols = [
  {
    title: 'Company',
    links: ['About', 'Team', 'Portfolio', 'Thesis', 'Careers'],
  },
  {
    title: 'Programs',
    links: ['Exploration Track', 'Venture Studio', 'Growth Partner', 'Community', 'Library'],
  },
  {
    title: 'Connect',
    links: ['Apply', 'LinkedIn', 'Twitter / X', 'Newsletter', 'Press'],
  },
]

export function Footer() {
  return (
    <footer className="bg-ink py-[72px] pb-[48px]">
      <div className="max-w-container mx-auto px-[52px]">
        {/* Top grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/8 mb-10">
          <div>
            <a href="/" className="font-display text-[1.4rem] font-bold text-white no-underline block mb-4">
              Meridian<em className="not-italic italic text-gold-lt">.</em>
            </a>
            <p className="font-body text-[0.78rem] text-white/38 leading-[1.6]">
              A venture studio for founders who build what the world will need next.
            </p>
          </div>
          {footerCols.map((col) => (
            <div key={col.title}>
              <div className="font-mono text-[0.6rem] tracking-[0.18em] uppercase text-white/35 mb-5">
                {col.title}
              </div>
              <ul className="list-none flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="font-body text-[0.8rem] text-white/55 no-underline
                      hover:text-white transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-[0.56rem] tracking-[0.12em] text-white/20">
            © 2025 Meridian Venture Studio, LLC — San Francisco
          </span>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Disclosures'].map((l) => (
              <a key={l} href="#"
                className="font-mono text-[0.56rem] tracking-[0.1em] text-white/20 no-underline
                  hover:text-white/50 transition-colors duration-200">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
