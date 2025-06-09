"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import ThreeScene from "./three-scene"
import { StaggeredText } from "./animated-text"
import { urlFor } from "@/sanity/lib/image"
import type { HeroSection as HeroSectionType } from "@/lib/sanity"
import Image from "next/image"

interface HeroSectionProps {
  data: HeroSectionType | null
}

export default function HeroSection({ data }: HeroSectionProps) {
  if (!data) return null

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleCTAClick = (link: string) => {
    if (link.startsWith("#")) {
      const element = document.getElementById(link.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.open(link, "_blank")
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#faf8f5] to-[#f5f1eb] pt-20 relative overflow-hidden"
    >
      <ThreeScene />

      {/* Background Image */}
      {data.backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={urlFor(data.backgroundImage).url() || "/placeholder.svg"}
            alt="Background"
            fill
            className="object-cover opacity-10"
          />
        </div>
      )}

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          {data.profileImage && (
            <motion.div
              className="w-32 h-32 mx-auto mb-8 relative"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src={urlFor(data.profileImage).width(128).height(128).url() || "/placeholder.svg"}
                alt={data.name}
                fill
                className="rounded-full object-cover border-4 border-[#d4a574] shadow-lg"
              />
            </motion.div>
          )}

          <motion.h1
            className="text-5xl md:text-7xl font-bold text-black mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            {data.name}
          </motion.h1>

          <StaggeredText text={data.roles.join(" • ")} className="text-xl md:text-2xl text-[#8b7355] mb-8" />

          <motion.p
            className="text-lg text-[#8b7355] mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {data.description}
          </motion.p>

          {/* CTA Buttons */}
          {data.ctaButtons && data.ctaButtons.length > 0 && (
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {data.ctaButtons.map((button, index) => (
                <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={() => handleCTAClick(button.link)}
                    className={
                      button.style === "primary"
                        ? "bg-[#d4a574] hover:bg-[#c49b61] text-white px-8 py-3 text-lg"
                        : "border-[#d4a574] text-[#d4a574] hover:bg-[#d4a574] hover:text-white px-8 py-3 text-lg"
                    }
                    variant={button.style === "primary" ? "default" : "outline"}
                  >
                    {button.text}
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          )}

          <motion.div
            className="animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <ArrowDown className="h-8 w-8 text-[#d4a574] mx-auto cursor-pointer" onClick={scrollToAbout} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
