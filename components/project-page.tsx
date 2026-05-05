"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Play, X, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { CustomCursor } from "./custom-cursor"

export interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
  year: string
  // Add your video URL here (YouTube, Vimeo embed URL, or direct video link)
  videoUrl: string
  // Set to "youtube", "vimeo", or "direct" based on your video source
  videoType: "youtube" | "vimeo" | "direct"
}

interface ProjectPageProps {
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
  projects: Project[]
}

export function ProjectPage({ title, subtitle, description, icon, projects }: ProjectPageProps) {
  const [activeVideo, setActiveVideo] = useState<number | null>(null)

  const openVideo = (projectId: number) => {
    setActiveVideo(projectId)
  }

  const closeVideo = () => {
    setActiveVideo(null)
  }

  const activeProject = projects.find(p => p.id === activeVideo)
  const activeIndex = projects.findIndex(p => p.id === activeVideo)

  const nextVideo = () => {
    const nextIndex = (activeIndex + 1) % projects.length
    setActiveVideo(projects[nextIndex].id)
  }

  const prevVideo = () => {
    const prevIndex = (activeIndex - 1 + projects.length) % projects.length
    setActiveVideo(projects[prevIndex].id)
  }

  return (
    <main className="min-h-screen bg-background">
      <CustomCursor />
      
      {/* Header */}
      <header className="fixed left-0 right-0 top-0 z-40 flex items-center justify-between bg-background/80 px-8 py-6 backdrop-blur-sm md:px-12">
        <Link 
          href="/#work" 
          className="group flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-gold"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back
        </Link>
        <Link href="/" className="text-xl font-bold tracking-tight text-gold">
          VORTEX
        </Link>
      </header>

      {/* Hero */}
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 pt-24">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-gold/30 bg-gold/10"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            {icon}
          </motion.div>
          <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            {title} <span className="text-gold">{subtitle}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            {description}
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="grid gap-8 md:grid-cols-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                className="group relative cursor-pointer overflow-hidden rounded-lg bg-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                onClick={() => openVideo(project.id)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  
                  {/* Play Button */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-background opacity-0 transition-all duration-300 group-hover:opacity-100"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="ml-1 h-8 w-8" fill="currentColor" />
                  </motion.div>

                  {/* Duration badge */}
                  <div className="absolute bottom-4 right-4 rounded bg-background/80 px-2 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                    Watch Video
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-xs font-medium uppercase tracking-wider text-gold">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-foreground transition-colors group-hover:text-gold">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                <div className="absolute inset-0 rounded-lg border border-gold/0 transition-all duration-300 group-hover:border-gold/30" />
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo !== null && activeProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideo}
          >
            <motion.div
              className="relative mx-4 w-full max-w-5xl"
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
              {projects.length > 1 && (
                <>
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
                </>
              )}

              {/* Video Container */}
              <div className="aspect-video w-full overflow-hidden rounded-xl border border-border bg-card">
                {activeProject.videoType === "youtube" || activeProject.videoType === "vimeo" ? (
                  <iframe
                    key={activeProject.videoUrl}
                    src={activeProject.videoUrl}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video
                    key={activeProject.videoUrl}
                    src={activeProject.videoUrl}
                    className="h-full w-full"
                    controls
                    autoPlay
                  />
                )}
              </div>

              {/* Video Info */}
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{activeProject.title}</h3>
                  <p className="text-sm text-muted-foreground">{activeProject.category} • {activeProject.year}</p>
                </div>
                
                {/* Video Dots */}
                {projects.length > 1 && (
                  <div className="flex items-center gap-2">
                    {projects.map((project, index) => (
                      <motion.button
                        key={project.id}
                        onClick={() => setActiveVideo(project.id)}
                        className={`h-2 w-2 rounded-full transition-all ${
                          project.id === activeVideo ? "w-6 bg-gold" : "bg-border hover:bg-muted-foreground"
                        }`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Keyboard hint */}
              <p className="mt-4 text-center text-xs text-muted-foreground">
                Use <span className="rounded bg-card px-1.5 py-0.5 font-mono text-gold">←</span> <span className="rounded bg-card px-1.5 py-0.5 font-mono text-gold">→</span> to navigate or <span className="rounded bg-card px-1.5 py-0.5 font-mono text-gold">ESC</span> to close
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
