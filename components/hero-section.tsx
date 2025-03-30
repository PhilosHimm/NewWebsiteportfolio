"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useTheme } from "next-themes"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) return null

  return (
    <section id="home" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image on left side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/3 relative"
          >
            <div className="relative mx-auto w-48 h-48">
              <div className="absolute inset-0 rounded-full bg-blue-400/30 animate-pulse"></div>
              <img
                src="/ProfilePic.jpg"
                alt="Profile Picture"
                className="relative z-10 w-full h-full rounded-full shadow-lg object-cover object-[0,30%] 
                outline outline-4 outline-blue-400/30 outline-offset-2"
              />
            </div>
          </motion.div>

          {/* Content on right side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-2/3 flex flex-col md:items-start items-center md:text-left text-center"
          >
            <h1 className="text-4xl font-medium text-gray-900 dark:text-white mb-2">Philos Himm</h1>
            <p className="text-gray-500 dark:text-gray-400 text-lg mb-4">Business Technology Management @ Toronto Metropolitan University</p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-6">
              <Link href="https://www.linkedin.com/in/philos-himm/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-blue-900 text-blueaccent dark:text-blue-400 hover:bg-blue-800"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn Profile</span>
                </Button>
              </Link>
              <Link href="https://github.com/PhilosHimm" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-blue-900 text-blueaccent dark:text-blue-400 hover:bg-blue-800"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub Profile</span>
                </Button>
              </Link>
            </div>

            
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-md">
            👋 Hi there! I'm excited to share my portfolio—featuring selected projects, skills, and experiences, 
            all built with a clean, Google Material Design–inspired interface.
            </p>

            {/* Dark Mode Toggle */}
            <div className="flex items-center space-x-2 mb-5">
              <Switch id="dark-mode" checked={theme === "dark"} onCheckedChange={toggleDarkMode} />
              <Label htmlFor="dark-mode">Toggle Theme</Label>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 shadow-md"
                onClick={() => {
                  document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Explore My Work
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 dark:border-gray-700 px-6"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Let's Connect
              </Button>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="animate-bounce flex justify-center mt-12"
        >
          <ArrowDown className="text-gray-400" />
        </motion.div>
      </div>
    </section>
  )
}

