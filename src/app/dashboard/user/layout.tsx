import Sidebar from "@/components/sidebarUser";
import Navbar from "@/components/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row h-screen max-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 p-6 bg-gray-100">{children}</main>
      </div>
    </div>
  );
}
