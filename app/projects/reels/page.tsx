import { Film } from "lucide-react"
import { ProjectPage, type Project } from "@/components/project-page"

// ============================================
// CONFIGURATION: Update your reels videos here!
// ============================================
const projects: Project[] = [
  {
    id: 1,
    title: "Viral Reel #1",
    description: "",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
    category: "Product",
    year: "2024",
    // Replace with your YouTube/Vimeo embed URL or direct video link
    videoUrl: "https://youtube.com/embed/3mZ9XjM14L8?si=L_j5YrlDyomn-3Zd",
    videoType: "youtube",
  },
  {
    id: 2,
    title: "Viral Reel #2",
    description: "",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
    category: "Social",
    year: "2024",
    videoUrl: "https://www.youtube.com/embed/tFj4TPStK1E",
    videoType: "youtube",
  },
  {
    id: 3,
    title: "Viral Reel #3",
    description: "",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80vvv",
    category: "Editing",
    year: "2023",
    videoUrl: "https://youtube.com/embed/LwUpQS_WHUk?si=991vZL4uej_eJR6Q",
    videoType: "youtube",
  },
  
]
// ============================================

export default function ReelsProjectsPage() {
  return (
    <ProjectPage
      title="Reels"
      subtitle="Projects"
      description="Short-form content that captivates and converts."
      icon={<Film className="h-10 w-10 text-gold" />}
      projects={projects}
    />
  )
}
