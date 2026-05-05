"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface LogoIntroProps {
  onComplete: () => void
}

export function LogoIntro({ onComplete }: LogoIntroProps) {
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
      setTimeout(onComplete, 800)
    }, 2500)

    return () => clearTimeout(timer)
  }, [onComplete])

  const letters = "LODX".split("")

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="flex items-center gap-1">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                className="text-6xl font-bold tracking-tighter text-gold md:text-8xl lg:text-9xl"
                initial={{ opacity: 0, y: 80, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                style={{
                  textShadow: "0 0 40px oklch(0.78 0.12 85 / 0.4)",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          
          <motion.div
            className="absolute bottom-1/3 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
            initial={{ width: 0 }}
            animate={{ width: "60%" }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
