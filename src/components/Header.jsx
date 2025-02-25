import React from 'react'
import { GiPalmTree } from "react-icons/gi";

function Header() {
    return (
        <>
            <header className="w-full fixed top-0 left-0 bg-white flex justify-between p-4 border border-[#B82132]/30 shadow-xl">
                <div className="flex gap-2">
                    <GiPalmTree className=" text-[30px]" size="3rem" />
                    <span className="text-[#B82132] font-bold text-[30px]">Kankun 4.0</span>
                </div>
                <div className="flex justify-center flex-grow">
                    <ul className='flex gap-48 items-center text-[#B82132] font-semibold'>
                        <li><a href='/'>Inicio</a></li>
                        <li><a href=''>Eventos</a></li>
                        <li><a href=''>Contacto</a></li>
                    </ul>
                </div>
                <div>
                    <button className='bg-[#F6DED8] px-4 py-2 text-black rounded-md'>Iniciar sesión</button>
                </div>
            </header>
        </>
    )
}

export default Header