import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Hero } from '@/components/home/hero'
import { StatsStrip } from '@/components/stats-strip'
import { Marquee } from '@/components/marquee'
import { SectionHeading } from '@/components/section-heading'
import { ServicesGrid } from '@/components/services-grid'
import { PortfolioPreview } from '@/components/portfolio-preview'
import TestimonialSection from '@/components/testimonial-carousel'
import { CtaSection } from '@/components/cta-section'
import { Reveal } from '@/components/reveal'
import { serviceTags } from '@/lib/data'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <Marquee items={serviceTags} />

      {/* Service */}
      <section className="relative py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="One Premium Service"
              title="AI-Powered"
              highlight="Graphic Design"
              description="Instead of separating AI and Graphic Design, I combine them into one premium service — modern branding, marketing visuals, and digital experiences that help businesses grow."
            />
            <Reveal>
              <Link
                href="/services"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold transition-colors hover:border-primary/50 hover:text-primary"
              >
                All Services <ArrowUpRight className="size-4" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-12">
            <ServicesGrid />
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="relative bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Selected Work"
              title="Featured"
              highlight="Projects"
              description="A glimpse of personal and client projects spanning branding, social media, AI design, and marketing."
            />
            <Reveal>
              <Link
                href="/portfolio"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold transition-colors hover:border-primary/50 hover:text-primary"
              >
                View All <ArrowUpRight className="size-4" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-12">
            <PortfolioPreview limit={6} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Clients"
            highlight="Say"
            align="center"
            description="Trusted by businesses, brands, startups, and entrepreneurs."
            className="mb-12"
          />
          <TestimonialSection />
        </div>
      </section>

      <CtaSection />
    </>
  )
}
