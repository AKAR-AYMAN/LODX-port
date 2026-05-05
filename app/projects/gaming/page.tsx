import { Gamepad2 } from "lucide-react"
import { ProjectPage, type Project } from "@/components/project-page"

// ============================================
// CONFIGURATION: Update your gaming videos here!
// ============================================
const projects: Project[] = [
  {
    id: 1,
    title: "road to division 1",
    description: "",
    image: "https://i.ytimg.com/vi/vM-JjbRmOC8/maxresdefault.jpg",
    category: "Fc 25",
    year: "2025",
    // Replace with your YouTube/Vimeo embed URL or direct video link
    videoUrl: "https://www.youtube.com/embed/vM-JjbRmOC8?si=st2ITtHzbpeEGODX",
    videoType: "youtube",
  },
  {
    id: 2,
    title: "challenge between all arab countries",
    description: "",
    image: "https://i.ytimg.com/vi/ZGtNcw5MD3s/mqdefault.jpg",
    category: "Fc 25",
    year: "2025",
    videoUrl: "https://www.youtube.com/embed/ZGtNcw5MD3s?si=u30GnuXO_0TkDgu2",
    videoType: "youtube",
  },
  {
    id: 3,
    title: "Fortnite with 4 different pcs",
    description: "",
    image: "https://i.ytimg.com/vi/53oCDG3wrtA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBPFIgwd265ZJ3RqTtfc4ZrSUjrGQ",
    category: "Fortnite",
    year: "2024",
    videoUrl: "https://www.youtube.com/embed/53oCDG3wrtA?si=LJrbCbNQnm7-4Nwr",
    videoType: "youtube",
  },
  {
    id: 4,
    title: "4 gamers playing stick fight",
    description: "",
    image: "https://i.ytimg.com/vi/ttMOEw5rJlg/hqdefault.jpg",
    category: "stick man",
    year: "2024",
    videoUrl: "https://www.youtube.com/embed/ttMOEw5rJlg",
    videoType: "youtube",
  },
]
// ============================================

export default function GamingProjectsPage() {
  return (
    <ProjectPage
      title="Gaming"
      subtitle="Projects"
      description="Immersive gaming content, esports coverage, and everything in between."
      icon={<Gamepad2 className="h-10 w-10 text-gold" />}
      projects={projects}
    />
  )
}
