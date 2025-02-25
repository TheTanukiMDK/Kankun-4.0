import React from 'react'
import { TreePalm } from 'lucide-react';

function Header() {
    return (
        <>
            <header className="w-full fixed top-0 left-0 bg-white flex justify-between p-4 border border-[#B82132]/30 shadow-xl">
                <div className="flex gap-2">
                    <TreePalm className="text-red-600 text-[30px]" size="3rem" />
                    <span className="text-[#B82132] font-bold text-[30px]">Kankun 4.0</span>
                </div>
                <div>
                    <button className='bg-[#F6DED8] px-4 py-2 text-black rounded-md'>Iniciar sesión</button>
                </div>
            </header>
        </>
    )
}

export default Header