"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Palette, Globe, Lightbulb, Users } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedTitle } from "./animated-text"
import { PortableText } from "@portabletext/react"
import { urlFor } from "@/sanity/lib/image"
import type { AboutSection as AboutSectionType } from "@/lib/sanity"
import Image from "next/image"

interface AboutSectionProps {
  data: AboutSectionType | null
}

const iconMap = {
  palette: Palette,
  globe: Globe,
  lightbulb: Lightbulb,
  users: Users,
}

export default function AboutSection({ data }: AboutSectionProps) {
  if (!data) return null

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 bg-[#f9f6f1] relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage: "radial-gradient(circle, #d4a574 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimatedTitle className="text-4xl font-bold text-black text-center mb-12">{data.title}</AnimatedTitle>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="prose prose-lg text-[#8b7355] max-w-none">
                <PortableText value={data.description} />
              </div>
            </motion.div>

            <motion.div
              className="bg-[#f0ede8] rounded-lg p-8 text-center relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              {data.profileImage ? (
                <motion.div
                  className="w-32 h-32 mx-auto mb-6 relative"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <Image
                    src={urlFor(data.profileImage).width(128).height(128).url() || "/placeholder.svg"}
                    alt="Profile"
                    fill
                    className="rounded-full object-cover"
                  />
                </motion.div>
              ) : (
                <motion.div
                  className="w-32 h-32 bg-[#d4a574] rounded-full mx-auto mb-6 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="text-white text-4xl font-bold">EG</span>
                </motion.div>
              )}
              <h3 className="text-xl font-bold text-black mb-2">Érica Gazite</h3>
              <p className="text-[#8b7355]">Creative Professional</p>
            </motion.div>
          </div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {data.highlights.map((highlight, index) => {
              const IconComponent = iconMap[highlight.icon as keyof typeof iconMap] || Lightbulb

              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-white border-[#e8e2db] hover:shadow-lg transition-all duration-300 h-full">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        className="w-12 h-12 bg-[#d4a574] rounded-full flex items-center justify-center mx-auto mb-4 text-white"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <IconComponent className="h-6 w-6" />
                      </motion.div>
                      <h3 className="font-bold text-black mb-2">{highlight.title}</h3>
                      <p className="text-sm text-[#8b7355]">{highlight.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
