
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Events from '@/components/Events'
import Footer from '@/components/Footer'
import WhyChoose from '@/components/WhyChose'

const Landingpage = () => {
    
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <Hero />
                <About />
                <WhyChoose />
                <Events />
            </main>
            <Footer />
        </div>
    )
}

export default Landingpage
