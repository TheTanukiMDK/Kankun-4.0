"use client"
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MapPin, Users } from "lucide-react";
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';

export default function EventDetails() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id'); // Obtén el parámetro `id` de la URL
  const [event, setEvent] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (!id) return; // Asegúrate de que el id esté definido antes de hacer la solicitud

    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    } else {
      const fetchEventDetails = async () => {
        try {
          console.log(`Fetching event details for ID: ${id}`);
          const response = await axios.get(`http://127.0.0.1:8000/api/events/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setEvent(response.data.data);

          // Fetch location details
          const locationResponse = await axios.get(`http://127.0.0.1:8000/api/locations`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const locationData = locationResponse.data.data.find(loc => loc.id === response.data.data.location_id);
          setLocation(locationData);
        } catch (error) {
          console.error("Error fetching event details:", error);
        }
      };

      fetchEventDetails();
    }
  }, [id, router]);

  if (!event || !location) {
    console.log("sin eventos o ubicaciones", event, location);
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src={event.image}
          alt={event.name}
          className="rounded-lg w-full object-cover"
        />
        <div>
          <h2 className="text-2xl font-bold text-[#f28c8c]">{event.name}</h2>
          <p className="text-gray-600">Inicia el {new Date(event.start).toLocaleDateString()}</p>
          <p className="text-gray-600">Termina el {new Date(event.end).toLocaleDateString()}</p>
          <p className="font-semibold flex items-center gap-2 mt-2">
            <MapPin className="w-5 h-5 text-gray-500" /> {location.address}
          </p>
          <p className="font-semibold text-gray-700 mt-2">{event.capacity} personas</p>
          <p className="text-3xl font-bold text-gray-900">${event.cost}</p>

        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <h3 className="text-lg font-bold">Ubicación en mapa</h3>
          <div className="mt-2 border rounded-lg overflow-hidden">
            <iframe
              src={`https://www.openstreetmap.org/export/embed.html?bbox=&layer=mapnik`}
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