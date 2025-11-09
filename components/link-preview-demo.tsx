"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";

export default function LinkPreviewDemo() {
  return (
    <div className="flex justify-center items-center min-h-[40rem] flex-col px-4">
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        Hover over{" "}
        <LinkPreview url="https://tailwindcss.com" className="font-bold underline">
          Tailwind CSS
        </LinkPreview>{" "}
        to see the preview
      </p>
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        Also try{" "}
        <LinkPreview url="https://framer.com/motion" className="font-bold underline">
          Framer Motion
        </LinkPreview>
      </p>
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
        Visit{" "}
        <LinkPreview
          url="https://ui.aceternity.com"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500 underline"
        >
          Aceternity UI
        </LinkPreview>{" "}
        for more
      </p>
    </div>
  );
}
