import { useState, useEffect } from 'react'

/**
 * MERIDIAN INCUBATION HUB - Premium Hero Section
 * 
 * ✓ 100% Tailwind CSS
 * ✓ Packed with visual density & interactive elements
 * ✓ Compelling founder-focused messaging
 * ✓ Rich animations & hover effects
 * ✓ Multiple engagement points
 * ✓ Professional visual hierarchy
 */

function AnimatedStatBox({ value, label, suffix, delay }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      let current = 0
      const interval = setInterval(() => {
        if (current < parseInt(value)) {
          current += Math.ceil(parseInt(value) / 30)
          setCount(Math.min(current, parseInt(value)))
        } else {
          clearInterval(interval)
        }
      }, 30)
      return () => clearInterval(interval)
    }, parseInt(delay) * 1000)

    return () => clearTimeout(timer)
  }, [value, delay])

  return (
    <div
      className="opacity-0 animate-fade-up"
      style={{ animationDelay: delay }}
    >
      <div className="text-4xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight">
        {count}<span className="text-2xl text-amber-600 ml-1">{suffix}</span>
      </div>
      <div className="font-mono text-xs tracking-widest text-gray-500 uppercase mt-2">
        {label}
      </div>
    </div>
  )
}

function BenefitCard({ icon, title, description, delay }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="opacity-0 animate-fade-up group"
      style={{ animationDelay: delay }}
    >
      <div
        className="h-full p-6 rounded-xl border border-gray-200 bg-white/60 backdrop-blur-sm transition-all duration-300 cursor-pointer hover:border-amber-600 hover:shadow-xl hover:shadow-amber-600/10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`text-4xl mb-4 transition-transform duration-300 ${isHovered ? 'scale-125' : ''}`}>
          {icon}
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        <div className="mt-4 h-1 w-0 bg-gradient-to-r from-amber-600 to-transparent rounded transition-all duration-300 group-hover:w-full" />
      </div>
    </div>
  )
}

function ProcessStep({ number, title, description, delay }) {
  return (
    <div
      className="opacity-0 animate-fade-up relative pl-12"
      style={{ animationDelay: delay }}
    >
      {/* Step number circle */}
      <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-amber-600/30">
        {number}
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

function TestimonialCard({ quote, founder, company, delay }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="opacity-0 animate-fade-up"
      style={{ animationDelay: delay }}
    >
      <div
        className="p-6 rounded-xl border border-amber-200/50 bg-gradient-to-br from-amber-50/40 to-white backdrop-blur-sm transition-all duration-300 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-600/5 relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Quote mark accent */}
        <div className="absolute top-4 right-6 text-6xl text-amber-600/10 font-serif">
          "
        </div>

        <p className="text-sm text-gray-700 leading-relaxed mb-4 relative z-10">
          {quote}
        </p>

        <div className="flex items-center gap-3 border-t border-gray-200 pt-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-sm">
            {founder.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900">{founder}</p>
            <p className="text-xs text-gray-500">{company}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function MeridianHeroFull() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500;600&display=swap');

        * {
          box-sizing: border-box;
        }

        @keyframes fadeUp {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(212, 165, 116, 0.4); }
          50% { box-shadow: 0 0 0 8px rgba(212, 165, 116, 0); }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-up {
          animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s infinite;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        body {
          font-family: 'DM Sans', sans-serif;
        }

        .font-serif {
          font-family: 'DM Serif Display', Georgia, serif;
        }

        .font-mono {
          font-family: 'DM Mono', monospace;
        }

        /* Gradient text */
        .text-gradient {
          background: linear-gradient(135deg, #0C0C0B 0%, #D4A574 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Glassmorphism */
        .glass {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        /* Grid pattern background */
        .grid-bg {
          background-image: 
            linear-gradient(rgba(212, 165, 116, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 165, 116, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .scan-line {
          height: 1.5px;
          background: linear-gradient(90deg, transparent, rgba(12,12,11,0.3), transparent);
          animation: scanPulse 2.8s ease-in-out infinite;
        }

        @keyframes scanPulse {
          0%, 100% { opacity: 0.4; width: 40px; }
          50% { opacity: 1; width: 80px; }
        }
      `}</style>

      {/* ═══════════════════════════════════════════════════════════
          MAIN HERO SECTION
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50/30 overflow-hidden grid-bg">

        {/* Animated background gradients */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-200/30 to-transparent rounded-full blur-3xl opacity-60" />
          <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-br from-amber-100/20 to-transparent rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-gray-200/20 to-transparent rounded-full blur-3xl opacity-30" />
        </div>

        {/* Decorative accent elements */}
        <div className="absolute top-20 left-12 w-2 h-2 rounded-full bg-amber-600 opacity-40 animate-pulse" />
        <div className="absolute bottom-32 right-24 w-3 h-3 rounded-full border-2 border-amber-600 opacity-30" />
        <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 rounded-full bg-gray-400 opacity-20" />

        {/* Vertical accent lines */}
        <div className="absolute left-32 top-1/4 w-px h-96 bg-gradient-to-b from-amber-600/40 via-amber-600/20 to-transparent" />
        <div className="absolute right-40 top-1/3 w-px h-80 bg-gradient-to-b from-transparent via-amber-600/15 to-amber-600/30" />

        {/* Main content container */}
        <div className="relative z-10 pt-24 pb-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">

            {/* ═══ TOP SECTION - Eyebrow & Tagline ═══ */}
            <div className="mb-16">
              <div className="flex flex-wrap items-center gap-3 mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <span className="font-mono text-xs font-medium tracking-wider text-gray-700 bg-gradient-to-r from-amber-100 to-amber-50 px-4 py-2 rounded-lg border border-amber-200 shadow-sm">
                  🚀 Venture Studio
                </span>
                <span className="font-mono text-xs tracking-wider text-gray-500">
                  Est. 2014 — San Francisco
                </span>
                <span className="font-mono text-xs tracking-wider text-amber-600 font-bold">
                  Next Batch Closes Jan 2025
                </span>
              </div>

              <div className="flex items-center gap-2.5 mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
                {['Venture Studio', 'Early Stage', 'Hands-On Capital'].map((seg, i) => (
                  <div key={seg} className="flex items-center gap-2">
                    <span className="font-mono text-xs tracking-widest text-gray-600 font-medium uppercase">
                      {seg}
                    </span>
                    {i < 2 && <div className="w-1.5 h-1.5 rounded-full bg-amber-600 opacity-80 shadow-sm" />}
                  </div>
                ))}
              </div>
            </div>

            {/* ═══ MAIN HEADLINE & GRID ═══ */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-20">

              {/* LEFT COLUMN - Headline & Copy */}
              <div className="lg:col-span-2">

                {/* Main Headline */}
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-8 text-gray-900 opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                  Transform Your
                  <span className="block text-gradient"> Startup</span>
                  Idea Into
                  <span className="block text-amber-600"> Reality.</span>
                </h1>

                {/* Subheading */}
                <p className="text-xl text-gray-700 max-w-xl leading-relaxed mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.45s' }}>
                  Get funded, built, and backed by industry leaders. From day one.
                </p>

                {/* Key Stats Line */}
                <div className="flex flex-wrap items-center gap-8 mb-10 pb-10 border-b border-gray-300 opacity-0 animate-fade-up" style={{ animationDelay: '0.55s' }}>
                  <div>
                    <div className="text-3xl font-serif font-bold text-gray-900">$50M</div>
                    <div className="font-mono text-xs tracking-widest text-gray-500 uppercase mt-1">Invested</div>
                  </div>
                  <div>
                    <div className="text-3xl font-serif font-bold text-gray-900">95%</div>
                    <div className="font-mono text-xs tracking-widest text-gray-500 uppercase mt-1">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-serif font-bold text-amber-600">3-6</div>
                    <div className="font-mono text-xs tracking-widest text-gray-500 uppercase mt-1">Month Program</div>
                  </div>
                </div>

                {/* Primary CTA Button */}
                <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.65s' }}>
                  <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold rounded-lg hover:shadow-xl hover:shadow-amber-600/40 transition-all duration-300 hover:scale-105 font-mono text-sm tracking-widest uppercase">
                    Apply Now
                  </button>
                  <button className="px-8 py-4 border-2 border-gray-300 text-gray-900 font-bold rounded-lg hover:border-amber-600 hover:bg-amber-50 transition-all duration-300 font-mono text-sm tracking-widest uppercase">
                    Learn More
                  </button>
                </div>

              </div>

              {/* RIGHT COLUMN - Quick Stats & Features */}
              <div className="lg:col-span-1">

                {/* Stats Box */}
                <div className="glass rounded-2xl p-8 mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.7s' }}>
                  <p className="font-mono text-xs tracking-widest text-gray-500 uppercase mb-8">What You Get</p>

                  <div className="space-y-8">
                    <AnimatedStatBox value="480" label="AUM" suffix="M" delay="0.85" />
                    <AnimatedStatBox value="75" label="Portfolio" suffix="+" delay="0.95" />
                    <AnimatedStatBox value="4.2" label="Avg. MOIC" suffix="×" delay="1.05" />
                  </div>
                </div>

                {/* Highlight badge */}
                <div className="p-6 rounded-xl bg-gradient-to-br from-amber-100 to-amber-50 border border-amber-300 opacity-0 animate-fade-up" style={{ animationDelay: '0.8s' }}>
                  <p className="text-sm text-gray-900 leading-relaxed">
                    <span className="font-bold text-amber-900">Join 75+ companies</span> that raised over <span className="font-bold text-amber-900">$500M</span> from our network.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>

      </section>

      {/* ═══════════════════════════════════════════════════════════
          BENEFITS SECTION
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="mb-16 opacity-0 animate-fade-up" style={{ animationDelay: '1.1s' }}>
            <h2 className="text-5xl font-serif font-bold text-gray-900 mb-4">
              Why Join Meridian?
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BenefitCard
              icon="💰"
              title="Seed Funding"
              description="Up to $500K seed investment with no dilution beyond 10%"
              delay="1.25s"
            />
            <BenefitCard
              icon="👨‍💼"
              title="Expert Mentorship"
              description="Dedicated founder advisors, CTOs, and business strategists"
              delay="1.35s"
            />
            <BenefitCard
              icon="🌐"
              title="Investor Network"
              description="Direct access to 200+ VCs and angel investors"
              delay="1.45s"
            />
            <BenefitCard
              icon="🏢"
              title="Infrastructure"
              description="Cloud credits, legal support, and technical resources"
              delay="1.55s"
            />
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PROCESS SECTION
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="mb-16 opacity-0 animate-fade-up" style={{ animationDelay: '1.1s' }}>
            <h2 className="text-5xl font-serif font-bold text-gray-900 mb-4">
              Your Incubation Journey
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ProcessStep
              number="1"
              title="Application & Review"
              description="Submit your pitch deck and business plan. Our team reviews applications on a rolling basis."
              delay="1.3s"
            />
            <ProcessStep
              number="2"
              title="Founder Interview"
              description="Connect with our team to discuss your vision and potential fit with our community."
              delay="1.4s"
            />
            <ProcessStep
              number="3"
              title="Incubation Program"
              description="3-6 month intensive program with mentorship, capital, and access to investor network."
              delay="1.5s"
            />
            <ProcessStep
              number="4"
              title="Demo Day & Fundraising"
              description="Showcase your product to 100+ investors and accelerate your Series A fundraising."
              delay="1.6s"
            />
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TESTIMONIALS SECTION
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="mb-16 opacity-0 animate-fade-up" style={{ animationDelay: '1.1s' }}>
            <h2 className="text-5xl font-serif font-bold text-gray-900 mb-4">
              Founder Success Stories
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="Meridian didn't just fund us—they built alongside us. The mentorship was invaluable."
              founder="Sarah Chen"
              company="NeuroAI Labs"
              delay="1.35s"
            />
            <TestimonialCard
              quote="From zero to $5M Series A in 6 months. This program is a game-changer."
              founder="Marcus Johnson"
              company="TechFlow"
              delay="1.45s"
            />
            <TestimonialCard
              quote="The investor network alone is worth the program. We closed our round in 8 weeks."
              founder="Elena Rodriguez"
              company="CloudScale"
              delay="1.55s"
            />
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA FINAL SECTION
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">

        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">

          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '1.7s' }}>
            Ready to Build Something Great?
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '1.8s' }}>
            The next batch closes on January 31st, 2025. Apply now and join a community of exceptional founders.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up" style={{ animationDelay: '1.9s' }}>
            <button className="px-10 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-amber-600/50 transition-all duration-300 hover:scale-105 font-mono text-sm tracking-widest uppercase">
              Apply to Next Batch
            </button>
            <button className="px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-mono text-sm tracking-widest uppercase">
              Schedule a Call
            </button>
          </div>

          {/* Countdown */}
          <div className="mt-12 pt-12 border-t border-gray-700 opacity-0 animate-fade-up" style={{ animationDelay: '2.0s' }}>
            <p className="text-gray-400 font-mono text-xs tracking-widest uppercase mb-4">Batch closes in</p>
            <div className="flex justify-center gap-8">
              {['12', '18', '34'].map((num, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl font-bold text-amber-500">{num}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest mt-2">
                    {i === 0 ? 'Days' : i === 1 ? 'Hours' : 'Minutes'}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </section>

    </>
  )
}