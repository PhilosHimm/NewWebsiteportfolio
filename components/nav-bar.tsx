"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Home, Briefcase, GraduationCap, Code, Mail, Menu, Moon, Sun, ChevronRight, Laptop } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"

interface NavBarProps {
  isExperiencePage?: boolean;
}

export function NavBar({ isExperiencePage = false }: NavBarProps) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState("home")
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)

    // Check for hash in URL on initial load
    if (typeof window !== 'undefined' && window.location.hash && !isExperiencePage) {
      const hash = window.location.hash.substring(1); // remove the # symbol
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setActiveSection(hash);
        }
      }, 100); // Small delay to ensure DOM is ready
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Only track active section on home page
      if (!isExperiencePage) {
        const sections = ["home", "experience", "projects", "education", "skills", "contact"]
        const scrollPosition = window.scrollY + 300

        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const offsetTop = element.offsetTop
            const offsetHeight = element.offsetHeight

            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section)
              break
            }
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isExperiencePage])

  const navItems = [
    { id: "home", label: "Home", icon: <Home className="h-5 w-5" /> },
    { id: "experience", label: "Experience", icon: <Briefcase className="h-5 w-5" /> },
    { id: "projects", label: "Projects", icon: <Briefcase className="h-5 w-5" /> },
    { id: "education", label: "Education", icon: <GraduationCap className="h-5 w-5" /> },
    { id: "skills", label: "Skills", icon: <Code className="h-5 w-5" /> },
    { id: "contact", label: "Contact", icon: <Mail className="h-5 w-5" /> },
  ]

  // Use Link component instead of router.push for better hash handling
  const renderNavItem = (item: { id: string, label: string, icon: React.ReactNode }) => {
    if (isExperiencePage) {
      return (
        <Link 
          href={`/#${item.id}`} 
          key={item.id}
          className={`px-4 py-2 rounded-full ${
            activeSection === item.id
              ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
              : "text-gray-700 dark:text-gray-300"
          }`}
        >
          {item.label}
        </Link>
      );
    }
    
    return (
      <Button
        key={item.id}
        variant="ghost"
        className={`px-4 py-2 rounded-full ${
          activeSection === item.id
            ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
            : "text-gray-700 dark:text-gray-300"
        }`}
        onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })}
      >
        {item.label}
      </Button>
    );
  };

  // Same logic for mobile items
  const renderMobileNavItem = (item: { id: string, label: string, icon: React.ReactNode }) => {
    if (isExperiencePage) {
      return (
        <Link 
          href={`/#${item.id}`} 
          key={item.id}
          className={`flex flex-col items-center justify-center py-2 flex-1 ${
            activeSection === item.id ? "text-blue-600 dark:text-blue-400" : "text-gray-500 dark:text-gray-400"
          }`}
        >
          {item.icon}
          <span className="text-xs mt-1">{item.label}</span>
          {activeSection === item.id && <div className="absolute top-0 w-1/5 h-0.5 bg-blue-600 dark:bg-blue-400" />}
        </Link>
      );
    }
    
    return (
      <button
        key={item.id}
        onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })}
        className={`flex flex-col items-center justify-center py-2 flex-1 ${
          activeSection === item.id ? "text-blue-600 dark:text-blue-400" : "text-gray-500 dark:text-gray-400"
        }`}
      >
        {item.icon}
        <span className="text-xs mt-1">{item.label}</span>
        {activeSection === item.id && <div className="absolute top-0 w-1/5 h-0.5 bg-blue-600 dark:bg-blue-400" />}
      </button>
    );
  };

  return (
    <>
      {/* Desktop Navigation */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-white dark:bg-gray-900 shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/">
                <motion.div
                  className="flex items-center gap-2 font-medium text-lg text-gray-900 dark:text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-8 h-8 bg-blue-500 dark:bg-blue-600 rounded-md flex items-center justify-center text-white text-lg font-bold">
                    P
                  </div>
                  <span>Portfolio</span>
                </motion.div>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => renderNavItem(item))}

              {/* Theme Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="rounded-full ml-2">
                    {theme === "light" && <Sun className="h-5 w-5" />}
                    {theme === "dark" && <Moon className="h-5 w-5" />}
                    {theme === "system" && <Laptop className="h-5 w-5" />}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    <Sun className="mr-2 h-4 w-4" />
                    <span>Light</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    <Moon className="mr-2 h-4 w-4" />
                    <span>Dark</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="px-0">
                  <SheetHeader className="px-4">
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col py-4">
                    {navItems.map((item) => (
                      <Button
                        key={item.id}
                        variant="ghost"
                        className="justify-start px-4 py-6 rounded-none text-lg font-normal"
                        onClick={() => scrollToSection(item.id)}
                      >
                        <div className="flex items-center w-full">
                          <div
                            className={`mr-4 ${
                              activeSection === item.id
                                ? "text-blue-600 dark:text-blue-400"
                                : "text-gray-500 dark:text-gray-400"
                            }`}
                          >
                            {item.icon}
                          </div>
                          <span>{item.label}</span>
                          <ChevronRight className="ml-auto h-5 w-5 text-gray-400" />
                        </div>
                      </Button>
                    ))}

                    {/* Theme Options */}
                    <div className="mt-6 px-4">
                      <p className="text-sm font-medium text-gray-500 mb-2">Theme</p>
                      <div className="grid grid-cols-3 gap-2">
                        <Button
                          variant={theme === "light" ? "default" : "outline"}
                          className="flex flex-col items-center justify-center h-20"
                          onClick={() => setTheme("light")}
                        >
                          <Sun className="h-6 w-6 mb-1" />
                          <span>Light</span>
                        </Button>
                        <Button
                          variant={theme === "dark" ? "default" : "outline"}
                          className="flex flex-col items-center justify-center h-20"
                          onClick={() => setTheme("dark")}
                        >
                          <Moon className="h-6 w-6 mb-1" />
                          <span>Dark</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="flex justify-around">
          {navItems.map((item) => renderMobileNavItem(item))}
        </div>
      </div>
    </>
  )
}

