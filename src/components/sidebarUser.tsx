"use client"

import { BellRing, BookOpenCheck, CalendarFold, House, LogOut, Settings, UsersRound, Clipboard } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Elimina el token de inicio de sesión (puede estar en localStorage, cookies, etc.)
    localStorage.removeItem('token'); // Ejemplo usando localStorage
    // Redirige al usuario a la página de login
    router.push('/');
  };

  return (
    <aside className="flex">
      <nav className="h-screen flex flex-col ml-8 justify-evenly ">
        {/* Este es el bloque principal de navegación */}
        <ul className=' bg-white shadow-xl border-spacing-y-9 rounded-full p-4 backdrop-blur-xl'>
          <li className='relative flex items-center justify-center h-16 w-16 cursor-pointer group mb-5'>
            <Link href="/dashboard/user">
              <Clipboard size={32} className="relative z-10 hover:text-[#ffffff]" />
            </Link>
            <div className="absolute inset-0 bg-red-400/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          </li>
          <li className='relative flex items-center justify-center h-16 w-16 cursor-pointer group mb-5'>
            <Link href="/dashboard/user/reservations">
              <CalendarFold size={32} className="relative z-10 hover:text-[#ffffff]" />
            </Link>
            <div className="absolute inset-0 bg-red-400/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          </li>
        </ul>

        {/* este es el bloque del cierre de sesión y del perfil del usuario-Admin */}
        <ul className='bg-white shadow-xl mt-20 border-spacing-y-9 rounded-full p-4 backdrop-blur-xl'>
          <li className='relative flex items-center justify-center h-16 w-16 cursor-pointer group'>
            <Link href="/dashboard/user/settings">
              <Settings size={32} className="relative z-10 hover:text-[#ffffff]" />
            </Link>
            <div className="absolute inset-0 bg-red-400/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          </li>
          <li className='relative flex items-center justify-center h-16 w-16 cursor-pointer group mb-5' onClick={handleLogout}>
            <LogOut size={32} className="relative z-10 hover:text-[#ffffff]" />
            <div className="absolute inset-0 bg-red-400/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          </li>
          <li className='relative flex items-center justify-center h-16 w-16 cursor-pointer group'>
            <Avatar>
              <AvatarImage
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?cs=srgb&dl=pexels-danxavier-1239291.jpg&fm=jpg"
                className="rounded-full object-cover"
                alt="Perfil"
              />
              <AvatarFallback className="bg-gray-200 text-gray-700">
                US
              </AvatarFallback>
            </Avatar>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar;