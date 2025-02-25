import Header from "@/components/dashboard/user/Header";
import { Card } from "@/components/ui/card";

const TEMP_DATA = [
  {
    imgSrc:
      "https://i.pinimg.com/originals/10/cd/23/10cd2320d7033d2acf839a808920d905.jpg",
    title: "Evento de abuelos",
    start: "16/12/2025",
    finish: "24/12/2025",
    location: "Plaza las Americas",
    evStatus: "accepted",
  },
  {
    imgSrc:
      "https://i.pinimg.com/originals/10/cd/23/10cd2320d7033d2acf839a808920d905.jpg",
    title: "Evento cancelado",
    start: "16/12/2025",
    finish: "24/12/2025",
    location: "Plaza las Americas",
    evStatus: "denied",
  },
  {
    imgSrc:
      "https://i.pinimg.com/originals/10/cd/23/10cd2320d7033d2acf839a808920d905.jpg",
    title: "Evento pendiente",
    start: "16/12/2025",
    finish: "24/12/2025",
    location: "Plaza las Americas",
    evStatus: "pending",
  },
];

const Root = () => {
  return (
    <div className="flex flex-col flex-1">
      <Header title="Mis reservas" />
      <div className="flex flex-col gap-4 flex-1 px-20 py-8">
        {TEMP_DATA.map((ev, index) => (
          <EventCard
            key={index}
            imgSrc={ev.imgSrc}
            title={ev.title}
            start={ev.start}
            finish={ev.finish}
            location={ev.location}
            evStatus={ev.evStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default Root;

const EventCard = ({
  imgSrc,
  title,
  start,
  finish,
  location,
  evStatus,
}: {
  imgSrc: string;
  title: string;
  start: string;
  finish: string;
  location: string;
  evStatus: "accepted" | "denied" | "pending";
}) => {
  return (
    <Card className="w-full h-64 flex items-center justify-between px-4">
      <div className="flex flex-row gap-4 items-center justify-center">
        <img
          className="w-[300px] h-56 object-cover rounded-md"
          src={imgSrc}
          alt={title}
        />
        <div className="flex flex-col gap-1">
          <p className="font-bold text-xl">{title}</p>
          <p className="text-md">Inicia el {start}</p>
          <p className="text-md">Termina el {finish}</p>
          <p className="text-md">{location}</p>
        </div>
      </div>
      <div>
        <p className="font-bold">
          {evStatus == "accepted" ? (
            <>
              Invitacion enviada
              <br />
              Hemos reservado un espacio para ti
            </>
          ) : evStatus == "pending" ? (
            <>
              Invitacion pendiente
              <br />
              Estamos en proceso de apartar
              <br />
              un lugar para ti
            </>
          ) : (
            <>
              Invitacion cancelada
              <br />
              Lo sentimos, no hemos logrado
              <br />
              reservar un espacio para ti
            </>
          )}
        </p>
      </div>
      <div className="font-bold">
        {evStatus == "accepted" ? (
          <p className="text-green-500">Aceptado</p>
        ) : evStatus == "pending" ? (
          <p className="text-yellow-500">Pendiente</p>
        ) : (
          <p className="text-primary">Cancelado</p>
        )}
      </div>
    </Card>
  );
};
