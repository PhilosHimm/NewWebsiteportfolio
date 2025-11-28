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
          transition={{ duration: 1.0 }}
          className="text-center space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Experience Designer @ Ontario Government & BTM Student @ TMU. Passionate about combining design and technology to build user-centered digital solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto py-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Experience Designer</h3>
              <p className="text-sm text-muted-foreground">Ontario Government • 2025 - Present</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Administrative & Office Support</h3>
              <p className="text-sm text-muted-foreground">The Salvation Army • 2024 - 2025</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Intramurals Assistant</h3>
              <p className="text-sm text-muted-foreground">Toronto Metropolitan University • 2023 - 2025</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Inventory & Distribution</h3>
              <p className="text-sm text-muted-foreground">Marigolds & Onions • 2022 - 2023</p>
            </div>
            <div className="space-y-2 md:col-span-2">
              <h3 className="font-semibold text-foreground">Product Process Specialist</h3>
              <p className="text-sm text-muted-foreground">Best Buy • 2020 - 2022</p>
            </div>
          </div>
          
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
