import { Skeleton } from "@/components/ui/skeleton";
import { Loader } from "lucide-react";

export const Loading = () => {
  return (
    <main className="w-full h-full relative bg-neutral-100 touch-none flex items-center justify-center">
      <Loader className="w-6 h-6 text-muted-foreground animate-spin" />
    </main>
  );
};
