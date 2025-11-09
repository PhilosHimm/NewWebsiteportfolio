"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/projects";

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  
  // Get featured projects (first 4)
  const featuredProjects = projects.slice(0, 4);
  
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/#home">About</HoveredLink>
            <HoveredLink href="/#experience">Experience</HoveredLink>
            <HoveredLink href="/#education">Education</HoveredLink>
            <HoveredLink href="/#skills">Skills</HoveredLink>
          </div>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            {featuredProjects.map((project) => (
              <ProductItem
                key={project.slug}
                title={project.title}
                href={`/projects/${project.slug}`}
                src={project.image}
                description={project.description}
              />
            ))}
          </div>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="More">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/photography">Photography</HoveredLink>
            <HoveredLink href="/resume">Resume</HoveredLink>
            <HoveredLink href="/contact">Contact</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
