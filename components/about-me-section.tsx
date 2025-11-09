"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileText, Download } from "lucide-react"
import Link from "next/link"

export function AboutMeSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            I'm a Business Technology Management student at Toronto Metropolitan University, 
            passionate about creating meaningful digital experiences. Currently working as an 
            Experience Designer at the Ontario Government, I combine design thinking with 
            technical expertise to solve complex problems and deliver user-centered solutions. 
            My work spans UX/UI design, development, and data analysis, always with a focus 
            on creating impactful and accessible experiences.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button asChild size="lg" className="group">
              <Link href="/resume">
                <FileText className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                <span className="relative">
                  View Resume Page
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-foreground transition-all group-hover:w-full"></span>
                </span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="group">
              <a 
                href="/Philos%20Resume%20Winter%202026.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                <span className="relative">
                  Download Resume PDF
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all group-hover:w-full"></span>
                </span>
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
