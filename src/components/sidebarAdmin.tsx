"use client";

import { 
    BellRing, 
    BookOpenCheck, 
    CalendarFold, 
    House, 
    LogOut, 
    Settings, 
    UsersRound 
} from 'lucide-react';
import { 
    Avatar, 
    AvatarImage, 
    AvatarFallback 
} from '@/components/ui/avatar';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SidebarAdmin = () => {
    return (
        <aside className="flex">
            <nav className="h-screen flex flex-col ml-8 justify-evenly">
                <ul className='bg-white shadow-xl border-spacing-y-9 rounded-full p-4 backdrop-blur-xl'>
                    <SideButton Icon={House} href="/dashboard/admin" tooltip="Inicio" />
                    <SideButton Icon={CalendarFold} href="/dashboard/admin/gestion_de_eventos" tooltip="Gestión de eventos" />
                    <SideButton Icon={UsersRound} href="/dashboard/admin/usuarios" tooltip="Usuarios" />
                    <SideButton Icon={BookOpenCheck} href="/dashboard/admin/reportes" tooltip="Reportes" />
                </ul>
                <ul className='bg-white mt-20 shadow-xl border-spacing-y-9 rounded-full p-4 backdrop-blur-xl'>
                    <SideButton Icon={BellRing} href="/dashboard/admin/notificaciones" tooltip="Notificaciones" />
                    <SideButton Icon={Settings} href="/dashboard/admin/ajustes" tooltip="Ajustes" />
                </ul>

                <ul className='bg-white shadow-xl mt-20 border-spacing-y-9 rounded-full p-4 backdrop-blur-xl'>
                    <SideButton Icon={LogOut} href="/login" tooltip="Cerrar sesión" />
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
    );
};

const SideButton = ({
    Icon,
    href,
    tooltip,
}: {
    Icon: React.ElementType;
    href: string;
    tooltip: string;
}) => {
    const currPath = usePathname();
    const isActive = currPath === href;

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <li className='relative flex items-center justify-center h-16 w-16 cursor-pointer group mb-5'>
                        <Link href={href}>
                            <Icon 
                                size={32} 
                                className={`relative z-10 hover:text-[#ffffff] ${isActive ? 'text-[#ffffff]' : ''}`}
                            />
                        </Link>
                        <div className={`absolute inset-0 bg-red-400/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${isActive ? 'opacity-100' : ''}`}></div>
                    </li>
                </TooltipTrigger>
                <TooltipContent side="right" className=" ml-2 z-50">
                    <p>{tooltip}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default SidebarAdmin;
