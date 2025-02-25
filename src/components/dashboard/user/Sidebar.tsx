"use client";
import { ReactNode, useEffect, useState } from "react";
import {
  LucideIcon,
  Calendar,
  ClipboardList,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-10 m-4">
      <Container>
        <SideButton Icon={Calendar} href="/dashboard/user" tooltip="Eventos" />
        <SideButton
          Icon={ClipboardList}
          href="/dashboard/user/reservations"
          tooltip="Reservaciones"
        />
        <SideButton
          Icon={Settings}
          href="/dashboard/user/profile"
          tooltip="Ajustes"
        />
        <SideButton Icon={LogOut} href="/login" tooltip="Cerrar sesión" />
      </Container>
    </div>
  );
};

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-popover border-border border-[1px] shadow-lg rounded-full p-3 flex flex-col space-y-4">
      {children}
    </div>
  );
};

const SideButton = ({
  Icon,
  href,
  tooltip,
}: {
  Icon: LucideIcon;
  href: string;
  tooltip: string;
}) => {
  const [btVariant, setVariant] = useState<string>("primary");
  const currPath = usePathname();

  useEffect(() => {
    setVariant(currPath == href ? "" : "ghost");
    console.log(btVariant);
  }, [currPath, href]);
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button
            className="rounded-full w-14 h-14"
            variant={btVariant}
            size="icon"
            asChild
          >
            <Link href={href}>
              <Icon size={32} />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Sidebar;
