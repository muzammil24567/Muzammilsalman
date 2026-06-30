import { PageHero } from '@/components/page-hero'
import { TestimonialsSection } from '@/components/testimonials-section'
import { CtaSection } from '@/components/cta-section'

export const metadata = {
  title: 'Testimonials | Muzammil Salman',
  description: 'What clients say about working with Muzammil Salman.',
}

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Client Love"
        title="Testimonials"
        description="Real words from businesses and entrepreneurs who trusted me with their brand and creative needs."
      />
      <TestimonialsSection showHeading={false} />
      <CtaSection />
    </>
  )
}
