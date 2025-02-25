"use client";
import Header from "@/components/dashboard/user/Header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TEMP_EVENTS = [
  {
    imgSrc:
      "https://i.pinimg.com/originals/10/cd/23/10cd2320d7033d2acf839a808920d905.jpg",
    name: "Fiesta",
    description:
      "Una fiesta tan alucinante como ninguna otra, participa y se parte de esta experiencia.",
    action: () => alert("Test"),
  },
  {
    imgSrc:
      "https://i.pinimg.com/originals/10/cd/23/10cd2320d7033d2acf839a808920d905.jpg",
    name: "Fiesta",
    description:
      "Una fiesta tan alucinante como ninguna otra, participa y se parte de esta experiencia.",
    action: () => alert("Test"),
  },
  {
    imgSrc:
      "https://i.pinimg.com/originals/10/cd/23/10cd2320d7033d2acf839a808920d905.jpg",
    name: "Fiesta de ancianos",
    description:
      "Una fiesta tan alucinante como ninguna otra, participa y se parte de esta experiencia.",
    action: () => alert("Test"),
  },
  {
    imgSrc:
      "https://i.pinimg.com/originals/10/cd/23/10cd2320d7033d2acf839a808920d905.jpg",
    name: "Fiesta",
    description:
      "Una fiesta tan alucinante como ninguna otra, participa y se parte de esta experiencia.",
    action: () => alert("Test"),
  },
  {
    imgSrc:
      "https://i.pinimg.com/originals/10/cd/23/10cd2320d7033d2acf839a808920d905.jpg",
    name: "Fiesta",
    description:
      "Una fiesta tan alucinante como ninguna otra, participa y se parte de esta experiencia.",
    action: () => alert("Test"),
  },
  {
    imgSrc:
      "https://i.pinimg.com/originals/10/cd/23/10cd2320d7033d2acf839a808920d905.jpg",
    name: "Fiesta",
    description:
      "Una fiesta tan alucinante como ninguna otra, participa y se parte de esta experiencia.",
    action: () => alert("Test"),
  },
];

const EventCard = ({
  imgSrc,
  name,
  description,
  action,
}: {
  imgSrc: string;
  name: string;
  description: string;
  action: () => void;
}) => {
  return (
    <Card className="max-w-[400px] w-[400px]">
      <CardHeader>
        <img
          className="w-full h-52 object-cover rounded-md"
          alt={name}
          src={imgSrc}
        />
      </CardHeader>
      <CardContent>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button onClick={action}>Detalles</Button>
      </CardFooter>
    </Card>
  );
};

const Root = () => {
  return (
    <div className="flex-1 px-8">
      <Header title="Todos los eventos" />
      <main className="grid grid-cols-4 space-x-4 space-y-4 items-center justify-center min-h-screen p-6">
        {TEMP_EVENTS.map((pEvent, index) => (
          <EventCard
            key={index}
            imgSrc={pEvent.imgSrc}
            name={pEvent.name}
            description={pEvent.description}
            action={pEvent.action}
          ></EventCard>
        ))}
      </main>
    </div>
  );
};

export default Root;
