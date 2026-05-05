"use client"

import { useState } from "react"
import { LogoIntro } from "@/components/logo-intro"
import { Header } from "@/components/header"
import { ProjectsGrid } from "@/components/projects-grid"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"

export default function Home() {
  const [showContent, setShowContent] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <CustomCursor />
      <LogoIntro onComplete={() => setShowContent(true)} />
      
      {showContent && (
        <>
          <Header />
          <ProjectsGrid />
          <TeamSection />
          <ContactSection />
          <Footer />
        </>
      )}
    </main>
  )
}
