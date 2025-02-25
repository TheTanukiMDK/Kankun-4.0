"use client"; 

import { useTitle } from '@/components/titleContext'; 
import { Search } from 'lucide-react';
import Logo from './kankunlogo';

const currentDate = new Date().toLocaleDateString("es-ES", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
});

const HeaderAdmin = () => {
    const { title } = useTitle(); 
    return (
        <header className="w-full h-14 py-0 lg:px-[200px] sm:px-[20%] flex items-center sticky top-10 left-0 z-[1000] before:content-[''] before:absolute before:w-10 before:h-10 before:-bottom-10">
            <div className="flex items-center w-full">
                <span className="lg:text-3xl md:text-[18px] sm:text-md font-semibold w-[400px] flex-1 mb-2 bg-gradient-to-r from-gray-800 to-gray-900 text-transparent bg-clip-text">
                {title} {/* Usa el título del contexto */}
                </span>
                <div className="bg-gray-800 p-2 rounded-full shadow-md text-center">
                <p className="text-sm font-normal text-white px-2">{currentDate}</p>
                </div>

                <form className="flex items-center h-[36px] ml-10 mr-20" action="#">
                <input
                    type="search"
                    placeholder="Search..."
                    className="backdrop-blur-xl shadow-md grow py-0 px-[16px] h-full border-none rounded-tl-[36px] rounded-bl-[36px] outline-none w-full flex-none"
                />
                <button
                    type="submit"
                    className="bg-red-500/90 w-[36px] h-full flex justify-center items-center font-normal border-none outline-none cursor-pointer rounded-tr-[36px] rounded-br-[36px]"
                >
                    <Search fill="#fff" color="#fff" size={20} className="m-2" />
                </button>
                </form>
                <Logo className={'text-red-700/80 flex-none'} />
            </div>
        </header>
    );
};

export default HeaderAdmin;