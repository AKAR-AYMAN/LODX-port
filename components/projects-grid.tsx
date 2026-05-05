"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Play, ChevronLeft, ChevronRight, X } from "lucide-react"
import { useState } from "react"

// ============================================
// CUSTOM ANIMATED ICONS
// ============================================

// Gaming Controller - PlayStation style with glowing buttons
function GamepadIcon({ isHovered }: { isHovered: boolean }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main controller body - rounded modern shape */}
      <path
        d="M4 10C4 8.89543 4.89543 8 6 8H18C19.1046 8 20 8.89543 20 10V13C20 15.7614 17.7614 18 15 18H9C6.23858 18 4 15.7614 4 13V10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Left handle */}
      <path d="M6 15C5 17 5 19 6 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Right handle */}
      <path d="M18 15C19 17 19 19 18 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      
      {/* D-pad cross */}
      <path d="M7 12H9M8 11V13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      
      {/* Triangle - top */}
      <motion.path
        d="M15.5 10L16.2 11.2H14.8L15.5 10Z"
        fill={isHovered ? "#50C878" : "currentColor"}
        animate={isHovered ? { 
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.2, 1]
        } : { opacity: 0.5 }}
        transition={{ duration: 0.4, delay: 0, repeat: isHovered ? Infinity : 0, repeatDelay: 0.8 }}
      />
      {/* Circle - right */}
      <motion.circle
        cx="17.5" cy="12" r="0.7"
        fill="none"
        stroke={isHovered ? "#FF6B6B" : "currentColor"}
        strokeWidth="1"
        animate={isHovered ? { 
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.3, 1]
        } : { opacity: 0.5 }}
        transition={{ duration: 0.4, delay: 0.2, repeat: isHovered ? Infinity : 0, repeatDelay: 0.8 }}
      />
      {/* X - bottom */}
      <motion.path
        d="M15 13.5L16 14.5M16 13.5L15 14.5"
        stroke={isHovered ? "#6B9FFF" : "currentColor"}
        strokeWidth="1"
        strokeLinecap="round"
        animate={isHovered ? { 
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.2, 1]
        } : { opacity: 0.5 }}
        transition={{ duration: 0.4, delay: 0.4, repeat: isHovered ? Infinity : 0, repeatDelay: 0.8 }}
      />
      {/* Square - left */}
      <motion.rect
        x="12.8" y="11.3" width="1.4" height="1.4"
        fill="none"
        stroke={isHovered ? "#FF9ED2" : "currentColor"}
        strokeWidth="0.8"
        animate={isHovered ? { 
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.2, 1]
        } : { opacity: 0.5 }}
        transition={{ duration: 0.4, delay: 0.6, repeat: isHovered ? Infinity : 0, repeatDelay: 0.8 }}
      />
      
      {/* Left analog stick */}
      <motion.circle
        cx="10" cy="14" r="1.3"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
      />
      <motion.circle
        cx="10" cy="14" r="0.6"
        fill="currentColor"
        animate={isHovered ? { 
          cx: [10, 10.4, 10, 9.6, 10],
          cy: [14, 13.7, 14, 14.3, 14]
        } : { cx: 10, cy: 14 }}
        transition={{ duration: 1, repeat: isHovered ? Infinity : 0, ease: "easeInOut" }}
      />
    </svg>
  )
}

// Camera - takes a photo with shutter animation and flash
function VideoIcon({ isHovered }: { isHovered: boolean }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      {/* Camera body */}
      <rect x="2" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      
      {/* Top bump / viewfinder area */}
      <path d="M6 6V4.5C6 4.22386 6.22386 4 6.5 4H10.5C10.7761 4 11 4.22386 11 4.5V6" stroke="currentColor" strokeWidth="1.5" />
      
      {/* Lens outer */}
      <circle cx="10" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      
      {/* Lens inner - animates like shutter closing */}
      <motion.circle
        cx="10" cy="12" r="2"
        fill="currentColor"
        animate={isHovered ? { 
          r: [2, 0.3, 2],
        } : { r: 2 }}
        transition={{ duration: 0.25, delay: 0.1, repeat: isHovered ? Infinity : 0, repeatDelay: 1.5 }}
      />
      
      {/* Flash unit */}
      <motion.rect
        x="14.5" y="8" width="2" height="2" rx="0.5"
        fill="currentColor"
        animate={isHovered ? { 
          fill: ["currentColor", "#FFD700", "currentColor"],
        } : {}}
        transition={{ duration: 0.15, delay: 0.1, repeat: isHovered ? Infinity : 0, repeatDelay: 1.6 }}
      />
      
      {/* Shutter button */}
      <motion.circle
        cx="16" cy="3" r="1.5"
        fill="currentColor"
        animate={isHovered ? { 
          y: [0, 0.8, 0],
        } : { y: 0 }}
        transition={{ duration: 0.15, delay: 0, repeat: isHovered ? Infinity : 0, repeatDelay: 1.6 }}
      />
      
      {/* Viewfinder */}
      <rect x="19" y="8" width="3" height="2.5" rx="0.5" stroke="currentColor" strokeWidth="1" />
      
      {/* Flash burst lines - only show when hovered */}
      <motion.g
        animate={isHovered ? { opacity: [0, 1, 0] } : { opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.1, repeat: isHovered ? Infinity : 0, repeatDelay: 1.5 }}
      >
        <line x1="10" y1="2" x2="10" y2="0" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="3" y1="5" x2="1.5" y2="3.5" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="17" y1="5" x2="18.5" y2="3.5" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="0" y1="12" x2="-2" y2="12" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="22" y1="12" x2="24" y2="12" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" />
      </motion.g>
    </svg>
  )
}

// Sparkles with glowing animation - KEEP THIS ONE AS IS
function SparklesIcon({ isHovered }: { isHovered: boolean }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main star */}
      <motion.path
        d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill={isHovered ? "currentColor" : "none"}
        animate={isHovered ? { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] } : { scale: 1 }}
        transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0, repeatDelay: 0.5 }}
      />
      {/* Small stars */}
      <motion.path
        d="M19 15L19.5 17L21.5 17.5L19.5 18L19 20L18.5 18L16.5 17.5L18.5 17L19 15Z"
        fill="currentColor"
        animate={isHovered ? { scale: [0, 1.2, 1], opacity: [0, 1, 1] } : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      />
      <motion.path
        d="M5 15L5.5 17L7.5 17.5L5.5 18L5 20L4.5 18L2.5 17.5L4.5 17L5 15Z"
        fill="currentColor"
        animate={isHovered ? { scale: [0, 1.2, 1], opacity: [0, 1, 1] } : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      />
      {/* Glow effect */}
      {isHovered && (
        <motion.circle
          cx="12" cy="10" r="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: [0.5, 1.5], opacity: [0.5, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      )}
    </svg>
  )
}

// Reels - Phone with scrolling video feed
function FilmIcon({ isHovered }: { isHovered: boolean }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Phone frame */}
      <rect x="6" y="2" width="12" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
      {/* Screen area with clip */}
      <defs>
        <clipPath id="screenClip">
          <rect x="7" y="4" width="10" height="14" />
        </clipPath>
      </defs>
      {/* Scrolling video cards */}
      <g clipPath="url(#screenClip)">
        <motion.g
          animate={isHovered ? { y: [0, -14, -28, 0] } : { y: 0 }}
          transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0, ease: "easeInOut" }}
        >
          {/* Video 1 */}
          <rect x="7.5" y="4.5" width="9" height="13" rx="1" fill="currentColor" fillOpacity="0.15" />
          <motion.path
            d="M10 9L14 11L10 13V9Z"
            fill="currentColor"
            fillOpacity="0.6"
          />
          <rect x="8" y="14" width="5" height="1" rx="0.5" fill="currentColor" fillOpacity="0.4" />
          <rect x="8" y="15.5" width="3" height="0.8" rx="0.4" fill="currentColor" fillOpacity="0.2" />
          {/* Video 2 */}
          <rect x="7.5" y="18.5" width="9" height="13" rx="1" fill="currentColor" fillOpacity="0.2" />
          <motion.circle cx="12" cy="23.5" r="2" stroke="currentColor" strokeWidth="1" fill="none" />
          <rect x="8" y="28" width="5" height="1" rx="0.5" fill="currentColor" fillOpacity="0.4" />
          {/* Video 3 */}
          <rect x="7.5" y="32.5" width="9" height="13" rx="1" fill="currentColor" fillOpacity="0.25" />
          <rect x="9" y="36" width="6" height="4" rx="0.5" fill="currentColor" fillOpacity="0.3" />
        </motion.g>
      </g>
      {/* Home indicator */}
      <rect x="10" y="19" width="4" height="1" rx="0.5" fill="currentColor" />
      {/* Scrolling indicator on right */}
      {isHovered && (
        <motion.rect
          x="16.5" y="6" width="1" height="4" rx="0.5"
          fill="currentColor"
          fillOpacity="0.5"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      {/* Like heart floating up */}
      {isHovered && (
        <motion.path
          d="M12 8L12.5 7.5C13 7 14 7 14.5 7.5C15 8 15 9 14.5 9.5L12 12L9.5 9.5C9 9 9 8 9.5 7.5C10 7 11 7 11.5 7.5L12 8Z"
          fill="#FF4466"
          initial={{ y: 0, opacity: 0, scale: 0.5 }}
          animate={{ y: [-5, -15], opacity: [0, 1, 0], scale: [0.5, 1, 0.8] }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.5 }}
        />
      )}
    </svg>
  )
}

// ============================================
// CONFIGURATION: Update your videos here!
// ============================================
const projects = [
  {
    id: "gaming",
    title: "Gaming",
    description: "Immersive gaming content & esports coverage",
    Icon: GamepadIcon,
    href: "/projects/gaming",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    videos: [
      { url: "https://www.youtube.com/embed/vM-JjbRmOC8?si=st2ITtHzbpeEGODX", title: "Gaming video", type: "youtube" as const },
      { url: "https://www.youtube.com/embed/ZGtNcw5MD3s?si=u30GnuXO_0TkDgu2", title: "Gaming video", type: "youtube" as const },
      { url: "https://www.youtube.com/embed/53oCDG3wrtA?si=LJrbCbNQnm7-4Nwr", title: "Gaming video", type: "youtube" as const },
    ],
  },
  {
    id: "vlogs",
    title: "Vlogs",
    description: "Behind the scenes & lifestyle stories",
    Icon: VideoIcon,
    href: "/projects/vlogs",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    videos: [
      { url: "https://www.youtube.com/embed/mHyA_Dju3Hs?si=YxLRQLneyseVfTjs", title: "challenge with issam el hadary", type: "youtube" as const },
      { url: "https://www.youtube.com/embed/SUw0txW9Umk?si=jq_kQcdjoHUZIsK8", title: "Setup build", type: "youtube" as const },
      { url: "https://www.youtube.com/embed/e6bilj7jH6A?si=9GwXy6SSrM4Nk9i4", title: "Setup tour", type: "youtube" as const },
    ],
  },
  {
    id: "creative",
    title: "Creative",
    description: "3D visuals & experimental projects",
    Icon: SparklesIcon,
    href: "/projects/creative",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    videos: [
      { url: "https://www.youtube.com/embed/9VyzhGw7mwU?si=cT7esnyavdxISZ1I", title: "3D Animation Reel", type: "youtube" as const },
      { url: "https://www.youtube.com/embed/NhcKdTuZOXs?start=52&end=62 ", title: "Short promo for a PC business.", type: "youtube" as const },
    ],
  },
  {
    id: "reels",
    title: "Reels",
    description: "Short-form content that captivates",
    Icon: FilmIcon,
    href: "/projects/reels",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
    videos: [
      { url: "https://youtube.com/embed/3mZ9XjM14L8?si=L_j5YrlDyomn-3Zd", title: "Viral Reel #1", type: "youtube" as const },
      { url: "https://www.youtube.com/embed/tFj4TPStK1E", title: "Viral Reel #2", type: "youtube" as const },
      { url: "https://youtube.com/embed/LwUpQS_WHUk?si=991vZL4uej_eJR6Q", title: "Viral Reel #3", type: "youtube" as const },
    ],
  },
]
// ============================================

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function ProjectsGrid() {
  const [activeProject, setActiveProject] = useState<string | null>(null)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

  const openVideo = (projectId: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setActiveProject(projectId)
    setCurrentVideoIndex(0)
  }

  const closeVideo = () => {
    setActiveProject(null)
    setCurrentVideoIndex(0)
  }

  const project = projects.find(p => p.id === activeProject)
  const currentVideo = project?.videos[currentVideoIndex]

  const nextVideo = () => {
    if (project) {
      setCurrentVideoIndex((prev) => (prev + 1) % project.videos.length)
    }
  }

  const prevVideo = () => {
    if (project) {
      setCurrentVideoIndex((prev) => (prev - 1 + project.videos.length) % project.videos.length)
    }
  }

  return (
    <section id="work" className="min-h-screen w-full">
      {/* Section Header */}
      <motion.div
        className="flex flex-col items-center justify-center bg-background py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-gold">
          Our Portfolio
        </span>
        <h2 className="text-center text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Take a Look at <span className="text-gold">Our Work</span>
        </h2>
        <p className="mt-4 max-w-2xl text-center text-muted-foreground">
          Explore our diverse collection of projects across gaming, vlogs, creative content, and viral reels
        </p>

        {/* Interactive Icons Row */}
        <motion.div 
          className="mt-10 flex items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={`#${project.id}`}
              className="group flex flex-col items-center gap-2"
              onMouseEnter={() => setHoveredIcon(project.id)}
              onMouseLeave={() => setHoveredIcon(null)}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(project.id)?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <motion.div
                className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-2 border-border bg-card text-muted-foreground transition-colors group-hover:border-gold group-hover:bg-gold/10 group-hover:text-gold"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <project.Icon isHovered={hoveredIcon === project.id} />
              </motion.div>
              <span className="text-xs font-medium text-muted-foreground transition-colors group-hover:text-gold">
                {project.title}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid h-screen grid-cols-2 grid-rows-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project) => (
          <motion.div key={project.id} id={project.id} variants={itemVariants}>
            <div className="group relative flex h-full w-full items-center justify-center overflow-hidden border-[0.5px] border-border/30">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-background/80 transition-all duration-500 group-hover:bg-background/60" />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center gap-4 p-8 text-center">
                <motion.div
                  className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold transition-all duration-500 group-hover:border-gold group-hover:bg-gold/20"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <project.Icon isHovered={false} />
                </motion.div>
                
                <h3 className="text-3xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-gold md:text-4xl">
                  {project.title}
                </h3>
                
                <p className="max-w-xs text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80 md:text-base">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="mt-4 flex items-center gap-4">
                  {/* Watch Video Button */}
                  <motion.button
                    onClick={(e) => openVideo(project.id, e)}
                    className="flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-background transition-all hover:bg-gold-light"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="h-4 w-4" />
                    Watch Video
                  </motion.button>

                  {/* View Projects Link */}
                  <Link href={project.href}>
                    <motion.span
                      className="flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold-light"
                      whileHover={{ x: 5 }}
                    >
                      View All
                      <span className="text-lg">→</span>
                    </motion.span>
                  </Link>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute bottom-0 right-0 h-12 w-12 border-b border-r border-gold/0 transition-all duration-500 group-hover:border-gold/50" />
              <div className="absolute left-0 top-0 h-12 w-12 border-l border-t border-gold/0 transition-all duration-500 group-hover:border-gold/50" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Video Modal with Navigation */}
      <AnimatePresence>
        {activeProject && project && currentVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideo}
          >
            <motion.div
              className="relative w-full max-w-5xl mx-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={closeVideo}
                className="absolute -top-14 right-0 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-gold hover:text-gold"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="h-5 w-5" />
              </motion.button>

              {/* Navigation Arrows */}
              <motion.button
                onClick={prevVideo}
                className="absolute -left-20 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:border-gold hover:bg-gold hover:text-background"
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="h-7 w-7" />
              </motion.button>

              <motion.button
                onClick={nextVideo}
                className="absolute -right-20 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:border-gold hover:bg-gold hover:text-background"
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="h-7 w-7" />
              </motion.button>

              {/* Video Container */}
              <div className="aspect-video w-full overflow-hidden rounded-xl border border-border bg-card">
                {currentVideo.type === "youtube" || currentVideo.type === "vimeo" ? (
                  <iframe
                    key={currentVideo.url + currentVideoIndex}
                    src={currentVideo.url}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video
                    key={currentVideo.url + currentVideoIndex}
                    src={currentVideo.url}
                    className="h-full w-full"
                    controls
                    autoPlay
                  />
                )}
              </div>

              {/* Video Info */}
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{currentVideo.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.title} Collection</p>
                </div>
                
                {/* Video Dots */}
                <div className="flex items-center gap-2">
                  {project.videos.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentVideoIndex(index)}
                      className={`h-2 w-2 rounded-full transition-all ${
                        index === currentVideoIndex ? "w-6 bg-gold" : "bg-border hover:bg-muted-foreground"
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>
              </div>

              {/* Keyboard hint */}
              <p className="mt-4 text-center text-xs text-muted-foreground">
                Use <span className="rounded bg-card px-1.5 py-0.5 font-mono text-gold">←</span> <span className="rounded bg-card px-1.5 py-0.5 font-mono text-gold">→</span> to navigate or <span className="rounded bg-card px-1.5 py-0.5 font-mono text-gold">ESC</span> to close
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
