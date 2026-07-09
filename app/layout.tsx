import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Poppins } from 'next/font/google'
import './globals.css'
import { SmoothScroll } from '@/components/smooth-scroll'
import { CustomCursor } from '@/components/custom-cursor'
import { Preloader } from '@/components/preloader'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const bebas = Bebas_Neue({
  variable: '--font-bebas',
  subsets: ['latin'],
  weight: '400',
})

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Muzammil Salman — AI Expert & Graphic Designer',
  description:
    'Muzammil Salman combines Artificial Intelligence with professional graphic design to help businesses grow with modern branding, marketing visuals, and digital experiences.',
  generator: 'v0.app',
  icons: {
    icon: '/logo.png',
  },
  keywords: [
    'Muzammil Salman',
    'AI Expert',
    'Graphic Designer',
    'AI-Powered Graphic Design',
    'Branding',
    'Marketing Graphics',
  ],
  openGraph: {
    title: 'Muzammil Salman — AI Expert & Graphic Designer',
    description:
      'AI-Powered Graphic Design. Helping businesses grow with AI-powered creative solutions.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#050505',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${bebas.variable} ${poppins.variable} bg-background`}
    >
      <head>
        {/* Your icon link is safe here, though Next.js also handles it via the metadata config above */}
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <Preloader />
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}