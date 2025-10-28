"use client"

import { useState, useEffect, useRef, useMemo, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, Briefcase, GraduationCap, Code, Mail, Menu, Moon, Sun, ChevronRight } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { projects } from "@/lib/projects"

interface NavBarProps {
  isExperiencePage?: boolean;
}

export function NavBar({ isExperiencePage = false }: NavBarProps) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [scrollY, setScrollY] = useState(0)
  const lastScrollYRef = useRef(0)
  const [showNavbar, setShowNavbar] = useState(true)
  const [activeSection, setActiveSection] = useState(isExperiencePage ? "experience" : "home")
  const router = useRouter()
  const pathname = usePathname()

  const navContainerRef = useRef<HTMLDivElement>(null);
  const navItemRefs = useRef<(HTMLElement | null)[]>([]);
  const [highlighterStyle, setHighlighterStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Get featured projects for dropdown
  const featuredProjects = projects.slice(0, 4);

  useEffect(() => {
    setMounted(true)

    if (isExperiencePage) {
      setActiveSection("experience")
    } else if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setActiveSection(hash);
        }
      }, 100);
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      const lastY = lastScrollYRef.current
      setShowNavbar(!(currentScrollY > lastY && currentScrollY > 100))
      lastScrollYRef.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isExperiencePage])

  useEffect(() => {
    if (isExperiencePage || typeof window === 'undefined') return
    const headerEl = document.querySelector('header')
    const headerHeight = headerEl?.getBoundingClientRect().height || 0
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, {
      root: null,
      rootMargin: `-${headerHeight}px 0px -10px 0px`,
      threshold: 0.5,
    })
    const sections = ["home", "experience", "projects", "education", "skills", "contact"]
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [isExperiencePage, mounted])

  const navItems = useMemo(() => [
    { id: "home", label: "Home", icon: <Home className="h-5 w-5" /> },
    { id: "experience", label: "Experience", icon: <Briefcase className="h-5 w-5" /> },
    { id: "projects", label: "Projects", icon: <Briefcase className="h-5 w-5" /> },
    { id: "education", label: "Education", icon: <GraduationCap className="h-5 w-5" /> },
    { id: "skills", label: "Skills", icon: <Code className="h-5 w-5" /> },
    { id: "contact", label: "Contact", icon: <Mail className="h-5 w-5" /> },
  ], []);

  useEffect(() => {
    navItemRefs.current = Array(navItems.length).fill(null);
  }, [navItems.length]);

  const updateHighlighterPosition = useCallback(() => {
    if (!mounted || !navContainerRef.current) {
      setHighlighterStyle({ left: 0, width: 0, opacity: 0 });
      return;
    }

    const activeItemIndex = navItems.findIndex(item => item.id === activeSection);
    if (activeItemIndex === -1) {
        setHighlighterStyle({ left: 0, width: 0, opacity: 0 });
        return;
    }
    const activeNavItemEl = navItemRefs.current[activeItemIndex];

    if (activeNavItemEl && navContainerRef.current) {
      const containerRect = navContainerRef.current.getBoundingClientRect();
      const itemRect = activeNavItemEl.getBoundingClientRect();

      const left = itemRect.left - containerRect.left;
      const width = itemRect.width;

      if (width > 0 && containerRect.width > 0) {
        setHighlighterStyle({ left, width, opacity: 1 });
      } else {
        setHighlighterStyle({ left: 0, width: 0, opacity: 0 });
      }
    } else {
      setHighlighterStyle({ left: 0, width: 0, opacity: 0 });
    }
  }, [mounted, activeSection, navItems, theme]);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateHighlighterPosition();
    }, 50);
    return () => clearTimeout(timer);
  }, [updateHighlighterPosition]);

  useEffect(() => {
    if (!mounted) return;
    const handleResize = () => {
      updateHighlighterPosition();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mounted, updateHighlighterPosition]);

  const renderNavItem = (item: { id: string, label: string, icon: React.ReactNode }, index: number) => {
    const assignRef = (el: HTMLElement | null) => {
      if (navItemRefs.current && index < navItemRefs.current.length) {
        navItemRefs.current[index] = el;
      }
    };

    // Special handling for Projects dropdown
    if (item.id === 'projects') {
      return (
        <div 
          key={item.id}
          className="relative"
          onMouseEnter={() => setActiveDropdown('projects')}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <Button
            ref={assignRef}
            variant="ghost"
            className={`px-4 py-2 rounded-full relative z-10 ${
              activeSection === item.id
                ? "text-blue-600 dark:text-blue-400 font-semibold"
                : "text-gray-700 dark:text-gray-300 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            }`}
            onClick={() => {
              router.push('/projects')
            }}
          >
            {item.label}
          </Button>

          <AnimatePresence>
            {activeDropdown === 'projects' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 10 }}
                transition={{
                  type: "spring",
                  mass: 0.5,
                  damping: 11.5,
                  stiffness: 100,
                  restDelta: 0.001,
                  restSpeed: 0.001,
                }}
                className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4 z-50"
              >
                <div className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl p-4">
                  <div className="text-sm grid grid-cols-2 gap-6 w-max">
                    {featuredProjects.map((project) => (
                      <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="flex space-x-2 hover:opacity-80 transition-opacity"
                      >
                        <img
                          src={project.image}
                          width={140}
                          height={70}
                          alt={project.title}
                          className="shrink-0 rounded-md shadow-2xl object-cover"
                        />
                        <div>
                          <h4 className="text-lg font-bold mb-1 text-black dark:text-white">
                            {project.title}
                          </h4>
                          <p className="text-neutral-700 text-xs max-w-[10rem] dark:text-neutral-300">
                            {project.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    if (isExperiencePage) {
      return (
        <Link
          ref={assignRef}
          href={`/#${item.id}`}
          key={item.id}
          className={`px-4 py-2 rounded-full inline-flex items-center justify-center h-10 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative z-10 ${
            activeSection === item.id
              ? "text-blue-600 dark:text-blue-400 font-semibold"
              : "text-gray-700 dark:text-gray-300 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          }`}
        >
          {item.label}
        </Link>
      );
    }
    return (
      <Button
        ref={assignRef}
        key={item.id}
        variant="ghost"
        className={`px-4 py-2 rounded-full relative z-10 ${
          activeSection === item.id
            ? "text-blue-600 dark:text-blue-400 font-semibold"
            : "text-gray-700 dark:text-gray-300 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        }`}
        onClick={() => {
          document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
          setActiveSection(item.id)
        }}
      >
        {item.label}
      </Button>
    );
  };

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
        </Link>
      );
    }
    return (
      <button
        key={item.id}
        onClick={() => {
          document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
          setActiveSection(item.id)
        }}
        className={`flex flex-col items-center justify-center py-2 flex-1 ${
          activeSection === item.id
            ? "text-blue-600 dark:text-blue-400"
            : "text-gray-500 dark:text-gray-400 hover:text-white dark:hover:text-white hover:bg-gray-700 dark:hover:bg-gray-800"
        }`}
      >
        {item.icon}
        <span className="text-xs mt-1">{item.label}</span>
      </button>
    );
  };

  function scrollToSection(id: string): void {
    if (isExperiencePage) {
      router.push(`/#${id}`, { scroll: false });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 
            ? "bg-white dark:bg-gray-900 md-elevation-2" 
            : "bg-white dark:bg-gray-900 md-elevation-1"
        }`}
        initial={{ top: 0 }}
        animate={{ top: showNavbar ? 0 : -64 }}
        transition={{ duration: 0.3 }}
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
                  <div className="w-16 h-8 bg-blue-500 dark:bg-blue-600 rounded-md flex items-center justify-center text-white text-lg font-bold">
                    Philos
                  </div>
                  <span>Portfolio</span>
                </motion.div>
              </Link>
            </div>

            <div ref={navContainerRef} className="hidden md:flex items-center space-x-1 relative">
              <motion.div
                className="absolute top-0 h-full rounded-full bg-blue-100/80 dark:bg-blue-900/20 pointer-events-none z-0"
                style={{
                  left: highlighterStyle.left,
                  width: highlighterStyle.width,
                  opacity: highlighterStyle.opacity,
                }}
                initial={false}
                animate={{
                  left: highlighterStyle.left,
                  width: highlighterStyle.width,
                  opacity: highlighterStyle.opacity,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
              
              {navItems.map((item, index) => renderNavItem(item, index))}

              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full ml-2"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </Button>
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
      </motion.header>
    </>
  )
}

