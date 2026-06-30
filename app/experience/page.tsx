import { PageHero } from '@/components/page-hero'
import { Timeline } from '@/components/timeline'
import { experience } from '@/lib/data'
import { CtaSection } from '@/components/cta-section'

export const metadata = {
  title: 'Experience | Muzammil Salman',
  description:
    'A timeline of professional experience in AI-powered graphic design and creative work.',
}

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Career Journey"
        title="Experience"
        description="3+ years of turning ideas into powerful brands and digital experiences for businesses worldwide."
      />
      <section className="pb-24">
        <Timeline items={experience} />
      </section>
      <CtaSection />
    </>
  )
}
