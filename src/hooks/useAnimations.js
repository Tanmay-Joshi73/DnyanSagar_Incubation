import { useEffect, useRef } from 'react'

/* ── useReveal: IntersectionObserver for scroll animations ── */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in')
            io.unobserve(en.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/* ── useCountUp: Animated number counters ─────────────── */
export function useCountUp() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-count]')
    let triggered = false

    const io = new IntersectionObserver(
      (entries) => {
        if (!triggered && entries.some((e) => e.isIntersecting)) {
          triggered = true
          els.forEach((el) => {
            const target = parseFloat(el.dataset.count)
            const sfx = el.dataset.sfx || ''
            const dec = parseInt(el.dataset.dec || '0')
            const dur = 1800
            let start = null

            const step = (ts) => {
              if (!start) start = ts
              const p = Math.min((ts - start) / dur, 1)
              const ease = 1 - Math.pow(1 - p, 4)
              el.textContent = (ease * target).toFixed(dec) + sfx
              if (p < 1) requestAnimationFrame(step)
            }
            requestAnimationFrame(step)
          })
        }
      },
      { threshold: 0.6 }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/* ── useCursor: Custom cursor with lag ───────────────── */
export function useCursor() {
  useEffect(() => {
    const dot  = document.getElementById('cur-dot')
    const ring = document.getElementById('cur-ring')
    if (!dot || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0
    let raf

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY
      dot.style.left = mx + 'px'
      dot.style.top  = my + 'px'
    }

    const tick = () => {
      rx += (mx - rx) * 0.1
      ry += (my - ry) * 0.1
      ring.style.left = rx + 'px'
      ring.style.top  = ry + 'px'
      raf = requestAnimationFrame(tick)
    }

    document.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(tick)

    const addHover = () => document.body.classList.add('hovering')
    const rmHover  = () => document.body.classList.remove('hovering')

    const bindHover = () => {
      document.querySelectorAll('a, button, .hoverable').forEach((el) => {
        el.addEventListener('mouseenter', addHover)
        el.addEventListener('mouseleave', rmHover)
      })
    }
    // Bind after paint
    setTimeout(bindHover, 300)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])
}

/* ── useScramble: Letter scramble on hover ───────────── */
export function useScramble(ref) {
  useEffect(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll('[data-scramble]')
    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    els.forEach((el) => {
      const orig = el.textContent
      el.addEventListener('mouseenter', () => {
        let i = 0
        const iv = setInterval(() => {
          el.textContent = orig
            .split('')
            .map((ch, idx) => {
              if (ch === ' ' || ch === '.') return ch
              if (idx < i) return orig[idx]
              return CHARS[Math.floor(Math.random() * 26)]
            })
            .join('')
          if (i >= orig.length + 3) {
            clearInterval(iv)
            el.textContent = orig
          }
          i += 1.5
        }, 36)
      })
    })
  }, [ref])
}

/* ── useParallax: Mouse parallax for floating images ─── */
export function useParallax() {
  useEffect(() => {
    const floats = document.querySelectorAll('[data-parallax]')
    if (!floats.length) return

    const onMove = (e) => {
      const cw = window.innerWidth  / 2
      const ch = window.innerHeight / 2
      const dx = (e.clientX - cw) / cw
      const dy = (e.clientY - ch) / ch

      floats.forEach((el) => {
        const d    = parseFloat(el.dataset.parallax)
        const base = parseFloat(el.dataset.rotate || '0')
        el.style.transform = `translate(${dx * d * 0.5}px, ${dy * d * 0.5}px) rotate(${base}deg)`
      })
    }

    document.addEventListener('mousemove', onMove)
    return () => document.removeEventListener('mousemove', onMove)
  }, [])
}

/* ── useMagnetic: Magnetic button effect ─────────────── */
export function useMagnetic(ref) {
  useEffect(() => {
    const el  = ref.current
    const btn = el?.querySelector('.mag-target')
    if (!el || !btn) return

    const onMove = (e) => {
      const r  = el.getBoundingClientRect()
      const dx = (e.clientX - r.left - r.width  / 2) * 0.22
      const dy = (e.clientY - r.top  - r.height / 2) * 0.22
      btn.style.transform = `translate(${dx}px, ${dy}px)`
    }

    const onLeave = () => {
      btn.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1)'
      btn.style.transform  = ''
      setTimeout(() => (btn.style.transition = ''), 500)
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [ref])
}
