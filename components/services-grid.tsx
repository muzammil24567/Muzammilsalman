import {
  Palette,
  Share2,
  Sparkles,
  Megaphone,
  FileText,
  Briefcase,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { TiltCard } from '@/components/tilt-card'
import { services } from '@/lib/data'

const icons = [Palette, Share2, Sparkles, Megaphone, FileText, Briefcase]

export function ServicesGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s, i) => {
        const Icon = icons[i % icons.length]
        return (
          <Reveal key={s.title} delay={(i % 3) * 0.08}>
            <TiltCard className="h-full">
              <div className="flex h-full flex-col gap-4 p-7">
                <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-6" />
                </span>
                <h3 className="font-heading text-2xl tracking-wide">{s.title}</h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            </TiltCard>
          </Reveal>
        )
      })}
    </div>
  )
}
