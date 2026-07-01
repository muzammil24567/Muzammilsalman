'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/why-choose-me', label: 'Why Choose Me' },
  { href: '/services', label: 'Services' },
  { href: '/process', label: 'Process' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Animated Logo Section */}
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <div 
            className="relative w-10 h-10 overflow-hidden bg-transparent rounded-xl flex items-center justify-center"
            style={{ mixBlendMode: 'screen' }}
          >
            <motion.img 
              src="/logo.png" 
              alt="MuzDesigner Logo"
              className="w-full h-full object-contain brightness-200 contrast-125 select-none"
              animate={{
                y: [0, -5, 0],
                rotate: [0, 2, -2, 0],
                filter: [
                  'hue-rotate(0deg) brightness(2)',
                  'hue-rotate(180deg) brightness(2)',
                  'hue-rotate(360deg) brightness(2)'
                ]
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </div>

          <span className="font-black text-lg tracking-tight text-white group-hover:text-[#a3e635] transition-colors duration-300">
            MUZ<motion.span 
              animate={{ filter: ['hue-rotate(0deg)', 'hue-rotate(360deg)'] }}
              transition={{ duration: 6, ease: "linear", repeat: Infinity }}
              className="ml-0.5 bg-gradient-to-r from-[#a3e635] to-emerald-400 bg-clip-text text-transparent"
            >
              DESIGNER
            </motion.span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#a3e635]",
                pathname === link.href ? "text-[#a3e635]" : "text-zinc-400"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Side Action Button */}
        <div className="hidden md:flex items-center">
          <Link 
            href="/contact" 
            className="bg-[#a3e635] text-black text-xs font-bold px-5 py-2.5 rounded-full hover:bg-white transition-colors flex items-center gap-1"
          >
            Contact Me <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </header>
  )
}