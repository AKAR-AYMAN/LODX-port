"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const navItems = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-40 flex items-center justify-between px-8 py-6 md:px-12"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      {/* Logo */}
      <Link href="/" className="text-xl font-bold tracking-tight text-gold transition-opacity hover:opacity-80">
        LODX 
      </Link>

      {/* Navigation */}
      <nav className="hidden items-center gap-8 md:flex">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="relative text-sm font-medium uppercase tracking-widest text-foreground transition-colors hover:text-gold"
          >
            {item.name}
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 hover:w-full" />
          </Link>
        ))}
      </nav>

      {/* CTA */}
      <Link
        href="#contact"
        className="hidden rounded-full border border-gold/50 px-6 py-2 text-xs font-medium uppercase tracking-widest text-gold transition-all hover:bg-gold hover:text-background md:inline-flex"
      >
        {"Let's"} Talk
      </Link>

      {/* Mobile Menu Button */}
      <button className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden">
        <span className="h-0.5 w-6 bg-foreground transition-all" />
        <span className="h-0.5 w-6 bg-foreground transition-all" />
      </button>
    </motion.header>
  )
}
