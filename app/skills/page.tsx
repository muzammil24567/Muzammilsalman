import { PageHero } from '@/components/page-hero'
import { SkillBars } from '@/components/skill-bars'
import { CtaSection } from '@/components/cta-section'

export const metadata = {
  title: 'Skills | Muzammil Salman',
  description:
    'Core skills across Artificial Intelligence, graphic design, branding, and creative tools.',
}

export default function SkillsPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Skills"
        description="A blend of artificial intelligence, design craft, and creative strategy refined over 3+ years."
      />
      <section className="pb-24">
        <SkillBars />
      </section>
      <CtaSection />
    </>
  )
}
