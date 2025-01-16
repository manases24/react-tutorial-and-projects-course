"use client"

import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "./theme-provider";

interface Props {
  children: React.ReactNode;
}

export function Providers({ children }: Props) {
  return (
    <>
      <Toaster />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
}
