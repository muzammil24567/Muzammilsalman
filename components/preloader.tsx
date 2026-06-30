'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export function Preloader() {
  const [done, setDone] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const start = Date.now()
    const duration = 1600
    let raf = 0
    const tick = () => {
      const progress = Math.min(1, (Date.now() - start) / duration)
      setCount(Math.round(progress * 100))
      if (progress < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(() => setDone(true), 350)
      }
    }
    raf = requestAnimationFrame(tick)
    document.body.style.overflow = 'hidden'
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    if (done) document.body.style.overflow = ''
  }, [done])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="grid-bg radial-fade absolute inset-0 opacity-40" />
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative text-center"
          >
            <p className="mb-3 font-sans text-xs tracking-[0.5em] text-primary uppercase">
              Loading Experience
            </p>
            <h1 className="font-heading text-6xl text-foreground sm:text-8xl">
              Muzammil <span className="text-primary text-glow">Salman</span>
            </h1>
          </motion.div>
          <div className="relative mt-10 flex w-64 flex-col gap-3">
            <div className="h-px w-full overflow-hidden bg-border">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${count}%` }}
                transition={{ ease: 'linear' }}
                style={{ boxShadow: '0 0 12px rgba(163,255,18,0.8)' }}
              />
            </div>
            <div className="flex justify-between font-mono text-xs text-muted-foreground">
              <span>AI · DESIGN</span>
              <span className="text-primary">{count}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
