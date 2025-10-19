import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export const metadata: Metadata = {
  title: "Resume | Philos Portfolio",
  description: "View and download Philos's resume",
}

export default function ResumePage() {
  return (
    <main className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Resume</h1>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <div className="border-l-2 border-primary pl-4">
              <h3 className="text-xl font-medium">Business Technology Management</h3>
              <p className="text-muted-foreground">Toronto Metropolitan University</p>
              <p className="text-sm text-muted-foreground">Expected Graduation: 2026</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <h3 className="font-medium mb-2">Design</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>UX/UI Design</li>
                  <li>Figma</li>
                  <li>User Research</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Development</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>React/Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Analysis</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Excel</li>
                  <li>Power BI</li>
                  <li>Data Visualization</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
            <p className="text-muted-foreground">View detailed work experience on the home page.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
