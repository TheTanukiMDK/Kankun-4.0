"use client"
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Bell, Settings, LogOut, User } from "lucide-react";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function UserProfile() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isEditing, setIsEditing] = useState({ name: false, email: false, password: false });
  const [formData, setFormData] = useState({ name: "Lazaro Cardenas", email: "Lazari**@Kankun40.com", password: "" });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditClick = (field) => {
    setIsEditing({ ...isEditing, [field]: true });
  };

  const handleChange = (event, field) => {
    setFormData({ ...formData, [field]: event.target.value });
  };
  const router = useRouter();
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role'); // Suponiendo que el rol del usuario también se almacena en el localStorage

    if (!token) {
      router.push('/login');
    }
  }, [router]);
  return (
    <div className="flex h-screen">
     

      {/* Main content */}
      <div className="flex-1 p-8">
      <h1 className="text-2xl font-bold text-red-500">Información personal</h1>
        <div className="flex mt-6 items-center">
          <label htmlFor="imageUpload" className="cursor-pointer">
            <Avatar className="w-[201px] h-[195px] border-2 border-gray-400" src={selectedImage || undefined} />
          </label>
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
          
        </div>

        <Card className="mt-6 p-4">
          <div className="flex justify-between">
            <span className="font-bold">Nombre Legal</span>
            <Button variant="link" onClick={() => handleEditClick("name")}>Editar</Button>
          </div>
          {isEditing.name ? (
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange(e, "name")}
              className="w-full mt-2 p-2 border rounded"
            />
          ) : (
            <p className="text-gray-500">{formData.name}</p>
          )}
        </Card>

        <Card className="mt-4 p-4">
          <div className="flex justify-between">
            <span className="font-bold">Correo electrónico</span>
            <Button variant="link" onClick={() => handleEditClick("email")}>Editar</Button>
          </div>
          {isEditing.email ? (
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange(e, "email")}
              className="w-full mt-2 p-2 border rounded"
            />
          ) : (
            <p className="text-gray-500">{formData.email}</p>
          )}
        </Card>

        <Card className="mt-4 p-4">
          <div className="flex justify-between">
            <span className="font-bold">Contraseña</span>
            <Button variant="link" onClick={() => handleEditClick("password")}>Editar</Button>
          </div>
          {isEditing.password ? (
            <input
              type="password"
              value={formData.password}
              onChange={(e) => handleChange(e, "password")}
              className="w-full mt-2 p-2 border rounded"
            />
          ) : (
            <p className="text-gray-500">********</p>
          )}
        </Card>
      </div>

      {/* Right Panel */}
      <div className="w-1/3 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-lg font-bold text-red-500">¿Por qué mi información no se muestra aquí?</h2>
        <p className="text-gray-500 mt-2">Estamos ocultando algunos detalles de la cuenta para proteger su identidad.</p>
        <h2 className="text-lg font-bold mt-4 text-red-500">¿Qué detalles se pueden editar?</h2>
        <p className="text-gray-500 mt-2">Algunos datos personales se pueden editar, pero se le puede pedir verificar su identidad.</p>
        <h2 className="text-lg font-bold mt-4 text-red-500">¿Qué información se comparte con otros?</h2>
        <p className="text-gray-500 mt-2">Solo se publica la información de contacto una vez confirmada la reserva.</p>
      </div>

      {/* User Menu */}
      <div className="absolute top-4 right-4">

        {menuOpen && (
          <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost">
      <Avatar className="w-8 h-8" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-48">
    <DropdownMenuItem>Perfil</DropdownMenuItem>
    <DropdownMenuItem>Inscripciones</DropdownMenuItem>
    <DropdownMenuItem>Reservas</DropdownMenuItem>
    <DropdownMenuItem>Cerrar sesión</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
        )}
      </div>
    </div>
  );
}
