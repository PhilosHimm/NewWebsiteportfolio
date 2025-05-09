"use client"

import { useState, useEffect, useRef, useMemo, useCallback } from "react"
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
  const lastScrollYRef = useRef(0)
  const [showNavbar, setShowNavbar] = useState(true)
  const [activeSection, setActiveSection] = useState(isExperiencePage ? "experience" : "home")
  const router = useRouter()
  const pathname = usePathname()

  const navContainerRef = useRef<HTMLDivElement>(null);
  const navItemRefs = useRef<(HTMLElement | null)[]>([]);
  const [highlighterStyle, setHighlighterStyle] = useState({ left: 0, width: 0, opacity: 0 });

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

    if (isExperiencePage) {
      return (
        <Link
          ref={assignRef}
          href={`/#${item.id}`}
          key={item.id}
          className={`px-4 py-2 rounded-full inline-flex items-center justify-center h-10 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
            activeSection === item.id
              ? "text-blue-600 dark:text-blue-400"
              : "text-gray-700 dark:text-gray-300 hover:bg-accent hover:text-accent-foreground"
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
        className={`px-4 py-2 rounded-full ${
          activeSection === item.id
            ? "text-blue-600 dark:text-blue-400"
            : "text-gray-700 dark:text-gray-300 hover:bg-accent hover:text-accent-foreground dark:hover:bg-gray-700 dark:hover:text-white"
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
              {navItems.map((item, index) => renderNavItem(item, index))}

              <motion.div
                className="absolute top-0 h-full rounded-full bg-blue-50 dark:bg-blue-900/30 pointer-events-none"
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

      <motion.div 
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
        initial={{ bottom: 0 }}
        animate={{ bottom: showNavbar ? 0 : -64 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-around">
          {navItems.map((item) => renderMobileNavItem(item))}
        </div>
      </motion.div>
    </>
  )
}

