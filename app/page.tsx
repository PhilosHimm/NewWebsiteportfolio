import { HeroSection } from "@/components/hero-section"
import { ProjectsPreviewSection } from "@/components/projects-preview-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProjectsPreviewSection />
      <ContactSection />
    </div>
  )
}

