"use client"
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MapPin, Users } from "lucide-react";
import image2 from "@/assets/images/fiesta2.jpg"

export default function EventCard() {
  return (
    <div className="max-w-7xl mx-auto p-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Image
          src={image2}
          alt="Evento"
          className="rounded-lg w-full object-cover"
        />
        <div>
          <h2 className="text-2xl font-bold text-[#f28c8c]">Fiesta</h2>
          <p className="text-gray-600">Inicia el 12/06/2024</p>
          <p className="text-gray-600">Termina el 15/06/2024</p>
          <p className="font-semibold flex items-center gap-2 mt-2">
            <MapPin className="w-5 h-5 text-gray-500" /> Cancun Q. Roo estado Av. Mexico Km90
          </p>
          <p className="font-semibold text-gray-700 mt-2">+10000 personas</p>
          <p className="text-3xl font-bold text-gray-900">$32,400</p>
          <p className="flex items-center gap-2 text-gray-600 mt-2">
            <Users className="w-5 h-5 text-gray-500" /> Se esperan 200 asistencias
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <h3 className="text-lg font-bold">Ubicación en mapa</h3>
          <div className="mt-2 border rounded-lg overflow-hidden">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-86.8475,21.1619,-86.8470,21.1623"
              className="w-full h-96"
              title="Mapa"
            ></iframe>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold">Listado de actividades</h3>
          <div className="mt-2 border border-[#B82132]/50 rounded-lg p-4 space-y-2">
            {[
              { name: "Apertura", time: "9:30 pm" },
              { name: "Show", time: "9:30 pm" },
              { name: "Cierre", time: "9:30 pm" },
            ].map((activity, index) => (
              <Card key={index} className="flex justify-between p-5 border rounded-lg">
                <span className="font-semibold">{activity.name}</span>
                <span>{activity.time}</span>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Button className="bg-[#F2B28C] px-6 py-2 rounded-lg shadow-lg">
          Inscribirme
        </Button>
      </div>
    </div>
  );
}
