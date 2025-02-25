"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import image from "@/assets/images/playa2.jpg"
import image1 from "@/assets/images/fiesta.jpg"

export default function WhyChooseHero() {
    return (
        <section id= "why" className="relative min-h-screen">

            <Image src={image || "/placeholder.svg"} alt="Background" fill className="object-cover object-center" priority />

            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-4xl font-bold text-white mb-2">¿Por qué elegir KANKUN 4.0?</h2>
                            <p className="text-lg text-white/80">
                                Descubre una nueva dimensión de entretenimiento donde cada momento se convierte en una experiencia
                                única. Nuestros eventos están diseñados para superar tus expectativas y crear recuerdos inolvidables.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="space-y-4"
                        >
                            <h3 className="text-2xl font-semibold text-white">Eventos que encontrarás</h3>
                            <ul className="grid gap-3">
                                {[
                                    "Conciertos exclusivos con artistas internacionales",
                                    "Festivales temáticos únicos",
                                    "Experiencias VIP personalizadas",
                                    "Shows en vivo con producción de primer nivel",
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 + index * 0.1 }}
                                        className="flex items-center space-x-2"
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-white" />
                                        <span className="text-white/80">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl"
                    >
                        <Image src={image1 || "/placeholder.svg"} alt="Evento Kankun 4.0" fill className="object-cover" />

                        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

