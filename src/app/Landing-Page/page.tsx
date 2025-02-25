
import Navbar from '@/components/navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Events from '@/components/Events'
import Footer from '@/components/Footer'
import WhyChooseHero from '@/components/Why_choose_hero'

const Landingpage = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <Hero />
                <About />
                <WhyChooseHero/>
                <Events />
            </main>
            <Footer />
        </div>
    )
}

export default Landingpage
