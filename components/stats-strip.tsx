import { Counter } from '@/components/counter'
import { Reveal } from '@/components/reveal'
import { stats } from '@/lib/data'

export function StatsStrip() {
  return (
    <section className="relative border-y border-border bg-secondary">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-6 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="flex flex-col items-center py-12 text-center md:py-16">
              <p className="font-heading text-5xl text-primary text-glow sm:text-6xl">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm tracking-wide text-muted-foreground">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
