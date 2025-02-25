import ReservationsCard from "@/components/ReservationsCard";

const Root = () => {
    return (
      <div>
        {/*<main className="ml-[100px] w-[calc(100%-100px)] flex flex-col items-center justify-center min-h-screen p-6">
          <h1 className="text-2xl font-bold">No hay reservaciones</h1>
          <p className="text-lg"></p>
        </main>*/}
        <h1 className="text-[#e40822] ml-[210px] mb-[50px] text-[25px] font-semibold">Mis reservas</h1>
          <div className="flex flex-wrap justify-center gap-5">
          <ReservationsCard ></ReservationsCard>
        <ReservationsCard ></ReservationsCard>
        <ReservationsCard ></ReservationsCard>
          </div>
        
      </div>
    );
  };
  
  export default Root;