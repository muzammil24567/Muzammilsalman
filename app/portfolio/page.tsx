import { PageHero } from '@/components/page-hero'
import { PortfolioGallery } from '@/components/portfolio-gallery'
import { CtaSection } from '@/components/cta-section'

export const metadata = {
  title: 'Portfolio | Muzammil Salman',
  description:
    'Selected personal and client projects across branding, social media, AI design, posters, and marketing.',
}

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected Work"
        title="Portfolio"
        description="A curated mix of personal and client projects spanning branding, social media, AI design, business graphics, and more."
      />
      <section className="pb-24">
        <PortfolioGallery />
      </section>
      <CtaSection />
    </>
  )
}
