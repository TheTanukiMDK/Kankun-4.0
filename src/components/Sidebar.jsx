import React from "react";
import {  FaClipboardList, FaBell, FaCog, FaCalendar } from "react-icons/fa";
import { MdLogout } from "react-icons/md";


export default function Sidebar() {
    return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
      <div className="bg-white shadow-lg rounded-full p-3 flex flex-col space-y-4">
        <button className="p-3 bg-gray-200 text-gray-700 rounded-full shadow-md hover:bg-gray-300 transition">
          <FaCalendar size={20} />
        </button>
        <button className="p-3 bg-gray-200 text-gray-700 rounded-full shadow-md hover:bg-gray-300 transition">
          <FaClipboardList size={20} />
        </button>
        <button className="p-3 bg-gray-200 text-gray-700 rounded-full shadow-md hover:bg-gray-300 transition">
          <FaBell size={20} />
        </button>
      </div>
      
      <div className="bg-white shadow-lg rounded-full p-3 flex flex-col space-y-4">
        <button className="p-3 bg-gray-200 text-gray-700 rounded-full shadow-md hover:bg-gray-300 transition">
          <FaCog size={20} />
        </button>
        <button className="p-3 bg-gray-200 text-gray-700 rounded-full shadow-md hover:bg-red-500 transition">
          <MdLogout size={20} />
        </button>
      </div>
    </div>

    );
}