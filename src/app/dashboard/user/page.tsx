import EventCard from "@/components/EventCard";
import Link from "next/link";
const Root = () => {
  return (
    <div>

      {/* <main className="ml-[100px] w-[calc(100%-100px)] flex flex-col items-center justify-center min-h-screen p-6">
        <h1 className="text-2xl font-bold">No hay eventos registrados</h1>
        <p className="text-lg"></p>
      </main>*/ }
            <h1 className="text-[#eb0923] ml-[100px] mb-[50px] text-[25px] font-semibold">Todos los eventos</h1>
      <main className="ml-[100px] w-[calc(100%-100px)] grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 mr-2">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <p className="text-lg"></p>
      </main>
      <h1 className="text-[#eb0923] ml-[100px] mb-[50px] mr-[50px]  text-[25px] font-semibold">Eventos de hoy</h1>
      <main className="ml-[100px] w-[calc(100%-100px)] grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 mr-2">
        <EventCard />
        <EventCard />
        <EventCard />
        <p className="text-lg"></p>
      </main>
      <h1 className="text-[#eb0923] ml-[100px] mb-[50px] mr-[50px] text-[25px] font-semibold">Mejores eventos</h1>
      <main className="ml-[100px] w-[calc(100%-100px)] grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 mr-2">
        <EventCard />
        <EventCard />
        <EventCard />
        <p className="text-lg"></p>
      </main>
    </div>
  );
};

export default Root;