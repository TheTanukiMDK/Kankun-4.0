import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const reservas = [
  { id: 1, nombre: "Fiesta 1", estado: "Pendiente", fecha: "2025-02-25" },
  { id: 2, nombre: "Fiesta 2", estado: "Confirmada", fecha: "2025-03-01" },
  { id: 3, nombre: "Fiesta 3", estado: "Confirmada", fecha: "2025-03-10" },
  { id: 4, nombre: "Fiesta 4", estado: "Rechazada", fecha: "2025-04-05" },
];

const getEstadoColor = (estado: string) => {
  switch (estado) {
    case "Confirmada":
      return "text-green-600";
    case "Pendiente":
      return "text-yellow-600";
    case "Rechazada":
      return "text-red-600";
    default:
      return "text-gray-600";
  }
};

export default function GestionReservas() {
  return (
    <main className="p-10 bg-gray-100">
      <h1 className="text-2xl font-bold">Gestión de Reservas</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <section>
          <h2 className="text-lg font-semibold">Todas las reservas</h2>
          <div>
            {reservas.map((reserva) => (
              <Card key={reserva.id} className="bg-white p-0 rounded-lg shadow-md mt-4">
                <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <CardTitle>{reserva.nombre}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col sm:flex-row sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700">Reserva de Nombre</p>
                    <p className="text-sm text-gray-700">{reserva.fecha}</p>
                  </div>
                  <span
                    className={cn(
                      "text-sm font-semibold mt-2 sm:mt-2",
                      "sm:ml-4", 
                      getEstadoColor(reserva.estado)
                    )}
                  >
                    {reserva.estado}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="text-lg font-semibold">Reservas Aceptadas</h2>
          {reservas
            .filter((r) => r.estado === "Confirmada")
            .map((reserva) => (
              <Card key={reserva.id} className="bg-white p-0 rounded-lg shadow-md mt-4">
                <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <CardTitle>{reserva.nombre}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col sm:flex-row sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700">Reserva de Nombre</p>
                    <p className="text-sm text-gray-700">{reserva.fecha}</p>
                  </div>
                  <span
                    className="text-sm font-semibold text-green-600 mt-2 sm:mt-0 sm:ml-4"
                  >
                    {reserva.estado}
                  </span>
                </CardContent>
              </Card>
            ))}
        </section>

        <section>
          <h2 className="text-lg font-semibold">Reservas Rechazadas</h2>
          {reservas
            .filter((r) => r.estado === "Rechazada")
            .map((reserva) => (
              <Card key={reserva.id} className="bg-white p-0 rounded-lg shadow-md mt-4">
                <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <CardTitle>{reserva.nombre}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col sm:flex-row sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700">Reserva de Nombre</p>
                    <p className="text-sm text-gray-700">{reserva.fecha}</p>
                  </div>
                  <span
                    className="text-sm font-semibold text-red-600 mt-2 sm:mt-0 sm:ml-4"
                  >
                    {reserva.estado}
                  </span>
                </CardContent>
              </Card>
            ))}
        </section>
      </div>
    </main>
  );
}



