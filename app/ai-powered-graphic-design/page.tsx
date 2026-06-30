import type { Metadata } from 'next'
import Image from 'next/image'
import { Brain, Layers, Zap, Palette, Check } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { TiltCard } from '@/components/tilt-card'
import { CtaSection } from '@/components/cta-section'
import { serviceTags } from '@/lib/data'

export const metadata: Metadata = {
  title: 'AI-Powered Graphic Design — Muzammil Salman',
  description:
    'Combining Artificial Intelligence with professional graphic design to create modern branding, marketing visuals, and digital experiences.',
}

const features = [
  { icon: Brain, title: 'AI-Accelerated Ideation', desc: 'I use AI to explore dozens of creative directions instantly, then refine the best ones by hand.' },
  { icon: Palette, title: 'Human Craft & Taste', desc: 'AI handles speed; I handle the strategy, composition, and premium finishing touches.' },
  { icon: Layers, title: 'End-to-End Branding', desc: 'From logo to full brand systems, social kits, and marketing collateral — all cohesive.' },
  { icon: Zap, title: 'Fast Turnarounds', desc: 'My hybrid workflow delivers premium results in a fraction of traditional timelines.' },
]

export default function AiServicePage() {
  return (
    <>
      <PageHero
        eyebrow="AI-Powered Graphic Design"
        title="Where AI Meets"
        highlight="Premium Design"
        description="I help businesses grow by combining Artificial Intelligence with professional graphic design to create modern branding, marketing visuals, and digital experiences."
        breadcrumb="AI-Powered Graphic Design"
      />

      <section className="relative py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal direction="right">
            <div className="relative overflow-hidden rounded-3xl border border-primary/30 neon-border">
              <Image src="/work-ai.png" alt="AI-generated visual concept" width={720} height={540} className="h-auto w-full object-cover" />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="The Approach"
              title="Two Worlds,"
              highlight="One Workflow"
            />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Artificial Intelligence is the most powerful creative tool of our
              generation — but it's only as good as the designer guiding it. I
              blend AI-driven generation with proven design principles to deliver
              visuals that are both innovative and on-brand.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {serviceTags.map((tag) => (
                <li key={tag} className="flex items-center gap-2 text-sm text-foreground/90">
                  <Check className="size-4 shrink-0 text-primary" /> {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Why It Works" title="The Hybrid" highlight="Advantage" align="center" className="mb-12" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <TiltCard className="h-full">
                  <div className="flex h-full flex-col gap-4 p-7">
                    <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
                      <f.icon className="size-6" />
                    </span>
                    <h3 className="font-heading text-xl tracking-wide">{f.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
