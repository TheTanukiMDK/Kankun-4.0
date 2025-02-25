"use client";
import { Bar, BarChart, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { date: "2024-07-15", Asistencias: 450, Cancelaciones: 300 },
  { date: "2024-07-16", Asistencias: 380, Cancelaciones: 420 },
  { date: "2024-07-17", Asistencias: 520, Cancelaciones: 120 },
  { date: "2024-07-18", Asistencias: 140, Cancelaciones: 550 },
  { date: "2024-07-19", Asistencias: 600, Cancelaciones: 350 },
  { date: "2024-07-20", Asistencias: 480, Cancelaciones: 400 },
];

const chartConfig = {
  Asistencias: {
    label: "Asistencias",
    color: "hsl(var(--chart-1))",
  },
  Cancelaciones: {
    label: "Asistencias canceladas",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function AsistanceCard() {
  return (
    <Card className="bg-transparent border-none shadow-none">
      <CardHeader>
        <CardTitle className="font-bold text-3xl text-gray-700">Tasa de asistencias</CardTitle>
        <CardDescription>
          Medido diariamente
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[15vw]">
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={5}
              axisLine={false}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString("en-US", {
                  weekday: "short",
                });
              }}
            />
            <Bar
              dataKey="Asistencias"
              stackId="b"
              fill="#E03D40"
              radius={[50, 50, 50, 50]}
            />
            <Bar
              dataKey="Cancelaciones"
              stackId="c"
              fill="#F06A6A"
              radius={[50, 50, 50, 50]}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                    className="w-64 p-4"
                  hideLabel
                  formatter={(value, name, item, index) => (
                    <>
                      <div
                        className=" shrink-0 rounded-[2px] bg-[--color-bg]"
                        style={
                          {
                            "--color-bg": `var(--color-${name})`,
                          } as React.CSSProperties
                        }
                      />
                      {chartConfig[name as keyof typeof chartConfig]?.label ||
                        name}
                      <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                        {value}
                        <span className="font-normal text-muted-foreground">
                          asistencias
                        </span>
                      </div>
                      {/* Add this after the last item */}
                      {index === 1 && (
                        <div className="mt-1.5 flex basis-full items-center border-t pt-1.5 text-xs font-medium text-foreground">
                          Total
                          <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                            {item.payload.Asistencias +
                              item.payload.Cancelaciones}
                            <span className="font-normal text-muted-foreground">
                              Asistencias
                            </span>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                />
              }
              cursor={false}
              defaultIndex={1}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
