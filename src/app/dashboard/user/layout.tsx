import Sidebar from "@/components/dashboard/user/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      {children}
    </div>
  );
}
