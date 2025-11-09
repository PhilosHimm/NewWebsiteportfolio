import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Photography | Philos Himm",
  description: "Photography portfolio - work in progress",
}

export default function PhotographyPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Live Preview Link */}
        <div className="flex justify-center mb-12">
          <Link 
            href="https://philoshoots.pixieset.com/philosportfolio/" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="text-lg"
            >
              View Live Photography Portfolio →
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Photography
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            This page is currently a work-in-progress
          </p>
        </div>

        {/* Photography Preview Image */}
        <div className="mb-12">
          <Link 
            href="https://philoshoots.pixieset.com/philosportfolio/" 
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="relative w-full aspect-video rounded-lg overflow-hidden border shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/photographypreview.png"
                alt="Photography Portfolio Preview"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Work in Progress Message */}
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="p-8 border rounded-lg bg-muted/50">
            <h2 className="text-2xl font-semibold mb-4">
              🚧 Under Construction
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm currently rebuilding this photography section to better showcase my work. 
              In the meantime, you can view my complete photography portfolio at the link above.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Check back soon for an enhanced viewing experience integrated directly into this site!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
