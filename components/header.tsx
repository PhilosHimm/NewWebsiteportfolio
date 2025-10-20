"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect, useRef } from "react"

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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [circle, setCircle] = useState<{x: number, y: number} | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
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
    if (!buttonRef.current) return setTheme(theme === "dark" ? "light" : "dark");
    const rect = buttonRef.current.getBoundingClientRect();
    setCircle({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });
    setIsTransitioning(true);
    setTimeout(() => {
      setTheme(theme === "dark" ? "light" : "dark");
    }, 200);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  }

  // Calculate overlay size
  const overlaySize = typeof window !== "undefined" ? Math.max(window.innerWidth, window.innerHeight) * 2 : 2000;
  const nextBg = getNextThemeBg();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Theme transition overlay */}
      {isTransitioning && circle && (
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
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between" aria-label="Main navigation">
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

        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <motion.li
                key={item.href}
                whileHover={{ y: -6, scale: 1.07 }}
                transition={{ type: "spring", stiffness: 350, damping: 18 }}
              >
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1 ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </motion.li>
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
              className="focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          )}

          {/* Mobile menu - simplified for now */}
          <div className="md:hidden">
            <select
              value={pathname}
              onChange={(e) => window.location.href = e.target.value}
              className="bg-background border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Mobile navigation"
            >
              {navItems.map((item) => (
                <option key={item.href} value={item.href}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </nav>
    </header>
  );
}
