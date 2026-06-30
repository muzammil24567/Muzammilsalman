import Link from 'next/link'
import { Reveal } from '@/components/reveal'
import { ParticleField } from '@/components/particle-field'

export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  breadcrumb,
}: {
  eyebrow: string
  title: string
  highlight?: string
  description: string
  breadcrumb: string
}) {
  return (
    <section className="relative overflow-hidden border-b border-border pt-40 pb-20">
      <div className="absolute inset-0 opacity-50">
        <ParticleField density={40} />
      </div>
      <div className="grid-bg radial-fade pointer-events-none absolute inset-0 opacity-30" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 size-[520px] -translate-x-1/2 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(163,255,18,0.12), transparent 70%)' }}
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <nav className="mb-6 flex items-center gap-2 text-xs tracking-wide text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span className="text-primary">/</span>
            <span className="text-foreground">{breadcrumb}</span>
          </nav>
        </Reveal>
        <Reveal delay={0.05}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-primary uppercase">
            <span className="size-1.5 rounded-full bg-primary" />
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 max-w-4xl text-balance font-heading text-5xl leading-[0.92] sm:text-6xl md:text-7xl">
            {title} {highlight && <span className="text-primary text-glow">{highlight}</span>}
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
