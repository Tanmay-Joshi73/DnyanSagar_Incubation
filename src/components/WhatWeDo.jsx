const services = [
  'Idea Validation',
  'Co-Founder Matching',
  'Product Building',
  'Fundraising Preparation',
  'Investor Introductions',
]

export default function WhatWeDo() {
  return (
    <section className="py-[120px] bg-ivory">
      <div className="max-w-container mx-auto px-[52px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-start">

          {/* Left */}
          <div className="reveal">
            <p className="section-label mb-8">What We Do</p>
            <h2 className="font-display font-bold leading-[1.08] tracking-[-0.02em] text-ink mb-7"
              style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)' }}>
              We don't just advise.<br />We build alongside you.
            </h2>
            <p className="font-body text-[0.88rem] leading-[1.82] text-ink-50 max-w-[440px]">
              From the first whiteboard session to the Series A pitch, Meridian's team is embedded
              inside your company. We bring capital, product talent, legal infrastructure, and a
              network of enterprise buyers that most founders spend years building alone.
            </p>
          </div>

          {/* Right — editorial list */}
          <div className="reveal reveal-d2 pt-5">
            <ul className="list-none">
              {services.map((name, i) => (
                <li
                  key={name}
                  className="group flex items-baseline gap-5 py-[22px] border-b border-rule
                    first:border-t transition-colors duration-200 cursor-none hoverable"
                >
                  <span className="font-mono text-[0.56rem] tracking-[0.16em] text-gold min-w-[28px]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-[1.35rem] font-semibold tracking-[-0.015em]
                    text-ink flex-1 transition-colors duration-200 group-hover:text-gold">
                    {name}
                  </span>
                  <span className="text-rule transition-all duration-200 group-hover:text-gold group-hover:translate-x-1 inline-block">
                    →
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
