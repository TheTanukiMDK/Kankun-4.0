"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import image from "@/assets/images/japon.jpg"
import image1 from "@/assets/images/fiesta.jpg"
import image2 from "@/assets/images/fiesta2.jpg"
import image3 from "@/assets/images/fiesta3.jpg"
import image4 from "@/assets/images/fiesta4.jpg"
import image5 from "@/assets/images/piscina1.jpg"
import image6 from "@/assets/images/playa1.jpg"
import image7 from "@/assets/images/playa2.jpg"
import image8 from "@/assets/images/playa3.jpg"


const About = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }

    const features = [
        {
            title: "Eventos Exclusivos",
            description: "Accede a eventos únicos y experiencias VIP",
            image: image6.src,
        },
        {
            title: "Comunidad Vibrante",
            description: "Únete a una comunidad apasionada por la música y el entretenimiento",
            image: image8.src,
        },
        {
            title: "Momentos Inolvidables",
            description: "Crea recuerdos que durarán toda la vida",
            image: image4.src,
        },
    ]

    return (
        <section id="about" className="py-20 relative overflow-hidden bg-[#F6DED8]/30">
            <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants}>
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6 text-[#B82132]">Qué es Kankun 4.0</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Somos una plataforma dedicada a crear experiencias únicas, donde la música, el entretenimiento y la
                            diversión se unen para crear momentos inolvidables.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Card className="overflow-hidden h-full flex flex-col">
                                    <div className="h-48 relative overflow-hidden">
                                        <img
                                            src={feature.image} // ← Ahora cada tarjeta tiene su imagen
                                            alt={feature.title}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                    <CardHeader className="flex-none">
                                        <CardTitle className="text-[#B82132]">{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-gray-600">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
