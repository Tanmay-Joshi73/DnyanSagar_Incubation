# Meridian Venture Studio — React + Tailwind Website

A premium venture capital / startup incubator website built with **React 18** and **Tailwind CSS 3**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start

# 3. Build for production
npm run build
```

Opens at `http://localhost:3000`

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx              # Sticky nav with blur on scroll
│   ├── Hero.jsx                # Hero with headline, floating images, CTA
│   ├── CredibilityStrip.jsx    # Trust numbers + Ticker marquee
│   ├── WhatWeDo.jsx            # Editorial service list
│   ├── StudioSections.jsx      # StudioModel + ProcessTimeline + Testimonial
│   ├── ProgramsSections.jsx    # Programs + MetricsBar + Comparison
│   └── BottomSections.jsx      # Portfolio + Insights + FinalCTA + Footer
├── hooks/
│   └── useAnimations.js        # All custom hooks
│       ├── useReveal()         # IntersectionObserver scroll reveals
│       ├── useCountUp()        # Animated number counters
│       ├── useCursor()         # Custom dual cursor with lag
│       ├── useScramble()       # Letter scramble on hover
│       ├── useParallax()       # Mouse parallax for images
│       └── useMagnetic()       # Magnetic button effect
├── App.jsx                     # Root component — composes all sections
├── index.js                    # React entry point
└── index.css                   # Tailwind directives + custom animations
```

---

## 🎨 Design System

### Color Palette

| Token         | Hex       | Role                              |
|---------------|-----------|-----------------------------------|
| `ivory`       | `#FAF8F3` | Base background — warm paper      |
| `ink`         | `#0C0C0B` | Primary text                      |
| `ink-50`      | `#6B6B68` | Secondary / body text             |
| `gold`        | `#B8954A` | Accent — kickers, highlights      |
| `gold-lt`     | `#D4B06A` | Light gold for dark sections      |
| `gold-bg`     | `#FBF6EC` | Gold tinted background            |
| `forest`      | `#1E3426` | Dark sections, primary CTA        |
| `forest-bg`   | `#EEF3EF` | Forest tinted background          |
| `sage`        | `#8FA68C` | Muted green for borders           |
| `blush`       | `#E8D5C4` | Warm sand for Growth program tag  |
| `rule`        | `#E2DDD4` | Hairline borders                  |

### Typography

| Font                | Usage          | Import         |
|---------------------|----------------|----------------|
| Cormorant Garamond  | Display / H1–H3 | Google Fonts  |
| DM Sans             | Body / UI      | Google Fonts   |
| DM Mono             | Labels / mono  | Google Fonts   |

### Tailwind Custom Classes (in `index.css`)

- `.reveal` / `.reveal.in` — scroll-triggered fade-up
- `.section-label` — gold uppercase label with left rule
- `.hl-wrap` / `.hl-inner` — headline overflow reveal animation
- `.ticker-track` — auto-scrolling ticker
- `.orbit-ring` — spinning dashed ring around CTA
- `.cta-circle` — fill-from-center hover effect
- `.feat-link` — shows on parent hover
- `.step-card:hover` — step dot color transitions
- `.article-row:hover` — left slide on hover
- `.scan-line` — animated gold scan effect

---

## ✨ Interactive Features

| Feature | Component | Hook |
|---------|-----------|------|
| Custom dual cursor | `App.jsx` | `useCursor` |
| Mouse parallax images | `Hero.jsx` | `useParallax` |
| Magnetic CTA button | `Hero.jsx` | `useMagnetic` |
| Headline letter scramble | `App.jsx` | `useScramble` |
| Scroll reveal animations | All sections | `useReveal` |
| Animated stat counters | `Hero`, `MetricsBar` | `useCountUp` |
| Sticky nav blur | `Navbar.jsx` | local useState |
| Ticker pause on hover | `CredibilityStrip.jsx` | CSS |
| Orbit ring spin | `Hero.jsx` | CSS animation |
| Step hover states | `StudioSections.jsx` | CSS |

---

## 📐 Sections Included

1. **Navbar** — Transparent → blurred on scroll, center links, forest CTA
2. **Hero** — Left-aligned headline, 3 floating editorial images, magnetic circular CTA, stats
3. **Credibility Strip** — $120M+, 75+ startups, IIT/Stanford/YC
4. **Ticker** — Forest green scrolling marquee, pauses on hover
5. **What We Do** — Editorial left/right with hover list
6. **Studio Model** — Full dark forest section with gold italic statement
7. **Process Timeline** — 4-step horizontal with animated hover tags
8. **Testimonial** — Magazine-style italic quote with gold highlight
9. **Programs** — 3 tracks with color-coded pills
10. **Metrics Bar** — Full-width dark with animated counters
11. **Comparison** — Partnership clarity table (forest vs gold dots)
12. **Portfolio** — 10 companies in bordered grid with stage badges
13. **Insights** — Editorial article list, hover slides + gold title
14. **Final CTA** — Centered with gold italic, dual buttons
15. **Footer** — 4-column dark with legal row

---

## 🧠 Design Philosophy

- **Typography first** — Cormorant Garamond at display scale is the primary visual
- **Whitespace as design** — 120px section padding, generous leading
- **No gradients, no dark hero, no glass** — strict constraints honored
- **Color < 5% of viewport** — gold used sparingly for maximum impact
- **Animations: slow + subtle** — luxury brand pacing, not SaaS bounce
- **All interactive** — every element responds to cursor, hover, or scroll

---

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "tailwindcss": "^3.4.0",
  "autoprefixer": "^10.4.16",
  "postcss": "^8.4.32"
}
```

Zero component library imports. Zero UI kits. Pure React + Tailwind.
