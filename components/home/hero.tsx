'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles, Play } from 'lucide-react'
import { ParticleField } from '@/components/particle-field'

const words = ['AI Expert', '& Graphic Designer']

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-16">
      <div className="absolute inset-0">
        <ParticleField density={70} />
      </div>
      <div className="grid-bg radial-fade pointer-events-none absolute inset-0 opacity-40" />

      {/* glows */}
      <div
        className="pointer-events-none absolute -left-40 top-1/4 size-[460px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(163,255,18,0.16), transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 size-[420px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(163,255,18,0.10), transparent 70%)' }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm text-muted-foreground backdrop-blur"
          >
            <Sparkles className="size-4 text-primary" />
            AI-Powered Creative Solutions
          </motion.div>

          <h1 className="mt-6 font-heading text-6xl leading-[0.88] sm:text-7xl md:text-8xl">
            {words.map((w, i) => (
              <motion.span
                key={w}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.9 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                {i === 0 ? (
                  <span className="text-foreground">{w}</span>
                ) : (
                  <span className="text-primary text-glow">{w}</span>
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.6 }}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            Helping businesses grow with AI-Powered Creative Solutions. With 3+
            years of experience and over 100 completed projects, I combine
            Artificial Intelligence with Graphic Design to build powerful brands
            and modern digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.45, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-shadow hover:shadow-[0_0_30px_rgba(163,255,18,0.55)]"
            >
              Contact Me
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-7 py-3.5 font-semibold text-foreground backdrop-blur transition-colors hover:border-primary/50 hover:text-primary"
            >
              View Portfolio
            </Link>
            <Link
              href="/start-a-project"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <span className="grid size-9 place-items-center rounded-full border border-border">
                <Play className="size-3.5 fill-primary text-primary" />
              </span>
              Start Project
            </Link>
          </motion.div>
        </div>

        {/* portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="animate-float-slow relative">
            <div
              className="absolute inset-0 -z-10 rounded-[2rem] blur-2xl"
              style={{ background: 'radial-gradient(circle, rgba(163,255,18,0.35), transparent 70%)' }}
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-primary/30 neon-border">
              <Image
                src="/muzammil-portrait.png"
                alt="Portrait of Muzammil Salman, AI Expert and Graphic Designer"
                width={560}
                height={700}
                priority
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.6 }}
              className="glass-strong absolute -left-6 top-10 rounded-2xl px-4 py-3"
            >
              <p className="font-heading text-3xl text-primary">3+</p>
              <p className="text-xs text-muted-foreground">Years Experience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.75 }}
              className="glass-strong absolute -right-4 bottom-16 rounded-2xl px-4 py-3"
            >
              <p className="font-heading text-3xl text-primary">100+</p>
              <p className="text-xs text-muted-foreground">Projects Done</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
