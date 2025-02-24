import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function EventCard() {
  return (
    <Card className="w-80 rounded-2xl overflow-hidden shadow-md">
      <div className="relative w-full h-48">
        <Image
          src="/imagen.png" // Asegúrate de que la imagen esté en la carpeta public
          alt="Fiesta"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
      </div>
      <CardContent className="p-4 bg-white">
        <h3 className="text-lg font-semibold text-[#F2B28C]">Fiesta</h3>
        <p className="text-sm text-gray-700 mt-1">
          Una fiesta tan alucinante como ninguna otra, participa y sé parte de esta experiencia!
        </p>
        <Link href="/dashboard/user/details">
        <Button className="mt-3 bg-[#F6DED8] hover:bg-[#f79883] text-black">
          Detalles
        </Button>
        </Link>

      </CardContent>
    </Card>
  );
}
