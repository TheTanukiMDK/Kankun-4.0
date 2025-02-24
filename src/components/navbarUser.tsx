import { Search, UserCircle2, TreePalm } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between py-4 px-6 bg-white  border-gray-300">
      <div>
        <nav className="text-gray-500 text-sm">
          <Link href="/dashboard" className="hover:text-gray-700">Cuenta</Link> &gt; 
          <span className="font-semibold">Reservas</span>
        </nav>
        <h1 className="text-xl font-bold text-red-600">Mis reservas</h1>
      </div>

      <div className="flex items-center space-x-4">
        <TreePalm className="text-gray-600" size={30} />
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar ..."
            className="bg-white border border-gray-300 rounded-full pl-10 pr-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
        </div>

        <div className="w-10 h-10 rounded-full border-2 border-gray-300 overflow-hidden flex items-center justify-center bg-gray-100">
          <UserCircle2 className="text-gray-500 w-8 h-8" />
        </div>
      </div>
    </header>
  );
}