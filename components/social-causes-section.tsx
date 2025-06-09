"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {   Award, Lightbulb, Pen } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedTitle } from "./animated-text"
import { SocialCause } from "@/lib/sanity"
import { getLucideIconByName } from "@/lib/lucideByName"


interface SocialCausesSectionProps {
  data: SocialCause[] | null
}


export default function SocialCausesSection({data}: SocialCausesSectionProps) {
  const initiatives = data

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const InitiativeIconCard = ({ initiative }:any) => {
  const Icon = getLucideIconByName(initiative.icon);

  return (
    <motion.div
      className="w-12 h-12 bg-[#d4a574] rounded-full flex items-center justify-center mr-4 text-white flex-shrink-0"
      whileHover={{ scale: 1.1, rotate: 10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {Icon ? <Lightbulb size={24} /> : null}
    </motion.div>
  );
};

  return (
    <section id="social-causes" className="py-20 bg-[#faf8f5] relative overflow-hidden">
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(212, 165, 116, 0.05) 0%, transparent 100%)",
            "linear-gradient(135deg, rgba(196, 155, 97, 0.05) 0%, transparent 100%)",
            "linear-gradient(225deg, rgba(212, 165, 116, 0.05) 0%, transparent 100%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedTitle className="text-4xl font-bold text-black text-center mb-4">
            Causas Sociais & Liderança
          </AnimatedTitle>
          <motion.p
            className="text-lg text-[#8b7355] text-center mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Acredito no poder da criatividade para gerar impacto positivo na sociedade. Aqui estão algumas das
            iniciativas que liderei ou nas quais participei ativamente.
          </motion.p>

          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {initiatives?.map((initiative, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-white border-[#e8e2db] hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#d4a574]/5 to-transparent opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-start mb-4">
                      <InitiativeIconCard initiative={initiative} />
                      <div className="flex-1">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                          <Badge variant="secondary" className="bg-[#f0ede8] text-[#8b7355] mb-2">
                            {initiative.category}
                          </Badge>
                        </motion.div>
                        <motion.h3
                          className="text-xl font-bold text-black mb-2"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {initiative.title}
                        </motion.h3>
                      </div>
                    </div>

                    <motion.p
                      className="text-[#8b7355] mb-4 leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {initiative.description}
                    </motion.p>

                    <motion.div
                      className="bg-[#f9f6f1] rounded-lg p-4"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center">
                        <Award className="h-4 w-4 text-[#d4a574] mr-2" />
                        <span className="font-semibold text-black text-sm">Impacto:</span>
                      </div>
                      <p className="text-[#8b7355] text-sm mt-1">{initiative.impact}</p>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-lg p-8 border border-[#e8e2db] max-w-2xl mx-auto relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#d4a574]/10 via-transparent to-[#c49b61]/10"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
              />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-black mb-4">Compromisso com a Comunidade</h3>
                <p className="text-[#8b7355] leading-relaxed">
                  Acredito que o sucesso individual deve contribuir para o bem-estar coletivo. Através destas
                  iniciativas, procuro usar as minhas competências criativas e de liderança para fazer a diferença na
                  vida de outros e na sociedade em geral.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
