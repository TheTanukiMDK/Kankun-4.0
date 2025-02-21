import type { Metadata } from "next"; //<-- Este import
import { ReactNode } from "react";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import "@fontsource-variable/inter";

// Los datos de la pagina, pueden usar esto como base para cambiar el nombre de sus paginas :3
// No se olviden del import de arriba
export const metadata: Metadata = {
  title: "Kankun 4.0",
  description: "Necesitamos una descripcion lol",
};

// En teoria no hace falta mover algo aqui a menos que sea muy especifico
// Para modificar la Landing Page solo tienen que modificar el page.tsx, no esto

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="es">
      <body>
        <NuqsAdapter>
          <ThemeProvider attribute="class" defaultTheme="system">
            {children}
          </ThemeProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
};

export default RootLayout;
