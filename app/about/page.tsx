import type { Metadata } from 'next'
import Image from 'next/image'
import { Target, Eye, Rocket, Award } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { TiltCard } from '@/components/tilt-card'
import { StatsStrip } from '@/components/stats-strip'
import { CtaSection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'About — Muzammil Salman',
  description:
    'The story, mission, vision, and journey of Muzammil Salman, AI Expert and Graphic Designer.',
}

const timeline = [
  { year: '2023', title: 'The Beginning', desc: 'Started my creative journey in graphic design, mastering Photoshop and Canva while building a foundation in visual storytelling.' },
  { year: '2024', title: 'Embracing AI', desc: 'Integrated AI tools into my workflow, pioneering a hybrid approach that blends machine intelligence with human creativity.' },
  { year: '2025', title: 'Scaling Impact', desc: 'Partnered with businesses and startups, delivering branding and marketing visuals that drive measurable growth.' },
  { year: '2026', title: 'Premium Studio', desc: 'Established a premium AI-Powered Graphic Design service trusted by brands and entrepreneurs across industries.' },
]

const pillars = [
  { icon: Target, title: 'Mission', desc: 'To help businesses grow by merging Artificial Intelligence with world-class graphic design.' },
  { icon: Eye, title: 'Vision', desc: 'To redefine modern branding through AI-powered creativity that feels years ahead.' },
  { icon: Rocket, title: 'Goals', desc: 'To craft digital experiences that are premium, memorable, and built for measurable impact.' },
  { icon: Award, title: 'Values', desc: 'Quality over templates, clarity over noise, and partnership over transactions.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Me"
        title="Designing the Future with"
        highlight="AI & Creativity"
        description="I'm Muzammil Salman — an AI Expert and Graphic Designer helping businesses grow with AI-Powered Creative Solutions."
        breadcrumb="About"
      />

      {/* Story */}
      <section className="relative py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal direction="right">
            <div className="relative">
              <div
                className="absolute inset-0 -z-10 rounded-3xl blur-2xl"
                style={{ background: 'radial-gradient(circle, rgba(163,255,18,0.25), transparent 70%)' }}
              />
              <div className="overflow-hidden rounded-3xl border border-primary/30 neon-border">
                <Image
                  src="/muzammil-portrait.png"
                  alt="Muzammil Salman"
                  width={560}
                  height={700}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="My Story"
              title="A Designer Powered by"
              highlight="Intelligence"
            />
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                My journey started with a simple belief: great design can
                transform how the world sees a business. Over 3+ years and 100+
                projects, I've turned that belief into a craft.
              </p>
              <p>
                When AI emerged, I didn't see a threat — I saw a superpower. I
                learned to combine Artificial Intelligence with professional
                graphic design to deliver work that is faster, bolder, and more
                strategic than traditional design alone.
              </p>
              <p>
                Today, I partner with businesses, brands, startups, and
                entrepreneurs to build modern branding, marketing visuals, and
                digital experiences that actually drive growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsStrip />

      {/* Pillars */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="What Drives Me"
            title="Mission, Vision &"
            highlight="Values"
            align="center"
            className="mb-12"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <TiltCard className="h-full">
                  <div className="flex h-full flex-col gap-4 p-7">
                    <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
                      <p.icon className="size-6" />
                    </span>
                    <h3 className="font-heading text-2xl tracking-wide">{p.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative bg-secondary py-24">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading
            eyebrow="Journey"
            title="The Road"
            highlight="So Far"
            align="center"
            className="mb-16"
          />
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-border sm:left-1/2" />
            <div className="space-y-12">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.05}>
                  <div className={`relative flex flex-col gap-3 pl-12 sm:w-1/2 sm:pl-0 ${i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:ml-auto sm:pl-12'}`}>
                    <span className={`absolute left-2 top-1.5 size-4 rounded-full border-2 border-primary bg-background sm:left-auto ${i % 2 === 0 ? 'sm:-right-2' : 'sm:-left-2'}`} style={{ boxShadow: '0 0 12px rgba(163,255,18,0.7)' }} />
                    <span className="font-heading text-3xl text-primary">{t.year}</span>
                    <h3 className="font-heading text-2xl tracking-wide">{t.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
