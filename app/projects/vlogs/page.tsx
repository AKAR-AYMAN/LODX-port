import { Video } from "lucide-react"
import { ProjectPage, type Project } from "@/components/project-page"

// ============================================
// CONFIGURATION: Update your vlog videos here!
// ============================================
const projects: Project[] = [
  {
    id: 1,
    title: "challenge with issam el hadary",
    description: "",
    image: "https://i.ytimg.com/vi/mHyA_Dju3Hs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBa7q9IlBfl3NjLOMlwrcp2A3DVnw",
    category: "Lifestyle",
    year: "2024",
    // Replace with your YouTube/Vimeo embed URL or direct video link
    videoUrl: "https://www.youtube.com/embed/mHyA_Dju3Hs?si=YxLRQLneyseVfTjs",
    videoType: "youtube",
  },
  {
    id: 2,
    title: "Setup build",
    description: "",
    image: "https://i.ytimg.com/vi/Agwu0tIgoIw/hqdefault.jpg",
    category: "Travel",
    year: "2024",
    videoUrl: "https://www.youtube.com/embed/SUw0txW9Umk?si=jq_kQcdjoHUZIsK8",
    videoType: "youtube",
  },
  {
    id: 3,
    title: "visiting mrbeast restaurant",
    description: "",
    image: "https://i.ytimg.com/vi/GvXn0wnDDrE/hqdefault.jpg",
    category: "Music",
    year: "2023",
    videoUrl: "https://www.youtube.com/embed/GvXn0wnDDrE",
    videoType: "youtube",
  },
  {
    id: 4,
    title: "Setup tour",
    description: "",
    image: "https://i.ytimg.com/vi/e6bilj7jH6A/maxresdefault.jpg",
    category: "Events",
    year: "2023",
    videoUrl: "https://www.youtube.com/embed/e6bilj7jH6A?si=9GwXy6SSrM4Nk9i4",
    videoType: "youtube",
  },
]
// ============================================

export default function VlogsProjectsPage() {
  return (
    <ProjectPage
      title="Vlog"
      subtitle="Projects"
      description="Behind the scenes and lifestyle stories that connect and inspire."
      icon={<Video className="h-10 w-10 text-gold" />}
      projects={projects}
    />
  )
}
