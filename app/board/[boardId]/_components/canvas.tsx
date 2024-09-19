"use client";

import { Info } from "./info";
import { Participants } from "./participants";

export const Canvas = () => {
  return (
    <main className="w-full h-full relative bg-neutral-100 touch-none">
      <Info />
      <Participants />
    </main>
  );
};
