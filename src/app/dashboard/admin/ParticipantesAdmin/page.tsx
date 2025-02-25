import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const participants = [
  { name: "Adila", event: "Fiesta 1", payment: "100$", date: "12/01/2025" },
  { name: "Raul Pérez", event: "Fiesta 2", payment: "100$", date: "12/01/2025" },
  { name: "Fernando Gonzales", event: "Fiesta 3", payment: "100$", date: "12/02/2025" },
];

function ParticipantesAdmin() {
  const router = useRouter();
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role'); // Suponiendo que el rol del usuario también se almacena en el localStorage

    if (!token) {
      router.push('/login');
    }
  }, [router]);
  return (
    <>
       <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-[#B82132]">Participantes</h2>
        <Input placeholder="Buscar..." className="w-64" />
      </div>
      <Table>
        <TableHeader className="bg-[#FDEDED] border">
          <TableRow>
            <TableHead className="font-semibold border">Nombre del participante</TableHead>
            <TableHead className="font-semibold border">Evento Inscrito</TableHead>
            <TableHead className="font-semibold border">Pago</TableHead>
            <TableHead className="font-semibold border">Fecha Inscripción</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {participants.map((p, index) => (
            <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-[#FDEDED]"}>
              <TableCell className="border">{p.name}</TableCell>
              <TableCell className="border">{p.event}</TableCell>
              <TableCell className="border">{p.payment}</TableCell>
              <TableCell className="border">{p.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    </>
  )
}

export default ParticipantesAdmin
