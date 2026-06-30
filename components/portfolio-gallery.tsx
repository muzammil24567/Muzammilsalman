'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { projects, projectCategories } from '@/lib/data'
import { TiltCard } from '@/components/tilt-card'

export function PortfolioGallery() {
  const [active, setActive] = useState('All')
  const filtered =
    active === 'All'
      ? projects
      : projects.filter((p) => p.category === active)

  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="mb-12 flex flex-wrap justify-center gap-3">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            data-cursor-hover
            className={`rounded-full border px-5 py-2 font-sans text-sm transition-all duration-300 ${
              active === cat
                ? 'border-accent bg-accent text-accent-foreground'
                : 'border-border bg-secondary/40 text-muted-foreground hover:border-accent/50 hover:text-foreground'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <TiltCard className="group h-full overflow-hidden rounded-2xl border border-border bg-secondary/40">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80" />
                </div>
                <div className="p-5">
                  <span className="font-sans text-xs uppercase tracking-widest text-accent">
                    {project.category}
                  </span>
                  <h3 className="mt-2 font-heading text-2xl tracking-wide text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-1 font-sans text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <span className="mt-3 inline-block font-sans text-xs text-muted-foreground/70">
                    {project.type}
                  </span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
