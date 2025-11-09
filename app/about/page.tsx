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
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-4">
              👋 Hi there!
              I'm a 4th-year Business Technology Management co-op student at Toronto Metropolitan University (in a 5-year program), 
              passionate about using technology, data, and AI to drive innovation and impact.
            </p>
            <p className="text-lg mb-4">
              Currently, I'm working at the Ontario Public Service (GovTechON - Government Services Integration Cluster) as an Experience Designer, where I contribute to projects that improve digital services for Ontarians.
              Previously, I completed a summer co-op as a Business Analysis Assistant, Procurement at The Salvation Army Canada & Bermuda. There, I streamlined procurement operations across 150+ ministry units, automated workflows for 500+ staff,
              and turned large-scale financial data into actionable insights using Excel, Power BI, and SharePoint. I also designed outreach systems that boosted sponsorship engagement by 150% and managed campaigns connecting with 500+ potential sponsors.
            </p>
            <p className="text-lg">
              🤖 As an AI enthusiast, I actively integrate generative AI, GitHub Copilot, and automation tools into my work to accelerate coding, reduce repetitive tasks, and enhance productivity.
              My technical toolkit includes Python, React, TypeScript, Power BI, Power Automate, and AI-assisted development tools.
            </p>
            <p className="text-lg mb-4">
              Outside of work, I love volleyball - I've been a three-time intramural volleyball captain as well as gone to a few tournaments in Toronto. I'm also an avid bubble tea enthusiast (roasted oolong milk tea with tapioca is my go-to), and a hobbyist photographer 
              (check out my work at{" "}
              <LinkPreview 
                url="https://philoshoots.pixieset.com/philosportfolio/" 
                className="text-blue-500 underline font-medium"
              >
                philoshoots.pixieset.com/philosportfolio/
              </LinkPreview>
              ).
              I also enjoy biking around Toronto and going to the gym.
            </p>
            <p className="text-lg mb-4">
              Always open to connecting with professionals, students, and anyone passionate about the intersection of business, technology, and AI!
            </p>
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
