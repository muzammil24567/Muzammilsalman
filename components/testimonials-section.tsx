import { Quote } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { TiltCard } from '@/components/tilt-card'
import { testimonials } from '@/lib/data'

export function TestimonialsSection() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {testimonials.map((t, i) => (
        <Reveal key={t.name} delay={i * 0.1}>
          <TiltCard className="h-full" intensity={6}>
            <div className="flex h-full flex-col gap-5 p-7">
              <Quote className="size-8 text-primary" />
              <p className="flex-1 text-pretty leading-relaxed text-foreground/90">
                “{t.quote}”
              </p>
              <div className="flex items-center gap-3 border-t border-border pt-5">
                <span className="grid size-11 place-items-center rounded-full bg-primary/10 font-heading text-xl text-primary">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          </TiltCard>
        </Reveal>
      ))}
    </div>
  )
}
