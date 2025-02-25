
import { ReactNode } from "react";
import SidebarAdmin from "@/components/sidebarAdmin";
import HeaderAdmin from "@/components/headerAdmin";

//Instale: npm install tailwind-scrollbar-hide, lo pongo por si acaso //
// :) Help me
const Layout = ({ children }: { children: ReactNode }) => {
  return <div>
    <html lang="es" suppressHydrationWarning className="overflow-x-hidden">
      <body className="bg-slate-300/10">
      
        <section className="
        fixed top-0 left-0 w-40 h-full z-[2000] overflow-x-hidden scrollbar-hide
        ">
          <SidebarAdmin/>
        </section>
        <section className="
        relative w-full scrollbar-hide ">
          <HeaderAdmin/>
          <div className=" h-[84vh] w-full mt-10 overflow-auto scrollbar-hide
                lg:w-[calc(100%-330px)]
                sm:w-[calc(100%-180px)]
                md:w-[calc(100%-300px)]    
                lg:ml-[200px] lg:mr-[130px] 
                md:ml-[20vw] md:mr-[5vw]
                sm:ml-[20vw] sm:mr-[5vw]
                mx-4">
            {children}
          </div>
        </section>
      </body>
    </html>

  </div>;
};
export default Layout;






