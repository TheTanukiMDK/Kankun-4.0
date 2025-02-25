"use client"; // 

import { Input } from "@/components/ui/input"; // Componente de input de shadcn
import { Label } from "@/components/ui/label"; // Componente de label de shadcn
import { Textarea } from "@/components/ui/textarea"; // Componente de textarea de shadcn
import { Button } from "@/components/ui/button"; // Componente de botón de shadcn
import DataPicker from "./datePicker";

const EventForm = () => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl col-span-2 backdrop-contrast-150">
      <h2 className="text-3xl font-bold text-center text-red-600/60 mb-6">
        Crear Evento
      </h2>
      <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {/* Nombre del evento */}
        <div className="flex flex-col space-y-2">
          <Label htmlFor="eventName">Nombre del evento</Label>
          <Input
            id="eventName"
            type="text"
            placeholder="Nombre del evento"
          />
        </div>

        {/* Capacidad */}
        <div className="flex flex-col space-y-2">
          <Label htmlFor="capacity">Capacidad</Label>
          <Input
            id="capacity"
            type="number"
            placeholder="Capacidad"
          />
        </div>

        {/* Costo */}
        <div className="flex flex-col space-y-2">
          <Label htmlFor="cost">Costo</Label>
          <Input
            id="cost"
            type="text"
            placeholder="Costo"
          />
        </div>

        {/* Dirección */}
        <div className="flex flex-col space-y-2 col-span-2">
          <Label htmlFor="address">Dirección</Label>
          <Input
            id="address"
            type="text"
            placeholder="Dirección"
          />
        </div>

        {/* Hora de inicio */}
        <div className="flex flex-col space-y-2">
          <Label htmlFor="startTime">Hora de inicio</Label>
          <Input
            id="startTime"
            type="time"
          />
        </div>

        {/* Selector de fecha */}
        <div className="flex flex-col space-y-2">
          <Label>Fecha del evento</Label>
          <DataPicker/>
        </div>

        {/* Hora de cierre */}
        <div className="flex flex-col space-y-2">
          <Label htmlFor="endTime">Hora de cierre</Label>
          <Input
            id="endTime"
            type="time"
          />
        </div>

        {/* Descripción */}
        <div className="flex flex-col space-y-2 col-span-2">
          <Label htmlFor="description">Descripción</Label>
          <Textarea
            id="description"
            placeholder="Descripción"
            rows={4}
          />
        </div>

        {/* Botón de publicar */}
        <Button className=" mt-[13.5vh] w-[10vh] col-span-2 bg-red-500 hover:bg-red-600 shadow-sm shadow-red-200 border">
          Publicar
        </Button>
      </form>
    </div>
  );
};

export default EventForm;