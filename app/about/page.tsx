import type { Metadata } from "next"
import Image from "next/image"
import { LinkPreview } from "@/components/ui/link-preview"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export const metadata: Metadata = {
  title: "About | Philos Portfolio",
  description: "Learn more about Philos - UX/Product designer and business analyst",
}

export default function AboutPage() {
  const images = [
    { src: "/Msoftheadshot.JPG", caption: "Professional Headshot" },
    { src: "/A6700315.JPG", caption: "Pic at Microsoft Office Toronto" },
    { src: "/DSC05769.jpg", caption: "Holding up my bike at Whimbrel Point" },
  ];

  return (
    <main className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <div className="prose dark:prose-invert max-w-none space-y-4">
            <p className="text-lg">
              👋 Hi!
            </p>
            <p className="text-lg">
              I’m a 4th-year Business Technology Management co-op student at Toronto Metropolitan University, drawn to how tech, data, and AI can create smoother, smarter digital experiences.
            </p>
            <p className="text-lg">
              I’m currently an Experience Designer with the Ontario Public Service, helping improve services used across the province. Previously, at The Salvation Army, I streamlined procurement workflows, automated processes for hundreds of staff, and transformed large datasets into practical insights. I also built outreach systems that meaningfully boosted sponsorship engagement.
            </p>
            <p className="text-lg">
              I’m especially interested in UX/UI and Product Management, designing things that feel intuitive, solving real user problems, and experimenting with ideas that make everyday interactions a little lighter.
            </p>
            <p className="text-lg">
              I use AI tools like GitHub Copilot to speed up development and cut repetitive work. My toolkit includes Python, React, TypeScript, Power BI, and various automation tools.
            </p>
            <p className="text-lg">
              Outside of work, I enjoy volleyball, bubble tea, biking and photography.
            </p>
            <p className="text-lg">
              Open to connecting with anyone building, designing, or exploring what’s next in digital experiences.
            </p>

            <div className="flex flex-col gap-2 mt-6 not-prose">
              <a href="mailto:phimm@torontomu.ca" className="flex items-center gap-2 hover:text-primary transition-colors">
                <span>📧</span> phimm@torontomu.ca
              </a>
              <a href="https://github.com/PhilosHimm" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <span>💻</span> github.com/PhilosHimm
              </a>
              <LinkPreview
                url="https://philoshoots.pixieset.com/philosportfolio/"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <span>📸</span> philoshoots.pixieset.com/philosportfolio/
              </LinkPreview>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 mt-8 lg:mt-0">
          <Card>
            <CardContent className="p-0">
              <Carousel className="w-full">
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-center text-muted-foreground">
                          {image.caption}
                        </p>
                        <div className="aspect-w-16 aspect-h-9">
                          <Image
                            src={image.src}
                            alt={`About me image ${index + 1}`}
                            width={600}
                            height={400}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
              </Carousel>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
