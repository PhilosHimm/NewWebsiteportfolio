"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect, useRef } from "react"
import { projects } from "@/lib/projects"
import { StaggeredMenu } from "@/components/staggered-menu"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/photography", label: "Photography" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
]


export function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [circle, setCircle] = useState<{x: number, y: number} | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Get featured projects for dropdown
  const featuredProjects = projects.slice(0, 4);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (Math.abs(delta) < 10) {
        return;
      }

      if (currentScrollY < 80) {
        setIsVisible(true);
      } else if (delta > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Get the background color for the next theme
  function getNextThemeBg() {
    if (typeof window === "undefined") return "#fff";
    const root = document.documentElement;
    if (theme === "dark") {
      // Next is light
      return getComputedStyle(root).getPropertyValue('--background') || "#fff";
    } else {
      // Next is dark
      // Temporarily add .dark to root to get the value
      root.classList.add('dark');
      const val = getComputedStyle(root).getPropertyValue('--background') || "#18181b";
      root.classList.remove('dark');
      return val;
    }
  }

  function handleThemeSwitch(e: React.MouseEvent<HTMLButtonElement>) {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  // Calculate overlay size
  const overlaySize = typeof window !== "undefined" ? Math.max(window.innerWidth, window.innerHeight) * 2 : 2000;
  const nextBg = getNextThemeBg();

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 mx-auto mt-4 max-w-[95%] lg:max-w-6xl pointer-events-none"
      initial={{ y: 0, opacity: 1 }}
      animate={{ 
        y: isVisible ? 0 : -150,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      style={{ willChange: 'transform, opacity' }}
    >
      {/* Theme transition overlay */}
      {circle && (
        <motion.div
          initial={{
            opacity: 0.7,
            scale: 0,
            left: circle.x - overlaySize / 2,
            top: circle.y - overlaySize / 2,
            background: `hsl(${nextBg})`,
          }}
          animate={{
            scale: 1,
            opacity: 0,
            transition: { duration: 1, ease: [0.4, 0.0, 0.2, 1] },
          }}
          style={{
            position: "fixed",
            zIndex: 9999,
            width: overlaySize,
            height: overlaySize,
            borderRadius: "50%",
            pointerEvents: "none",
            background: `hsl(${nextBg})`,
            left: circle.x - overlaySize / 2,
            top: circle.y - overlaySize / 2,
          }}
        />
      )}
      <nav className="relative rounded-full border border-border/40 bg-background/90 dark:bg-card/90 backdrop-blur-md shadow-lg px-6 py-3 flex items-center justify-between pointer-events-auto" aria-label="Main navigation">
        <Link 
          href="/" 
          className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full"
          aria-label="Home"
        >
          <Image
            src="/notionpfp.png"
            alt="Philos Logo"
            width={40}
            height={40}
            className="rounded-full hover:opacity-80 transition-opacity"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-6 ml-auto mr-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            
            // Special handling for Projects dropdown
            if (item.href === '/projects') {
              return (
                <motion.li
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown('projects')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full px-4 py-2 relative ${
                      isActive ? "text-primary" : "text-foreground/80"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="pill"
                        className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-full -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {item.label}
                  </Link>

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
                        className="absolute top-[calc(100%_+_1.2rem)] right-0 pt-4 z-50"
                      >
                        <div className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl p-6">
                          <div className="grid grid-cols-2 gap-6 min-w-[600px]">
                            {featuredProjects.map((project) => (
                              <Link
                                key={project.slug}
                                href={`/projects/${project.slug}`}
                                className="flex space-x-3 hover:opacity-80 transition-opacity"
                              >
                                <img
                                  src={project.image}
                                  width={140}
                                  height={70}
                                  alt={project.title}
                                  className="shrink-0 rounded-md shadow-2xl object-cover w-[140px] h-[70px]"
                                />
                                <div className="flex-1 min-w-0">
                                  <h4 className="text-base font-bold mb-1 text-black dark:text-white truncate">
                                    {project.title}
                                  </h4>
                                  <p className="text-neutral-700 text-xs line-clamp-2 dark:text-neutral-300">
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
                </motion.li>
              );
            }
            
            return (
              <li key={item.href} className="relative">
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full px-4 py-2 relative ${
                    isActive ? "text-primary" : "text-foreground/80"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {isActive && (
                    <motion.span
                      layoutId="pill"
                      className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          {mounted && (
            <Button
              ref={buttonRef}
              variant="ghost"
              size="icon"
              onClick={handleThemeSwitch}
              className="focus:ring-2 focus:ring-primary focus:ring-offset-2 text-foreground/80 hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          )}
          
          {/* Mobile StaggeredMenu Button - visible on mobile */}
          <div className="md:hidden">
            <StaggeredMenu
              position="right"
              colors={!mounted || theme === "dark" ? ['#1a1a1a', '#1c1c1c', '#1f1f1f'] : ['#ffffff', '#f9fafb', '#f3f4f6']}
              items={navItems.map((item) => ({
                label: item.label,
                ariaLabel: item.label,
                link: item.href
              }))}
              socialItems={[
                { label: 'GitHub', link: 'https://github.com/PhilosHimm' },
                { label: 'LinkedIn', link: 'https://www.linkedin.com/in/philos-himm/' },
              ]}
              displaySocials={true}
              displayItemNumbering={true}
              menuButtonColor={!mounted || theme === "dark" ? "#ffffff" : "#000000"}
              openMenuButtonColor={!mounted || theme === "dark" ? "#ffffff" : "#000000"}
              accentColor="#3b82f6"
              isFixed={true}
              changeMenuColorOnOpen={false}
            />
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
