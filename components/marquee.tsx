export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items]
  return (
    <div className="relative flex overflow-hidden border-y border-border bg-background py-6">
      <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="font-heading text-2xl tracking-wide text-muted-foreground">
              {item}
            </span>
            <span className="size-1.5 rounded-full bg-primary" />
          </div>
        ))}
      </div>
    </div>
  )
}
