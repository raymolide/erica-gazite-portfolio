"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const menuItems = [
    { id: "home", label: "Início" },
    { id: "about", label: "Sobre Mim" },
    { id: "experience", label: "Experiência" },
    { id: "education", label: "Educação" },
    { id: "skills", label: "Competências" },
    { id: "portfolio", label: "Portfólio" },
    { id: "social-causes", label: "Causas Sociais" },
    { id: "contact", label: "Contacto" },
  ]

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 bg-[#faf8f5]/95 backdrop-blur-sm border-b border-[#e8e2db] z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="w-10 h-10 bg-[#d4a574] rounded-full flex items-center justify-center cursor-pointer"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              onClick={() => scrollToSection("home")}
            >
              <span className="text-white font-bold text-lg">EG</span>
            </motion.div>
            <motion.span
              className="text-xl font-bold text-black cursor-pointer"
              onClick={() => scrollToSection("home")}
              whileHover={{ color: "#d4a574" }}
            >
              Érica Gazite
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#8b7355] hover:text-[#d4a574] transition-colors duration-200 font-medium relative"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {item.label}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-[#d4a574] origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.div whileTap={{ scale: 0.95 }}>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="md:hidden mt-4 pb-4 border-t border-[#e8e2db] pt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-3">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-[#8b7355] hover:text-[#d4a574] transition-colors duration-200 font-medium text-left"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ x: 10 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
