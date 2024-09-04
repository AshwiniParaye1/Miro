import Image from "next/image";

import React from "react";

export const Loading = () => {
  return (
    <div className="flex h-full w-full flex-col gap-y-4 items-center justify-center">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={120}
        height={120}
        className="animate-pulse duration-700"
      />
    </div>
  );
};
