"use client";
import Header from "@/components/dashboard/user/Header";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon, ShieldAlert, LockKeyhole, Eye } from "lucide-react";

const TEMP_DATA = {
  pfp: "https://i.pinimg.com/550x/c1/53/9d/c1539d6d1fbdb3d5a643dff30dc19a53.jpg",
  legalName: "El Pepe",
  email: "elpepe@oficial.com",
  phoneNumber: "9983708715",
};

const Root = () => {
  return (
    <div className="flex flex-col flex-1">
      <Header title="Mis datos" />
      <div className="flex flex-row justify-between gap-4 flex-1 px-20 py-8">
        <div className="flex flex-col gap-8 w-1/2">
          <Avatar className="w-60 h-60">
            <AvatarImage src={TEMP_DATA.pfp} />
            <AvatarFallback>K4</AvatarFallback>
          </Avatar>
          <DataValue title="Nombre" value={TEMP_DATA.legalName} />
          <Separator />
          <DataValue title="Correo electronico" value={TEMP_DATA.email} />
          <Separator />
          <DataValue title="Número de teléfono" value={TEMP_DATA.phoneNumber} />
          <Separator />
        </div>
        <div className="flex flex-col gap-8">
          <InfoCard
            title="¿Porqué mi información no se muestra aquí?"
            Icon={ShieldAlert}
            description="Estamos ocultando algunos detalles para proteger su identidad"
          />
          <InfoCard
            title="¿Qué detalles se pueden editar?"
            Icon={LockKeyhole}
            description="Los detalles que Kankun4.0 utiliza para verificar tu identidad no se pueden cambiar. La información de contacto y algunos datos personales se pueden editar, pero es posible que le pidamos que verifique su identidad la próxima vez que reserve o cree un anuncio."
          />
          <InfoCard
            title="¿Qué información se comparte con otros?"
            Icon={Eye}
            description="Kankun4.0 solo publica la información de contacto de los anfitriones y los huéspedes una vez confirmada la reserva."
          />
        </div>
      </div>
    </div>
  );
};

const Separator = () => {
  return <div className="w-full h-[1px] bg-border" />;
};

const DataValue = ({ title, value }: { title: string; value: string }) => {
  return (
    <div>
      <p className="font-bold">{title}</p>
      <p className="">{value}</p>
    </div>
  );
};

const InfoCard = ({
  title,
  Icon,
  description,
}: {
  title: string;
  Icon: LucideIcon;
  description: string;
}) => {
  return (
    <Card className="max-w-[420px] w-[420px]">
      <CardHeader>
        <CardTitle>
          <Icon className="my-2" size={42} />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};

export default Root;
