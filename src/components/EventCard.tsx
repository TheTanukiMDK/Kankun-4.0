"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from 'next/navigation';
interface Event {
  id: number;
  name: string;
  description: string;
  image: string;
}

export default function EventCard() {
  const [events, setEvents] = useState<Event[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchEvents = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/events", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const eventData = response.data.data; // Access the events array
        setEvents(eventData);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    fetchEvents();
  }, []);

  if (events.length === 0) {
    console.log("sin eventos", events);
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {events.map((event) => (
        <Card key={event.id} className="w-80 rounded-2xl overflow-hidden shadow-md">
          <div className="relative w-full h-48">
            <img
              src={event.image} // Ensure the image URL is correct
              alt={event.name}
              layout="fill"
              objectFit="cover"
              className="brightness-75"
            />
          </div>
          <CardContent className="p-4 bg-white">
            <h3 className="text-lg font-semibold text-[#ff4141] mt-5">{event.name}</h3>
            <p className="text-sm text-gray-700 mt-1">
              {event.description}
            </p>
            <Button 
              className="mt-3 bg-[#ffb9b9] hover:bg-[#fd6262] text-black"
              onClick={() => router.push(`/dashboard/user/details?id=${event.id}`)}
            >
              Detalles
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}