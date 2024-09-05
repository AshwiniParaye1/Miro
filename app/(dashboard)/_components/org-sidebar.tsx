"use client";

import { cn } from "@/lib/utils";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Poppins({ subsets: ["latin"], weight: "600" });

export const OrgSidebar = () => {
  return (
    <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5 ">
      <Link href="/">
        <div className="flex items-center gap-x-2">
          <Image src="/logo.svg" alt="Logo" width={60} height={60} />
          <span className={cn("font-semibold text-2xl", font.className)}>
            Board
          </span>
        </div>
      </Link>
      <OrganizationSwitcher hidePersonal />
    </div>
  );
};
