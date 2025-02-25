"use client"
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function EventManager() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [view, setView] = useState("event"); // "event", "activities" o "edit"
  const [cardSize, setCardSize] = useState("w-2/3"); // Permite ajustar el tamaño de la card
  const [image, setImage] = useState(null);
  const router = useRouter();

  const events = [
    { id: 1, name: "Fiesta 1", date: "12/2/2024", location: "Salon Centro" },
    { id: 2, name: "Fiesta 2", date: "12/2/2024", location: "Salon Centro" },
    { id: 3, name: "Fiesta 3", date: "12/2/2024", location: "Salon Centro" },
  ];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role'); // Suponiendo que el rol del usuario también se almacena en el localStorage

    if (!token) {
      router.push('/login');
    } 
  }, [router]);

  return (
    <div className="flex gap-6 p-6">
      {/* Lista de eventos */}
      <div className="w-1/3">
        <h2 className="text-xl font-bold mb-4 text-[#B82132]">Eventos programados</h2>
        {events.map((event) => (
          <Card onClick={() => {
            setSelectedEvent(event);
            setView("activities");
          }} key={event.id} className="p-4 mb-2 flex justify-between items-center cursor-pointer hover:bg-[#F8ADAD] shadow-lg">
            <div>
              <p className="font-semibold text-[#901D1D]">{event.name}</p>
              <p className="text-sm">{event.date}</p>
              <p className="text-xs text-gray-500">{event.location}</p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">⋮</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setView("edit")}>
                  Editar
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-500">Borrar</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Card>
        ))}
      </div>

      {/* Formulario */}
      <Card className={`${cardSize} border border-[#B74242]/50 shadow-lg shadow-[#f17575]/80 p-6 rounded-lg flex flex-col md:flex-row gap-6 min-w-[600px]`}>
        <div className="flex-1 min-w-[400px]">
          {view === "event" || view === "edit" ? (
            <>
              <h2 className="text-xl font-bold mb-4 text-[#EC7D7D]">{view === "event" ? "Crear evento" : "Editar evento"}</h2>
              <form>
                <Label>Nombre del evento</Label>
                <Input className="mb-2 w-full bg-[#F0D9D9] border-transparent" defaultValue={view === "edit" ? selectedEvent?.name : ""} />
                <Label>Capacidad</Label>
                <Input className="mb-2 w-full bg-[#F0D9D9] border-transparent" />
                <Label>Coste</Label>
                <Input className="mb-2 w-full bg-[#F0D9D9] border-transparent" />
                <Label>Ubicacion</Label>
                <Input className="mb-2 w-full bg-[#F0D9D9] border-transparent" defaultValue={view === "edit" ? selectedEvent?.location : ""} />
                <div className="flex gap-2">
                  <div className="flex-1">
                    <Label>Hora y fecha de inicio</Label>
                    <Input type="datetime-local" className="mb-2 w-full bg-[#F0D9D9] border-transparent" />
                  </div>
                  <div className="flex-1">
                    <Label>Hora y fecha de cierre</Label>
                    <Input type="datetime-local" className="mb-2 w-full bg-[#F0D9D9] border-transparent" />
                  </div>
                </div>
                <Label>Imagen del evento</Label>
                <Input type="file" accept="image/*" className="mb-2 w-full bg-[#F0D9D9] border-transparent" onChange={handleImageChange} />
                {image && <img src={image} alt="Evento" className="w-full h-40 object-cover mt-2 bg-[#F0D9D9]" />}
                <Label>Descripción</Label>
                <Textarea className="mb-2 w-full bg-[#F0D9D9] border-transparent" />
                <div className="flex gap-4 mt-4">
                  {view === "edit" && <Button onClick={() => setView("event")}>Cancelar</Button>}
                  <Button>{view === "event" ? "Publicar" : "Guardar cambios"}</Button>
                </div>
              </form>
            </>
          ) : (
            <>
              <h2 className="text-xl font-bold mb-4 text-[#EC7D7D]">Agregar actividades</h2>
              <form>
                <Label>Nombre de la actividad</Label>
                <Input className="mb-2 w-full bg-[#F0D9D9] border-transparent" />
                <Label>Hora de inicio</Label>
                <Input type="time" className="mb-2 w-full bg-[#F0D9D9] border-transparent" />
                <Label>Hora de fin</Label>
                <Input type="time" className="mb-2 w-full bg-[#F0D9D9] border-transparent" />
                <Label>Descripción</Label>
                <Textarea className="mb-2 w-full bg-[#F0D9D9] border-transparent" />
                <div className="flex gap-4 mt-4">
                  <Button onClick={() => setView("event")}>Volver</Button>
                  <Button>Guardar actividad</Button>
                </div>
              </form>

            </>
          )}
        </div>
        <div className="flex flex-col items-center justify-start min-w-[250px]">
          <Label className="text-xl font-bold mb-4 text-[#EC7D7D]">Caledario</Label>
          <Calendar className="mt-2 bg-[#FDEDED]" />
        </div>
      </Card>
    </div>
  );
}