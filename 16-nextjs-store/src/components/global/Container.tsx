import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: Props) => {
  return (
    <div className={cn("mx-auto max-w-6xl xl:max-w-7xl px-8", className)}>
      {children}
    </div>
  );
};
