import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { projects } from '@/lib/data'

export function PortfolioPreview({ limit = 6 }: { limit?: number }) {
  const items = projects.slice(0, limit)
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p, i) => (
        <Reveal key={p.title + i} delay={(i % 3) * 0.08}>
          <Link
            href="/portfolio"
            className="group relative block overflow-hidden rounded-2xl border border-border"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={p.image || '/placeholder.svg'}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80" />
            </div>
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
              <div>
                <span className="text-xs font-medium tracking-widest text-primary uppercase">
                  {p.category}
                </span>
                <h3 className="font-heading text-2xl tracking-wide">{p.title}</h3>
              </div>
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground opacity-0 transition-all duration-300 group-hover:opacity-100">
                <ArrowUpRight className="size-5" />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  )
}
