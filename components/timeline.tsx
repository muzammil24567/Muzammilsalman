'use client'

import { motion } from 'framer-motion'

type TimelineItem = {
  period: string
  title: string
  org: string
  description: string
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <div className="relative border-l border-border pl-8">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative mb-12 last:mb-0"
          >
            <span
              className="absolute -left-[2.6rem] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent"
              style={{ boxShadow: '0 0 12px rgba(163,255,18,0.7)' }}
            />
            <span className="font-sans text-xs uppercase tracking-widest text-accent">
              {item.period}
            </span>
            <h3 className="mt-1 font-heading text-2xl tracking-wide text-foreground">
              {item.title}
            </h3>
            <p className="font-sans text-sm text-muted-foreground/80">
              {item.org}
            </p>
            <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
