import type { ReactNode } from "react";
import { ClickSpark } from "../motion/ClickSpark";
import { ScrollProgress } from "../motion/ScrollProgress";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <ClickSpark>
      <div className="noise relative min-h-screen">
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
      </div>
    </ClickSpark>
  );
}
