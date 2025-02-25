"use client"

import { motion } from "framer-motion"

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 2 },
  }

  return (
    <footer className="bg-red-700 text-white py-7">
      <div className="max-w-7x1 mx-auto px- sm:px-4 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <motion.div variants={itemVariants}>
            <p className="text-sm">Copyright ©️  {new Date().getFullYear()} Todos los derechos reservados. </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex space-x-9">
            {["Términos y condiciones", "Privacidad", "Accesibilidad", "Contacto"].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-white hover:text-white/80 text-sm transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer