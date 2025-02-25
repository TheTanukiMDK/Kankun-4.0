"use client"
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ReservationsAdminCard() {
  return (
    <Card className="bg-white shadow-md shadow-red-300 rounded-xl p-4 w-full">
      <CardContent className="p-0">
        <h3 className="font-bold text-red-500">Fiesta 1</h3>
        <p className="text-gray-600">Reservado por: Adia</p>
        <p className="text-gray-500 text-sm">Fecha de inscripción: 12/05/3023 </p>

          <p className="text-right text-[]">Aceptado</p>

      </CardContent>
    </Card>
  );
}