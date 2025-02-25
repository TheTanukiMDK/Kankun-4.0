"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import image1 from "@/assets/images/fiesta.jpg"
import image2 from "@/assets/images/fiesta2.jpg"
import image3 from "@/assets/images/fiesta3.jpg"
import image4 from "@/assets/images/fiesta4.jpg"

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
            image: image4.src,
        },
        {
            title: "Conciertos Exclusivos",
            description: "Experiencias musicales únicas",
            image: image1.src,
        },
        {
            title: "Eventos Culturales",
            description: "Celebra la cultura y el arte",
            image: image2.src,
        },
        {
            title: "Fiestas Temáticas",
            description: "Diversión garantizada con temáticas únicas",
            image: image3.src,
        },
    ]

    return (
        <section id="events" className="py-20 bg-muted/20">
            <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants}>
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6 text-primary">Próximos Eventos</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
                                                    src={event.image || "/placeholder.svg"}
                                                    alt={event.title}
                                                    className="w-full h-full object-cover"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <CardContent className="p-6">
                                                <h3 className="text-xl font-semibold mb-2 text-primary">{event.title}</h3>
                                                <p className="text-muted-foreground">{event.description}</p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="text-primary border-primary" />
                        <CarouselNext className="text-primary border-primary" />
                    </Carousel>
                </motion.div>
            </div>
        </section>
    )
}

export default Events