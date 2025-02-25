/* eslint-disable @next/next/no-img-element */
"use client"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { DollarSign, PanelTop } from "lucide-react"
import { AsistanceCard } from "@/components/asistanceCard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
const chartData = [
  { month: "January", Ventas: 2000},
  { month: "February", Ventas: 4500},
  { month: "March", Ventas: 3070},
  { month: "April", Ventas: 3030},
  { month: "May", Ventas: 3900},
  { month: "June", Ventas: 4140},
  { month: "July", Ventas: 5806},
  { month: "August", Ventas: 3005},
  { month: "September", Ventas: 9307},
  { month: "October", Ventas: 7003},
  { month: "November", Ventas: 5009},
  { month: "December", Ventas: 2140},
]
const chartConfig = {
  Ventas: {
    label: "Ventas del mes: ",
  },
} satisfies ChartConfig
const Root = () => {
  const router = useRouter();
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role'); // Suponiendo que el rol del usuario también se almacena en el localStorage

    if (!token) {
      router.push('/login');
    }
  }, [router]);
  return (
    <div className="pl-12 pt-8 grid grid-cols-5 grid-rows-4 gap-10 p-4">
    {/* Chart de Resumen de Ventas (2 filas, 3 columnas) */}
    <div className="col-span-2 row-span-2">
      <Card className="bg-transparent border-none shadow-none h-full">
        <CardHeader>
          <CardTitle className="font-bold text-3xl text-red-600">Resumen de ventas</CardTitle>
          <CardDescription>Estas mediciones son anuales</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[15vw]">
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid horizontal={false} vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={true}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
                className="text-lg"
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <defs>
                <linearGradient id="colorVentas" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ef5b5b" stopOpacity={1} />
                  <stop offset="100%" stopColor="#fbfff1" stopOpacity={1} />
                </linearGradient>
              </defs>
              <Bar dataKey="Ventas" fill="url(#colorVentas)" radius={10} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  
    {/* Cuadros pequeños (Ventas Semanales e Ingresos Totales) */}
    <div className="col-span-1 row-span-2 flex flex-col gap-4">
      <div className="bg-white shadow-lg rounded-lg p-4 relative h-[48%]">
        <div className="absolute top-2 right-2">
          <PanelTop className="w-6 h-6" />
        </div>
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-xl font-normal">Venta Semanal</h1>
          <h2 className="text-3xl font-bold">+42,300</h2>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-4 relative h-[48%]">
        <div className="absolute top-2 right-2">
          <DollarSign className="w-6 h-6" />
        </div>
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-xl font-normal">Ingresos Totales</h1>
          <h2 className="text-3xl font-bold">+50,400</h2>
        </div>
      </div>
    </div>
  
    {/* Cuadro de Asistencias Totales */}
    <div className="col-span-2 row-span-4">
    <h1 className="text-2xl font-semibold mb-4 text-[#ff3535]">Mejores eventos</h1>
        <div className="bg-white rounded-lg p-4 shadow-md">
          <div className="flex items-center gap-4">
            <img
              src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?cs=srgb&dl=pexels-danxavier-1239291.jpg&fm=jpg"
              alt="foto-prueba"
              className="w-20 h-20 object-cover rounded-tl-2xl rounded-br-2xl"
            />
            <div>
              <h1 className="text-xl font-semibold">Fiesta 24</h1>
              <h3 className="text-sm text-gray-600">2/2/24</h3>
              <h4 className="text-sm text-gray-600">Fiesta en salón centro las palmeras</h4>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md">
          <div className="flex items-center gap-4">
            <img
              src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?cs=srgb&dl=pexels-danxavier-1239291.jpg&fm=jpg"
              alt="foto-prueba"
              className="w-20 h-20 object-cover rounded-tl-2xl rounded-br-2xl"
            />
            <div>
              <h1 className="text-xl font-semibold">Fiesta 24</h1>
              <h3 className="text-sm text-gray-600">2/2/24</h3>
              <h4 className="text-sm text-gray-600">Fiesta en salón centro las palmeras</h4>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md">
          <div className="flex items-center gap-4">
            <img
              src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?cs=srgb&dl=pexels-danxavier-1239291.jpg&fm=jpg"
              alt="foto-prueba"
              className="w-20 h-20 object-cover rounded-tl-2xl rounded-br-2xl"
            />
            <div>
              <h1 className="text-xl font-semibold">Fiesta 24</h1>
              <h3 className="text-sm text-gray-600">2/2/24</h3>
              <h4 className="text-sm text-gray-600">Fiesta en salón centro las palmeras</h4>
            </div>
          </div>
        </div>
    </div>

     {/* Chart de Asistencias (2 filas, 3 columnas) */}
      <div className="col-span-2 row-span-2 mt-[1vw]">
        <AsistanceCard />
      </div>
  
    {/* Cuadro de Mejores Eventos (4 filas, 1 columna) */}
    <div className="col-span-1 row-span-4">
      <div className="h-full flex flex-col gap-4">
      <div className="bg-[#ffffff] rounded-lg p-4 shadow-lg h-full">
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-xl font-normal">Asistencias totales</h1>
          <h2 className="text-3xl font-bold">+89,400</h2>
        </div>
      </div>
      </div>
    </div>
  </div>
  );
};

export default Root;