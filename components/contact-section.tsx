"use client"

import { motion } from "framer-motion"
import { Mail, MessageCircle, ArrowUpRight, Send, Copy, Check } from "lucide-react"
import { useState } from "react"

// ============================================
// CONFIGURATION: Update your contact info here!
// ============================================
const contactInfo = {
  email: "akarayman123@gmail.com",
  whatsapp: "+212 766888723'm interested in working with VORTEX.", // Default message
}
// ============================================

export function ContactSection() {
  const [emailCopied, setEmailCopied] = useState(false)

  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email)
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000)
    } catch {
      // Fallback: open mailto
      window.location.href = `mailto:${contactInfo.email}`
    }
  }

  const openEmail = () => {
    window.location.href = `mailto:${contactInfo.email}`
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-background py-24 md:py-32">
      {/* Background elements */}
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 h-64 w-64 rounded-full bg-gold/5 blur-3xl" />
      
      <div className="relative mx-auto max-w-4xl px-6 md:px-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-gold">
            Get in Touch
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {"Let's"} Create<br />
            <span className="text-gold">Together</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Ready to bring your vision to life? Reach out through WhatsApp or email and {"let's"} start creating something amazing.
          </p>
        </motion.div>

        {/* Contact Buttons */}
        <motion.div
          className="mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* WhatsApp Button */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex w-full items-center justify-center gap-4 overflow-hidden rounded-2xl border border-border bg-card px-8 py-6 transition-all duration-300 hover:border-green-500/50 hover:bg-green-500/5 sm:w-auto sm:min-w-[280px]"
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-green-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              initial={false}
            />
            
            <div className="relative flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10 text-green-500 transition-all duration-300 group-hover:bg-green-500 group-hover:text-white">
                <MessageCircle className="h-7 w-7" />
              </div>
              <div className="text-left">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Chat with us</p>
                <p className="text-xl font-bold text-foreground transition-colors group-hover:text-green-500">WhatsApp</p>
              </div>
            </div>
            
            <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-green-500" />
          </motion.a>

          {/* Email Button */}
          <motion.button
            onClick={openEmail}
            className="group relative flex w-full items-center justify-center gap-4 overflow-hidden rounded-2xl border border-border bg-card px-8 py-6 transition-all duration-300 hover:border-gold/50 hover:bg-gold/5 sm:w-auto sm:min-w-[280px]"
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gold/10 to-gold-light/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              initial={false}
            />
            
            <div className="relative flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-background">
                <Mail className="h-7 w-7" />
              </div>
              <div className="text-left">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Send us a message</p>
                <p className="text-xl font-bold text-foreground transition-colors group-hover:text-gold">Email</p>
              </div>
            </div>
            
            <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-gold" />
          </motion.button>
        </motion.div>

        {/* Email address display */}
        <motion.div
          className="mt-8 flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="text-muted-foreground">or copy:</span>
          <motion.button
            onClick={copyEmail}
            className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-gold hover:text-gold"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="font-mono">{contactInfo.email}</span>
            {emailCopied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </motion.button>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          className="mx-auto mt-20 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="h-px w-16 bg-border" />
          <Send className="h-4 w-4 text-gold" />
          <div className="h-px w-16 bg-border" />
        </motion.div>

        {/* Quick response note */}
        <motion.p
          className="mt-8 text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          We typically respond within <span className="text-gold">24 hours</span>
        </motion.p>
      </div>
    </section>
  )
}
