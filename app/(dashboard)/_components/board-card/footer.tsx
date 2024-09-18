import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterProps {
  isFavourite: boolean;
  title: string;
  authorLabel: string;
  createdAtLabel: string;
  onClick: () => void;
  disabled: boolean;
}

export const Footer = ({
  isFavourite,
  title,
  authorLabel,
  createdAtLabel,
  onClick,
  disabled,
}: FooterProps) => {
  return <div>footer</div>;
};
