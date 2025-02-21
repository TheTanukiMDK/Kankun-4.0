"use client";

import { Calendar, ClipboardList, Bell, Settings, LogOut } from "lucide-react"; 
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-6">
      <div className="bg-white shadow-lg rounded-full p-3 flex flex-col space-y-4">
        <div className="space-y-4">
          <Link href="/dashboard/user" className="flex items-center space-x-2 p-3 bg-gray-200 text-gray-700 rounded-full shadow-md hover:bg-gray-300 transition">
            <Calendar size={20} />
          </Link>

          <Link href="/dashboard/user" className="flex items-center space-x-2 p-3 bg-gray-200 text-gray-700 rounded-full shadow-md hover:bg-gray-300 transition">
            <ClipboardList size={20} />
          </Link>

          <Link href="/dashboard/user" className="flex items-center space-x-2 p-3 bg-gray-200 text-gray-700 rounded-full shadow-md hover:bg-gray-300 transition">
            <Bell size={20} />
          </Link>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-full p-3 flex flex-col space-y-4">
        <div className="space-y-4">
          <Link href="/dashboard/user" className="flex items-center space-x-2 p-3 bg-gray-200 text-gray-700 rounded-full shadow-md hover:bg-gray-300 transition">
            <Settings size={20} />
          </Link>

          <Link href="/login" className="flex items-center space-x-2 p-3 bg-gray-200 text-gray-700 rounded-full shadow-md hover:bg-red-500 transition">
            <LogOut size={20} />
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
