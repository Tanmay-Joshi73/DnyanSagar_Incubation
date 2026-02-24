import { useEffect, useRef } from 'react'
import { useReveal, useCountUp, useCursor, useScramble } from './hooks/useAnimations'

import Navbar from './components/Navbar'
import Hero   from './components/Hero'
import { CredibilityStrip, Ticker }       from './components/CredibilityStrip'
import WhatWeDo                           from './components/WhatWeDo'
import { StudioModel, ProcessTimeline, Testimonial } from './components/StudioSections'
import { Programs, MetricsBar, Comparison }          from './components/ProgramsSections'
import { Portfolio, Insights, FinalCTA, Footer }     from './components/BottomSections'

export default function App() {
  const appRef = useRef(null)

  // Global hooks
  useCursor()
  useReveal()
  useCountUp()
  useScramble(appRef)

  return (
    <div ref={appRef} className="min-h-screen">

      {/* Custom cursor elements */}
      <div id="cur-dot"
        className="fixed w-2 h-2 bg-ink rounded-full pointer-events-none z-[9999]"
        style={{ transform: 'translate(-50%,-50%)', mixBlendMode: 'multiply' }}
      />
      <div id="cur-ring"
        className="fixed w-9 h-9 border border-ink/20 rounded-full pointer-events-none z-[9998]"
        style={{ transform: 'translate(-50%,-50%)' }}
      />

      {/* Sections */}
      <Navbar />
      <Hero />
      <CredibilityStrip />
      <Ticker />
      <WhatWeDo />
      <StudioModel />
      <ProcessTimeline />
      <Testimonial />
      <Programs />
      <MetricsBar />
      <Comparison />
      <Portfolio />
      <Insights />
      <FinalCTA />
      <Footer />
    </div>
  )
}
