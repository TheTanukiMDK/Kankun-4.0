"use client"

import { BellRing, BookOpenCheck, CalendarFold, House, LogOut, Settings, UsersRound } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

const SidebarAdmin = () => {
    return(
        <aside className="flex">
            <nav className="h-screen flex flex-col ml-8 justify-evenly ">
                {/* Este es el bloque principal de navegación */}
                <ul className=' bg-white shadow-xl border-spacing-y-9 rounded-full p-4 backdrop-blur-xl'>
                    <li className='relative flex items-center justify-center h-16 w-16 cursor-pointer group mb-5'>
                        < House size={32} 
                        className=" relative z-10  hover:text-[#ffffff]"
                        />
                        <div className="absolute inset-0 bg-red-400/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    </li>
                    <li className='relative flex items-center justify-center h-16 w-16 cursor-pointer group mb-5'>
                        <CalendarFold size={32}
                        className="relative z-10 hover:text-[#ffffff]"
                        />
                        <div className="absolute inset-0 bg-red-400/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    </li>
                    <li className='relative flex items-center justify-center h-16 w-16 cursor-pointer group mb-5'>
                        <UsersRound size={32}
                        className="relative z-10 hover:text-[#ffffff]"
                        />
                        <div className="absolute inset-0 bg-red-400/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    </li>
                    <li className='relative flex items-center justify-center h-16 w-16 cursor-pointer group'>
                        <BookOpenCheck size={32}
                        className="relative z-10 hover:text-[#ffffff]"
                        />
                        <div className="absolute inset-0 bg-red-400/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    </li>

                </ul>
                {/*Este es el bloque de la campana de notificaciones y confi*/}
                <ul className=' bg-white mt-20 shadow-xl border-spacing-y-9 rounded-full p-4 backdrop-blur-xl'>
                    <li className='relative flex items-center justify-center h-16 w-16 cursor-pointer group mb-5'>
                        <BellRing size={32} 
                        className="relative z-10 hover:text-[#ffffff]"
                        />
                        <div className="absolute inset-0 bg-red-400/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    </li>
                    <li className='relative flex items-center justify-center h-16 w-16 cursor-pointer group '>
                        <Settings  size={32}
                        className="relative z-10 hover:text-[#ffffff]"
                        />
                        <div className="absolute inset-0 bg-red-400/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    </li>
                </ul>

                {/* este es el bloque del cierre de sesión y del perfil del usuario-Admin*/}
                <ul className='  bg-white shadow-xl mt-20 border-spacing-y-9 rounded-full p-4 backdrop-blur-xl'>
                    <li className='relative flex items-center justify-center h-16 w-16 cursor-pointer group mb-5'>
                        <LogOut size={32}
                        className="relative z-10 hover:text-[#ffffff]"/>
                        <div className="absolute inset-0 bg-red-400/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    </li>
                    <li className='relative flex items-center justify-center h-16 w-16 cursor-pointer group'>
                        <Avatar>
                            <AvatarImage
                            src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?cs=srgb&dl=pexels-danxavier-1239291.jpg&fm=jpg" 
                            className="rounded-full object-cover  " 
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
export default SidebarAdmin;
