import Link from 'next/link'
import Logo from "@/components/kankunlogo"
import { Button } from "@/components/ui/button"

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            <Logo />
          </Link>
          <div className="hidden md:flex items-center space-x-8">

          </div>
          <Button className='bg-red-600 text-white'
            asChild
            variant="secondary"
          >
            <Link href="/login">
              Inicio de sesión
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar