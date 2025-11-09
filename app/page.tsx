import { HeroSection } from "@/components/hero-section"
import { ProjectsPreviewSection } from "@/components/projects-preview-section"
import { AboutMeSection } from "@/components/about-me-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProjectsPreviewSection />
      <AboutMeSection />
      <ContactSection />
    </div>
  )
}

