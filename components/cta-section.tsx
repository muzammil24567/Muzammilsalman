import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function CtaSection({
  title = 'Ready to grow your',
  highlight = 'brand?',
  description = 'Let’s combine AI and design to build something businesses remember. Reach out for a custom quotation — no templates, just premium work.',
}: {
  title?: string
  highlight?: string
  description?: string
}) {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="grid-bg radial-fade pointer-events-none absolute inset-0 opacity-30" />
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-3xl px-8 py-16 text-center neon-border sm:px-16">
            <div
              className="pointer-events-none absolute -top-24 left-1/2 size-[420px] -translate-x-1/2 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(163,255,18,0.18), transparent 70%)' }}
            />
            <h2 className="relative font-heading text-5xl leading-[0.95] sm:text-6xl md:text-7xl">
              {title} <span className="text-primary text-glow">{highlight}</span>
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              {description}
            </p>
            <div className="relative mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-shadow hover:shadow-[0_0_30px_rgba(163,255,18,0.55)]"
              >
                Contact Me
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/start-a-project"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
