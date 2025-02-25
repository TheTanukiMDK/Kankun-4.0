"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import image2 from "@/assets/images/Japoncat.jpg"
import NextLink from 'next/link' // Importa el componente Link de next/link

const Hero = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    }

    return (
        <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${image2.src})`,
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />

            <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
                className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
            >
                <div className="text-center space-y-8">
                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-white">
                        Kankun 4.0
                    </motion.h1>
                    <motion.p variants={itemVariants} className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                        Descubre un mundo lleno de eventos inolvidables, la mejor música y experiencias únicas
                    </motion.p>
                    <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center">
                        <NextLink href="#events" passHref>
                            <Button size="lg" className="text-lg" variant="default">
                                Ver eventos
                            </Button>
                        </NextLink>

                        <NextLink href="/login" passHref>
                            <Button size="lg" className="text-lg border-white text-grey/10 hover:bg-white/10" variant="outline">
                                Ver más
                            </Button>
                        </NextLink>
                        
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero