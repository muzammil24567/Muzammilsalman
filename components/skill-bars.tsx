'use client'

import { motion } from 'framer-motion'
import { skills } from '@/lib/data'

export function SkillBars() {
  return (
    <div className="mx-auto grid max-w-4xl gap-8 px-6 md:grid-cols-2">
      {skills.map((skill, i) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
        >
          <div className="mb-2 flex items-center justify-between">
            <span className="font-sans text-sm font-medium text-foreground">
              {skill.name}
            </span>
            <span className="font-heading text-lg text-accent">
              {skill.level}%
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
            <motion.div
              className="h-full rounded-full bg-accent"
              style={{ boxShadow: '0 0 12px rgba(163,255,18,0.6)' }}
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.2 + i * 0.05, ease: 'easeOut' }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
