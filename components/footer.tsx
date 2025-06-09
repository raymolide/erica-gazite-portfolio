"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      className="bg-[#f5f1eb] border-t border-[#e8e2db] py-8 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage:
            "linear-gradient(45deg, #d4a574 25%, transparent 25%), linear-gradient(-45deg, #d4a574 25%, transparent 25%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="flex items-center space-x-3 mb-4 md:mb-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="w-8 h-8 bg-[#d4a574] rounded-full flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white font-bold text-sm">EG</span>
            </motion.div>
            <span className="text-lg font-bold text-black">Érica Gazite</span>
          </motion.div>

          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-[#8b7355] text-sm">
              © {new Date().getFullYear()} Érica Gazite. Todos os direitos reservados.
            </p>
            <p className="text-[#8b7355] text-xs mt-1">
              Fashion Designer • Marketing Specialist • Model • Interior Designer
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}
