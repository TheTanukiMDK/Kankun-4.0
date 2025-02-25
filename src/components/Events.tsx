"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import image from "@/components/japon.jpg"

const Events = () => {
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
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    }

    const events = [
        {
            title: "Festivales de Música",
            description: "Los mejores festivales",
        },
        {
            title: "Conciertos Exclusivos",
            description: "Experiencias musicales únicas",
        },
        {
            title: "Eventos Culturales",
            description: "Celebra la cultura y el arte",
        },
        {
            title: "Fiestas Temáticas",
            description: "Diversión garantizada con temáticas únicas",
        },
    ]

    return (
        <section id="events" className="py-20 bg-gray-50">
            <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants}>
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6 text-[#B82132]">Próximos Eventos</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Descubre todos los eventos que tenemos preparados para ti
                        </p>
                    </motion.div>

                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {events.map((event, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <motion.div variants={itemVariants}>
                                        <Card className="overflow-hidden">
                                            <div className="h-64 relative overflow-hidden">
                                                <img
                                                    src={image.src || "/placeholder.svg"}
                                                    alt="Vista de Monte Fuji"
                                                    className="w-full h-full object-cover"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <CardContent className="p-6">
                                                <h3 className="text-xl font-semibold mb-2 text-[#B82132]">{event.title}</h3>
                                                <p className="text-gray-600">{event.description}</p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="text-[#B82132] border-[#B82132]" />
                        <CarouselNext className="text-[#B82132] border-[#B82132]" />
                    </Carousel>
                </motion.div>
            </div>
        </section>
    )
}

export default Events

