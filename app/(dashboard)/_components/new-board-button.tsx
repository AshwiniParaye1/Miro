"use client";

import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

export const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={() => {}}
      className={cn(
        "col-span-1 aspect[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center p-6",
        disabled && "opacity-75"
      )}
    >
      <div />
      <Plus className="h-12 w-12 text-white stroke-1" />
      <p className="text-white text-sm font-light">New Board</p>
    </button>
  );
};
