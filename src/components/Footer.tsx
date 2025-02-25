"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react"

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const footerSections = [
        {
            title: "Contacto",
            items: [
                { text: "Ventas: 998-232-7823", icon: <Phone className="w-4 h-4" /> },
                { text: "Soporte: 998-456-7890", icon: <Phone className="w-4 h-4" /> },
                { text: "WhatsApp: 998-789-1234", icon: <Phone className="w-4 h-4" /> },
            ],
        },
        {
            title: "Redes Sociales",
            items: [
                { text: "Facebook: @Kankun4.0", icon: <Facebook className="w-4 h-4" /> },
                { text: "Instagram: @Kankun4.0", icon: <Instagram className="w-4 h-4" /> },
                { text: "Twitter: @Kankun4.0", icon: <Twitter className="w-4 h-4" /> },
            ],
        },
        {
            title: "Correo",
            items: [
                { text: "info@kankun.com", icon: <Mail className="w-4 h-4" /> },
                { text: "soporte@kankun.com", icon: <Mail className="w-4 h-4" /> },
                { text: "ventas@kankun.com", icon: <Mail className="w-4 h-4" /> },
            ],
        },
    ]

    return (
        <footer className="bg-primary text-primary-foreground py-20">
            <section id="contact">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="col-span-2 md:col-span-1"
                        >
                            <h3 className="text-2xl font-bold mb-4">Kankun 4.0</h3>
                            <p className="text-primary-foreground/80 mb-4">
                                Creando experiencias inolvidables para todos nuestros asistentes.
                            </p>
                            <div className="flex items-center gap-2 text-primary-foreground/80">
                                <MapPin className="w-4 h-4" />
                                <p>Cancún, Quintana Roo, México</p>
                            </div>
                        </motion.div>

                        {footerSections.map((section, index) => (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
                                <ul className="space-y-2">
                                    {section.items.map((item) => (
                                        <li key={item.text}>
                                            <Button
                                                variant="link"
                                                className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto flex items-center gap-2"
                                            >
                                                {item.icon}
                                                {item.text}
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
            </section>
        </footer>

    )
}

export default Footer

