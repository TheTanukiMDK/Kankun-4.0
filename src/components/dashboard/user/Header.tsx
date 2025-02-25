import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TEMP_PFP =
  "https://i.pinimg.com/550x/c1/53/9d/c1539d6d1fbdb3d5a643dff30dc19a53.jpg";

export default function Navbar({ title }: { title: string }) {
  return (
    <div className="flex flex-row items-center justify-between w-full min-h-20">
      <div className="flex flex-row">
        <p className="text-primary font-bold text-2xl">{title}</p>
      </div>
      <Avatar>
        <AvatarImage src={TEMP_PFP} />
        <AvatarFallback>K4</AvatarFallback>
      </Avatar>
    </div>
  );
}
