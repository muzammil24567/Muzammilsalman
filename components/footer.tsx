'use client'

import Link from 'next/link'
import { Mail, ArrowUpRight } from 'lucide-react'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from '@/components/social-icons'

const quickLinks = [
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

const more = [
  { href: '/about', label: 'About' },
  { href: '/why-choose-me', label: 'Why Choose Me' },
  { href: '/process', label: 'Process' },
  { href: '/faqs', label: 'FAQs' },
]

const legal = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms & Conditions' },
  { href: '/resources', label: 'Resources' },
  { href: '/book-a-consultation', label: 'Book a Consultation' },
]

const socials = [
  {
    icon: FacebookIcon,
    href: 'https://www.facebook.com/profile.php?id=61581464200119',
    label: 'Facebook',
  },
  {
    icon: InstagramIcon,
    href: 'https://www.instagram.com/muzammil_salman_/',
    label: 'Instagram',
  },
  {
    icon: LinkedinIcon,
    href: 'https://www.linkedin.com/in/muzammil-salman/',
    label: 'LinkedIn',
  },
  { icon: Mail, href: 'mailto:muzammilsalman95@gmail.com', label: 'Email' },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-secondary">
      <div className="grid-bg radial-fade pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2 font-heading text-3xl">
              <span className="grid size-9 place-items-center rounded-md bg-primary text-primary-foreground">
                M
              </span>
              Muzammil <span className="text-primary">Salman</span>
            </Link>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              AI Expert & Graphic Designer helping businesses grow with
              AI-Powered Creative Solutions.
            </p>
            <Link
              href="/start-a-project"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-shadow hover:shadow-[0_0_24px_rgba(163,255,18,0.5)]"
            >
              Start a Project <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <FooterCol title="Quick Links" items={quickLinks} />
            <FooterCol title="Company" items={more} />
            <FooterCol title="Resources" items={legal} />
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2026 Muzammil Salman. All Rights Reserved.
          </p>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={s.label}
                className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-[0_0_18px_rgba(163,255,18,0.3)]"
              >
                <s.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({
  title,
  items,
}: {
  title: string
  items: { href: string; label: string }[]
}) {
  return (
    <div>
      <h4 className="mb-4 font-sans text-xs font-semibold tracking-[0.2em] text-primary uppercase">
        {title}
      </h4>
      <ul className="space-y-3">
        {items.map((i) => (
          <li key={i.href}>
            <Link
              href={i.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
