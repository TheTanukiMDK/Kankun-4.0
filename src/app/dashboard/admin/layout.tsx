import { TitleProvider } from '@/components/titleContext';
import SidebarAdmin from "@/components/sidebarAdmin";
import HeaderAdmin from "@/components/headerAdmin";

const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <TitleProvider>
      <div className="overflow-x-hidden">
        <section className="fixed top-0 left-0 w-40 h-full z-[2000] overflow-x-hidden scrollbar-hide">
          <SidebarAdmin />
        </section>
        <section className="relative w-full scrollbar-hide">
          <HeaderAdmin/>
          <div className="flex h-[84vh] w-full mt-10 overflow-auto scrollbar-hide
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
      </div>
    </TitleProvider>
  );
};

export default Layout;