/* ── Credibility Strip ───────────────────────────── */
export function CredibilityStrip() {
  const items = [
    { num: '$120M+', label: 'Raised by backed founders', sub: 'across 19 countries' },
    { num: '75+',    label: 'Startups launched',          sub: 'since inception in 2014' },
    { num: 'IIT · Stanford · YC', label: 'Founders from', sub: "world's top institutions" },
  ]

  return (
    <div className="border-t border-b border-rule bg-ivory">
      <div className="max-w-container mx-auto px-[52px] py-6">
        <div className="flex items-center divide-x divide-rule">
          {items.map((item, i) => (
            <div
              key={i}
              className={`reveal reveal-d${i} flex items-center gap-6 px-[44px] flex-1 justify-center first:pl-0 last:pr-0`}
            >
              <span className="font-display text-[2rem] font-bold tracking-[-0.025em] text-ink whitespace-nowrap">
                {item.num}
              </span>
              <span className="font-body text-[0.78rem] text-ink-50 leading-[1.4] max-w-[130px]">
                <strong className="block text-ink font-medium">{item.label}</strong>
                {item.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Ticker ──────────────────────────────────────── */
const TICKER_ITEMS = [
  'Series A & B Focus',
  '$2M — $25M Check Size',
  'San Francisco · New York · London',
  '19 Countries',
  '75+ Startups Launched',
  '14 Successful Exits',
  '10-Year Track Record',
  'Frontier Technology Studio',
]

export function Ticker() {
  const all = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <div className="ticker-wrap bg-forest overflow-hidden whitespace-nowrap py-[13px]">
      <div className="ticker-track inline-flex">
        {all.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-[10px] px-[44px]
              font-mono text-[0.6rem] tracking-[0.14em] uppercase text-white/45
              before:content-['✦'] before:text-gold-lt before:text-[0.48rem]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
