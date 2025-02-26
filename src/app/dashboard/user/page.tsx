"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import EventCard from "@/components/EventCard";

const Root = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div>
      <h1 className="text-[#eb0923] ml-[100px] mb-[50px] text-[25px] font-semibold">
        Todos los eventos
      </h1>
      <main className="ml-[100px] w-[calc(100%-100px)] grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 mr-2">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <p className="text-lg"></p>
      </main>
      <h1 className="text-[#eb0923] ml-[100px] mb-[50px] mr-[50px]  text-[25px] font-semibold">
        Eventos de hoy
      </h1>
      <main className="ml-[100px] w-[calc(100%-100px)] grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 mr-2">
        <EventCard />
        <EventCard />
        <EventCard />
        <p className="text-lg"></p>
      </main>
      <h1 className="text-[#eb0923] ml-[100px] mb-[50px] mr-[50px] text-[25px] font-semibold">
        Mejores eventos
      </h1>
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
