"use client"
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import image2 from "@/assets/images/fiesta2.jpg"

export default function ReservationsCard() {
  return (
    <Card className="flex items-center p-4 rounded-lg shadow-md border overflow-hidden">
      <div className="w-[299px] h-full relative">
        <Image
          src={image2} // Reemplázalo con la URL real de la imagen
          alt="Evento"
          width={150}
          height={150}
          className="rounded-lg object-cover"
        />
      </div>
      <CardContent className="w-3/4 flex justify-between items-center">
        <div className="text-left">
          <h2 className="text-lg font-bold text-[#C58D7D]">Fiesta</h2>
          <p className="text-sm text-gray-700">Inicia el 12/06/2024</p>
          <p className="text-sm text-gray-700">Termina el 15/06/2024</p>
          <p className="text-sm text-gray-700">Cancún Q. Roo, Av. México Km90</p>
        </div>
        <div className="text-right">
          <p className="text-md font-bold">Inscripción aceptada!</p>
          <p className="text-md font-bold">Hemos reservado el espacio para ti</p>
          <p className="text-md font-bold">Confírmanos tu asistencia</p>
          <Button className="bg-transparent border text-black hover:bg-[#ff9090] mr-5">Confirmar</Button>
          <Button className="bg-red-600">Cancelar</Button>

        </div>
      </CardContent>
    </Card>
  );
}