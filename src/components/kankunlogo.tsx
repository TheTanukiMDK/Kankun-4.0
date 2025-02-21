import { TreePalm } from "lucide-react";
import { cn } from "@/lib/utils";
const Logo = ({ className }: { className: string }) => {
  return (
    <div className={cn("flex flex-row items-center gap-2 h-32", className)}>
      <TreePalm size={32} />
      <p className="text-2xl font-bold">Kankun 4.0</p>
    </div>
  );
};

export default Logo;
