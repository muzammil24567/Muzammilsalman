import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { TiltCard } from '@/components/tilt-card'
import { Counter } from '@/components/counter'
import { CtaSection } from '@/components/cta-section'
import { achievements, stats } from '@/lib/data'
import { Trophy } from 'lucide-react'

export const metadata = {
  title: 'Achievements | Muzammil Salman',
  description:
    'Milestones and accomplishments across AI-powered graphic design projects.',
}

export default function AchievementsPage() {
  return (
    <>
      <PageHero
        eyebrow="Milestones"
        title="Achievements"
        description="Recognitions and milestones earned by delivering AI-powered creative solutions that move businesses forward."
      />

      <section className="pb-12">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="rounded-2xl border border-border bg-secondary/40 p-6 text-center">
                <div className="font-heading text-4xl text-accent md:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 font-sans text-xs uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto grid max-w-5xl gap-6 px-6 md:grid-cols-2">
          {achievements.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <TiltCard className="flex h-full gap-4 rounded-2xl border border-border bg-secondary/40 p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Trophy className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-heading text-2xl tracking-wide text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 font-sans text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaSection />
    </>
  )
}
