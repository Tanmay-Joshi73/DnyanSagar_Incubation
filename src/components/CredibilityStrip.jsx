import { useEffect, useRef } from "react";

/* ── Styles injected once ───────────────────────── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap');

  :root {
    --ink:       #0f0f0d;
    --ink-50:    #6b6b63;
    --ink-30:    #9c9c94;
    --ivory:     #f8f6f1;
    --forest:    #1a2a1e;
    --gold-lt:   #c9a84c;
    --rule:      #e2dfd7;
  }

  .font-display { font-family: 'DM Serif Display', Georgia, serif; }
  .font-body    { font-family: 'DM Sans', sans-serif; }
  .font-mono    { font-family: 'DM Mono', monospace; }

  /* Ticker animation */
  @keyframes ticker-scroll {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .ticker-track {
    animation: ticker-scroll 55s linear infinite;
  }
  .ticker-wrap:hover .ticker-track {
    animation-play-state: paused;
  }

  /* Reveal */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .reveal { opacity: 0; animation: fadeUp 0.55s ease forwards; }
  .reveal-d0 { animation-delay: 0.05s; }
  .reveal-d1 { animation-delay: 0.15s; }
  .reveal-d2 { animation-delay: 0.25s; }
  .reveal-d3 { animation-delay: 0.35s; }
`;

function StyleOnce() {
  return <style>{STYLES}</style>;
}

/* ── CredibilityStrip ────────────────────────────── */
export function CredibilityStrip() {
  const metrics = [
    {
      num: "4%",
      label: "Acceptance rate",
      sub: "4,200 applications · 2024 cohort",
    },
    {
      num: "5 wks",
      label: "Median time to MVP",
      sub: "from day one of program",
    },
    {
      num: "Cohort 08",
      label: "Currently building",
      sub: "14 active companies in-house",
    },
  ];

  const alumni = [
    "Stripe",
    "Razorpay",
    "Vercel",
    "Notion",
    "Nvidia",
    "Google DeepMind",
    "Y Combinator",
  ];

  return (
    <>
      <StyleOnce />

      {/* Main stats row */}
      <div
        style={{
          borderTop: "1px solid var(--rule)",
          borderBottom: "1px solid var(--rule)",
          background: "var(--ivory)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 52px",
          }}
        >
          {/* ── Stat columns ── */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              paddingTop: "36px",
              paddingBottom: "32px",
              gap: "0",
            }}
          >
            {metrics.map((item, i) => (
              <div
                key={i}
                className={`reveal reveal-d${i}`}
                style={{
                  flex: i === 0 ? "0 0 auto" : "1",
                  paddingLeft: i === 0 ? "0" : "48px",
                  paddingRight:
                    i === metrics.length - 1 ? "0" : "48px",
                  borderLeft:
                    i > 0 ? "1px solid var(--rule)" : "none",
                  textAlign: "left",
                }}
              >
                <div
                  className="font-display"
                  style={{
                    fontSize: "1.7rem",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    color: "var(--ink)",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  {item.num}
                </div>
                <div
                  className="font-body"
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--ink)",
                    fontWeight: 500,
                    marginBottom: "2px",
                  }}
                >
                  {item.label}
                </div>
                <div
                  className="font-body"
                  style={{
                    fontSize: "0.72rem",
                    color: "var(--ink-50)",
                    lineHeight: 1.45,
                  }}
                >
                  {item.sub}
                </div>
              </div>
            ))}

            {/* ── Right-side social proof ── */}
            <div
              className="reveal reveal-d3"
              style={{
                flex: "0 0 auto",
                paddingLeft: "48px",
                borderLeft: "1px solid var(--rule)",
                textAlign: "left",
                maxWidth: "220px",
              }}
            >
              <div
                className="font-body"
                style={{
                  fontSize: "0.62rem",
                  color: "var(--ink-30)",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  fontWeight: 500,
                  marginBottom: "10px",
                }}
              >
                2 founders raised within 90 days
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "3px",
                }}
              >
                {["Sequoia Capital", "Benchmark", "Founders Fund"].map(
                  (f, i) => (
                    <div
                      key={i}
                      className="font-display"
                      style={{
                        fontSize: "0.78rem",
                        color: "var(--ink-50)",
                        fontStyle: "italic",
                      }}
                    >
                      {f}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* ── Alumni row ── */}
          <div
            style={{
              borderTop: "1px solid var(--rule)",
              padding: "14px 0",
              display: "flex",
              alignItems: "center",
              gap: "0",
            }}
          >
            <div
              className="font-mono reveal reveal-d0"
              style={{
                fontSize: "0.58rem",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "var(--ink-30)",
                whiteSpace: "nowrap",
                marginRight: "28px",
                flexShrink: 0,
              }}
            >
              Founders now at
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0",
                flexWrap: "nowrap",
                overflow: "hidden",
              }}
            >
              {alumni.map((co, i) => (
                <span
                  key={i}
                  className="font-mono reveal"
                  style={{
                    animationDelay: `${0.1 + i * 0.06}s`,
                    fontSize: "0.62rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.11em",
                    color: "var(--ink-50)",
                    padding: "0 16px",
                    borderLeft:
                      i > 0 ? "1px solid var(--rule)" : "none",
                  }}
                >
                  {co}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ── Ticker ──────────────────────────────────────── */
const TICKER_ITEMS = [
  "Last cohort applications closed in 9 days",
  "14 companies currently in build phase",
  "2 founders raised within 90 days of graduation",
  "Accepted 4% of 2024 applicants",
  "Weekly founder dinners · SF & London",
  "In-house product & design team on-site",
  "First customer introductions included",
  "Operator partners from FAANG & YC",
  "Median MVP shipped in 5 weeks",
  "19 countries represented since 2014",
];

export function Ticker() {
  const all = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <>
      <StyleOnce />
      <div
        className="ticker-wrap"
        style={{
          background: "var(--forest)",
          overflow: "hidden",
          whiteSpace: "nowrap",
          padding: "36px 0",
        }}
      >
        <div className="ticker-track" style={{ display: "inline-flex" }}>
          {all.map((item, i) => (
            <span
              key={i}
              className="font-mono"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                padding: "0 52px",
                fontSize: "0.88rem",
                letterSpacing: "0.11em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.70)",
              }}
            >
              <span
                style={{
                  color: "var(--gold-lt)",
                  fontSize: "0.45rem",
                  marginRight: "2px",
                }}
              >
                ✦
              </span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

/* ── Preview wrapper ─────────────────────────────── */
export default function Preview() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#f8f6f1", minHeight: "100vh", paddingTop: "60px" }}>
      {/* Fake nav line for context */}
      <div style={{ maxWidth: 1200, margin: "0 auto 40px", padding: "0 52px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "20px", borderBottom: "1px solid #e2dfd7" }}>
          <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.1rem", letterSpacing: "-0.01em", color: "#0f0f0d" }}>
            Frontier Studio
          </span>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.14em", color: "#9c9c94" }}>
            Cohort 08 · Now Accepting
          </span>
        </div>
      </div>

      <Ticker />
      <CredibilityStrip />
    </div>
  );
}