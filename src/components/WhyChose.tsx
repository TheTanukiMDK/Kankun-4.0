import Image from 'next/image'
import Img_back from '../assets/images/img_back.png'
import Party2 from '../assets/images/party2.png'
const WhyChoose = () => {
    return (
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-red-500 to-red-900 opacity-80" />
          <Image
            src={Img_back}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
  
        <div className="container mx-auto px-12 relative z-10">
          <h2 className="text-3xl font-bold text-left mb-2">
            ¿Por qué elegir <span className="text-kankun-primary">KANKUN 4.0</span>?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg mb-6">
                Descubre un mundo de aventuras con Kankun 4.0, tu compañero perfecto para explorar nuevos destinos, desde
                playas paradisíacas hasta ciudades vibrantes.
              </p>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-2">Experiencias Únicas</h3>
                <p className="text-white/80">Creamos momentos memorables que durarán toda la vida.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-2">Eventos Exclusivos</h3>
                <p className="text-white/80">Accede a los mejores eventos y experiencias VIP.</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <Image src={Party2} alt="Concierto en vivo" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default WhyChoose