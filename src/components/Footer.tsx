"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-primary text-primary-foreground py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="col-span-2 md:col-span-1"
                    >
                        <h3 className="text-2xl font-bold mb-4">Kankun 4.0</h3>
                        <p className="text-primary-foreground/80">
                            Creando experiencias inolvidables para todos nuestros asistentes.
                        </p>
                    </motion.div>

                    {["Enlaces Rápidos", "Legal", "Contacto"].map((title, index) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h4 className="text-lg font-semibold mb-4">{title}</h4>
                            <ul className="space-y-2">
                                {[1, 2, 3].map((item) => (
                                    <li key={item}>
                                        <Button 
                                            variant="link" 
                                            className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto"
                                        >
                                            {title} {item}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="border-t border-primary-foreground/30 mt-16 pt-8 text-center text-primary-foreground/80"
                >
                    <p>&copy; {currentYear} Kankun 4.0. Todos los derechos reservados.</p>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer