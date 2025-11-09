import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Linkedin, Github } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact | Philos Portfolio",
  description: "Get in touch with Philos",
}

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
        
        <div className="mb-8">
          <p className="text-lg mb-6">
            I'm always open to discussing new opportunities, collaborations, or just chatting about design and technology.
          </p>
          
          <div className="flex gap-4 mb-8">
            <Link href="https://www.linkedin.com/in/philos-himm/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://github.com/PhilosHimm" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="mailto:phimm@torontomu.ca">
              <Button variant="outline" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>

        <form className="space-y-6">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" required className="mt-2" />
          </div>
          
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required className="mt-2" />
          </div>
          
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" required className="mt-2" rows={6} />
          </div>
          
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </div>
    </main>
  )
}
