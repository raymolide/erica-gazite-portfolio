"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Linkedin, Instagram, Send } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedTitle } from "./animated-text"
import { ContactInfo } from "@/lib/sanity" 

interface ContactoInfoSectionProps {
  data: ContactInfo | null 
}
export default function ContactSection({data}: ContactoInfoSectionProps ) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: data?.email,
      link: "mailto:" + data?.email,
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Telefone",
      value: data?.phone || "Não disponível",
      link: "tel: " + (data?.phone || "Não disponível"),
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Localização",
      value: data?.location || "Não disponível",
      link: null,
    },
  ]

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      link: data?.socialLinks?.find(link => link.platform === "LinkedIn")?.url , 
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      label: "Instagram",
      link: data?.socialLinks?.find(link => link.platform === "Instagram")?.url,
    },
  ]

  return (
    <section id="contact" className="py-20 bg-[#f9f6f1] relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          backgroundImage: [
            "radial-gradient(circle at 25% 25%, rgba(212, 165, 116, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 75% 75%, rgba(196, 155, 97, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(212, 165, 116, 0.1) 0%, transparent 50%)",
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
          <AnimatedTitle className="text-4xl font-bold text-black text-center mb-4">Contacto</AnimatedTitle>
          <motion.p
            className="text-lg text-[#8b7355] text-center mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Interessado em colaborar ou saber mais sobre o meu trabalho? Entre em contacto comigo através dos canais
            abaixo ou envie uma mensagem direta.
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-black mb-8">Informações de Contacto</h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div
                      className="w-12 h-12 bg-[#d4a574] rounded-full flex items-center justify-center mr-4 text-white"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {info.icon}
                    </motion.div>
                    <div>
                      <p className="font-semibold text-black">{info.label}</p>
                      {info.link ? (
                        <a href={info.link} className="text-[#8b7355] hover:text-[#d4a574] transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-[#8b7355]">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold text-black mb-4">Redes Sociais</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#d4a574] rounded-full flex items-center justify-center text-white hover:bg-[#c49b61] transition-colors"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <Card className="bg-white border-[#e8e2db]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-black mb-2">Disponibilidade</h4>
                    <p className="text-[#8b7355] text-sm">
                      Disponível para projectos freelance, colaborações e oportunidades profissionais. Respondo
                      normalmente em 24-48 horas.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-white border-[#e8e2db] relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#d4a574]/5 to-transparent"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
                <CardContent className="p-8 relative z-10">
                  <h3 className="text-2xl font-bold text-black mb-6">Enviar Mensagem</h3>

                <form action="https://formspree.io/f/xrgwjabd" method="POST" className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                          Nome *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="border-[#e8e2db] focus:border-[#d4a574] transition-colors"
                          placeholder="O seu nome"
                        />
                         
                   
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="border-[#e8e2db] focus:border-[#d4a574] transition-colors"
                          placeholder="o.seu@email.com"
                        />
                         
                     
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                        Assunto *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="border-[#e8e2db] focus:border-[#d4a574] transition-colors"
                        placeholder="Assunto da mensagem"
                      />
                      
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    >
                      <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                        Mensagem *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="border-[#e8e2db] focus:border-[#d4a574] min-h-[120px] transition-colors"
                        placeholder="Escreva a sua mensagem aqui..."
                      />
                      
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                       <Button type="submit" className="w-full bg-[#d4a574] hover:bg-[#c49b61] text-white py-3">
                        <Send className="h-4 w-4 mr-2" /> 
                        Enviar Mensagem
                      </Button> 
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
