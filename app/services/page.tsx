import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { ServicesGrid } from '@/components/services-grid'
import { Reveal } from '@/components/reveal'
import { CtaSection } from '@/components/cta-section'
import { serviceTags } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Services — Muzammil Salman',
  description:
    'AI-Powered Graphic Design — one premium service combining Artificial Intelligence with professional graphic design.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="One Premium Service,"
        highlight="Endless Possibilities"
        description="Instead of separating AI and Graphic Design, I combine them into one premium service: AI-Powered Graphic Design."
        breadcrumb="Services"
      />

      {/* Main service highlight */}
      <section className="relative py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="glass-strong relative overflow-hidden rounded-3xl p-8 neon-border sm:p-12">
              <div
                className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(163,255,18,0.16), transparent 70%)' }}
              />
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                Signature Service
              </span>
              <h2 className="mt-5 max-w-3xl font-heading text-4xl leading-[0.95] sm:text-6xl">
                AI-Powered <span className="text-primary text-glow">Graphic Design</span>
              </h2>
              <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
                I help businesses grow by combining Artificial Intelligence with
                professional graphic design to create modern branding, marketing
                visuals, and digital experiences.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {serviceTags.map((tag) => (
                  <li key={tag} className="flex items-center gap-2 text-sm text-foreground/90">
                    <Check className="size-4 shrink-0 text-primary" />
                    {tag}
                  </li>
                ))}
              </ul>
              <Link
                href="/ai-powered-graphic-design"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-shadow hover:shadow-[0_0_30px_rgba(163,255,18,0.55)]"
              >
                Explore the Service <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Capabilities"
            title="What I Can"
            highlight="Create"
            align="center"
            className="mb-12"
          />
          <ServicesGrid />
        </div>
      </section>

      <CtaSection
        title="No fixed pricing —"
        highlight="just value"
        description="Every project is unique. Contact me for a custom quotation tailored to your goals and budget."
      />
    </>
  )
}
