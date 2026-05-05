import { Sparkles } from "lucide-react"
import { ProjectPage, type Project } from "@/components/project-page"

// ============================================
// CONFIGURATION: Update your creative videos here!
// ============================================
const projects: Project[] = [
  {
    id: 1,
    title: "explaining rubik's cube magic tricks",
    description: "",
    image: "https://i.ytimg.com/vi/9VyzhGw7mwU/maxresdefault.jpg",
    category: "3D Art",
    year: "2024",
    // Replace with your YouTube/Vimeo embed URL or direct video link
    videoUrl: "https://www.youtube.com/embed/9VyzhGw7mwU?si=cT7esnyavdxISZ1I",
    videoType: "youtube",
  },
  {
    id: 2,
    title: "Short promo for a PC business.",
    description: "",
    image: "https://i.ytimg.com/vi/NhcKdTuZOXs/maxresdefault.jpg",
    category: "zord ad",
    year: "2024",
    videoUrl: "https://www.youtube.com/embed/NhcKdTuZOXs?start=52&end=62",
    videoType: "youtube",
  },
  
]
// ============================================

export default function CreativeProjectsPage() {
  return (
    <ProjectPage
      title="Creative"
      subtitle="Projects"
      description="3D visuals, motion graphics, and experimental projects that push boundaries."
      icon={<Sparkles className="h-10 w-10 text-gold" />}
      projects={projects}
    />
  )
}
