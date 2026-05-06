"use client"

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import { Play, Eye, Clock, Award } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Animated counter component with fun effects
function AnimatedCounter({ 
  value, 
  suffix = "", 
  duration = 2 
}: { 
  value: number
  suffix?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const [displayValue, setDisplayValue] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration,
        ease: "easeOut",
      })
      return controls.stop
    }
  }, [isInView, value, count, duration])

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest)
    })
    return unsubscribe
  }, [rounded])

  // Fun bounce effect on hover
  const bounceVariants = {
    idle: { scale: 1, y: 0 },
    hover: { 
      scale: [1, 1.1, 0.95, 1.05, 1],
      y: [0, -10, 5, -5, 0],
      transition: { duration: 0.5 }
    },
  }

  return (
    <motion.span
      ref={ref}
      className="cursor-pointer"
      variants={bounceVariants}
      animate={isHovered ? "hover" : "idle"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {displayValue}{suffix}
    </motion.span>
  )
}

// Floating particles for fun background
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-gold/20"
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            scale: Math.random() * 0.5 + 0.5 
          }}
          animate={{ 
            y: [null, "-20%", "120%"],
            x: [null, `${Math.random() * 20 - 10}%`],
            opacity: [0, 1, 0],
          }}
          transition={{ 
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}

const stats = [
  {
    icon: Clock,
    value: 3,
    suffix: "+",
    label: "Years of Experience",
    description: "Consistently creating content",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Eye,
    value: 100,
    suffix: "M+",
    label: "Total Views",
    description: "Across all platforms",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Play,
    value: 150,
    suffix: "+",
    label: "Projects Delivered",
    description: "For clients worldwide",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    icon: Award,
    value: 10,
    suffix: "+",
    label: "Happy Clients",
    description: "And counting",
    color: "from-green-500/20 to-emerald-500/20",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function TeamSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-secondary/30 py-24 md:py-32">
      {/* Background accents */}
      <div className="absolute -right-40 top-0 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />
      <FloatingParticles />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="mb-16 text-center md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-gold">
            About Us
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Who We <span className="text-gold">Are</span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <h3 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
             We make content <span className="text-gold">people don’t skip</span>
            </h3>
            <div className="space-y-5 text-muted-foreground">
              <p className="text-lg leading-relaxed">
              We work with creators who actually care about what they post. Over
               the past three years, we’ve been editing, testing, and improving every day. 
              Not just making things look good, but understanding 
              what makes people <span className="font-semibold text-gold"> stop, watch,</span> and <span className="font-semibold text-gold"> stay.</span> 
                
              </p>

              <p className="text-lg leading-relaxed">
              We focus on short-form content and YouTube videos. The goal is simple: catch attention fast and keep it.

              Our work has reached over <span className="font-semibold text-gold"> 100 million views</span> , but what matters more is what 
              we’ve learned from it. We know what works, what doesn’t, and how to build videos that feel natural and engaging.

              We use tools like After Effects, Premiere Pro, and Blender—but tools aren’t the point. What matters is how everything comes
               together: the timing, the flow, the feeling.

                
              </p>


              <p className="text-lg leading-relaxed">
              We’re just a team that takes content seriously and <span className="font-semibold text-gold">enjoys doing it right.</span>
              
                  
              </p>
              
              
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              className="mt-8 inline-flex w-fit items-center gap-2 border-b-2 border-gold pb-1 text-lg font-semibold text-gold transition-all hover:gap-4"
              whileHover={{ x: 5 }}
            >
              Work with us
              <span className="text-xl">&rarr;</span>
            </motion.a>
          </motion.div>

          {/* Right - Animated Stats */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-gold/30 md:p-8"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Animated gradient background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                {/* Icon with spin animation on hover */}
                <motion.div 
                  className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1,
                    transition: { duration: 0.5 }
                  }}
                >
                  <stat.icon className="h-6 w-6" />
                </motion.div>

                {/* Animated Value */}
                <div className="relative mb-2 text-4xl font-bold text-gold md:text-5xl">
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.suffix}
                    duration={1.5 + index * 0.3}
                  />
                </div>

                {/* Label */}
                <div className="relative text-base font-semibold text-foreground md:text-lg">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="relative mt-1 text-sm text-muted-foreground">
                  {stat.description}
                </div>

                {/* Hover glow */}
                <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-gold/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom highlight bar */}
        <motion.div
          className="mt-20 flex flex-wrap items-center justify-center gap-8 rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm md:gap-16 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { title: "Gaming", subtitle: "Montages & Edits" },
            { title: "Vlogs", subtitle: "Storytelling" },
            { title: "Creative", subtitle: "Visual Effects" },
            { title: "Reels", subtitle: "Short-form Content" },
          ].map((item, index) => (
            <motion.div 
              key={item.title}
              className="text-center"
              whileHover={{ 
                scale: 1.1,
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <motion.div 
                className="text-3xl font-bold text-gold md:text-4xl cursor-pointer"
                whileHover={{ color: "oklch(0.85 0.1 85)" }}
              >
                {item.title}
              </motion.div>
              <div className="mt-1 text-sm text-muted-foreground">{item.subtitle}</div>
              {index < 3 && <div className="hidden h-12 w-px bg-border md:block absolute right-0 top-1/2 -translate-y-1/2" />}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
