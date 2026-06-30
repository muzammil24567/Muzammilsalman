'use client'

import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [hovering, setHovering] = useState(false)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY
    let frame = 0

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      setHidden(false)
      dot.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`

      const target = e.target as HTMLElement
      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, .cursor-hover',
      )
      setHovering(Boolean(interactive))
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.16
      ringY += (mouseY - ringY) * 0.16
      ring.style.transform = `translate3d(${ringX - 18}px, ${ringY - 18}px, 0)`
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)

    const onLeave = () => setHidden(true)

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] hidden md:block"
      style={{ opacity: hidden ? 0 : 1, transition: 'opacity 0.3s' }}
    >
      <div
        ref={dotRef}
        className="fixed top-0 left-0 size-1.5 rounded-full bg-primary"
        style={{ boxShadow: '0 0 10px rgba(163,255,18,0.8)' }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full border border-primary/60"
        style={{
          width: hovering ? 56 : 36,
          height: hovering ? 56 : 36,
          marginLeft: hovering ? -10 : 0,
          marginTop: hovering ? -10 : 0,
          background: hovering ? 'rgba(163,255,18,0.10)' : 'transparent',
          transition:
            'width 0.25s ease, height 0.25s ease, background 0.25s ease, margin 0.25s ease',
        }}
      />
    </div>
  )
}
