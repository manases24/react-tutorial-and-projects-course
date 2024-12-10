import { ReactNode } from "react";

export function Main({ children }: { children: ReactNode }) {
  return <main className="main">{children}</main>;
}
