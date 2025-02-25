
import Navbar from '@/components/navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Events from '@/components/Events'
import Footer from '@/components/Footer'

const Landingpage = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Events />
            </main>
            <Footer />
        </div>
    )
}

export default Landingpage
