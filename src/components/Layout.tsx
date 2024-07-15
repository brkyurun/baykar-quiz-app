import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col bg-neutral-900 px-6 pt-12 font-inter">
      {children}
    </main>
  );
}
