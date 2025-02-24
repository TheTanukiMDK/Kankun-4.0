import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const participants = [
  { name: "Adila", event: "Fiesta 1", payment: "100$", date: "12/01/2025" },
  { name: "Raul Pérez", event: "Fiesta 2", payment: "100$", date: "12/01/2025" },
  { name: "Fernando Gonzales", event: "Fiesta 3", payment: "100$", date: "12/02/2025" },
];

function ParticipantesAdmin() {
  return (
    <>
       <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Participantes</h2>
        <Input placeholder="Buscar..." className="w-64" />
      </div>
      <Table>
        <TableHeader className="bg-red-100">
          <TableRow>
            <TableHead>Nombre del participante</TableHead>
            <TableHead>Evento Inscrito</TableHead>
            <TableHead>Pago</TableHead>
            <TableHead>Fecha Inscripción</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {participants.map((p, index) => (
            <TableRow key={index}>
              <TableCell>{p.name}</TableCell>
              <TableCell>{p.event}</TableCell>
              <TableCell>{p.payment}</TableCell>
              <TableCell>{p.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    </>
  )
}

export default ParticipantesAdmin
