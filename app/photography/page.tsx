import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Photography | Philos Himm",
  description: "A collection of my photography work",
}

// Photography data - you can update these with your actual images
const photos = [
  {
    id: 1,
    src: "/photography/photo-1.jpg",
    alt: "Photography work 1",
    title: "Urban Landscapes",
    description: "Capturing the essence of city life",
  },
  {
    id: 2,
    src: "/photography/photo-2.jpg",
    alt: "Photography work 2",
    title: "Nature & Wildlife",
    description: "Exploring the natural world",
  },
  {
    id: 3,
    src: "/photography/photo-3.jpg",
    alt: "Photography work 3",
    title: "Portraits",
    description: "Telling stories through faces",
  },
  {
    id: 4,
    src: "/photography/photo-4.jpg",
    alt: "Photography work 4",
    title: "Architecture",
    description: "Lines and structures",
  },
  {
    id: 5,
    src: "/photography/photo-5.jpg",
    alt: "Photography work 5",
    title: "Street Photography",
    description: "Moments in time",
  },
  {
    id: 6,
    src: "/photography/photo-6.jpg",
    alt: "Photography work 6",
    title: "Abstract",
    description: "Creative perspectives",
  },
]

export default function PhotographyPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Photography
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A visual journey through moments captured in time
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <Card 
              key={photo.id} 
              className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{photo.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {photo.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* About Photography Section */}
        <div className="mt-20 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            About My Photography
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Photography allows me to explore the world from different perspectives. 
            Through my lens, I capture moments that tell stories, evoke emotions, 
            and showcase the beauty in everyday life. Each photograph represents 
            a unique perspective on the world around us.
          </p>
        </div>
      </div>
    </div>
  )
}
