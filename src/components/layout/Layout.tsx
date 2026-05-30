import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
  /** Hero image sits under fixed header — no top padding on main */
  overlayHeader?: boolean;
}

export const Layout = ({ children, overlayHeader = false }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar overlay={overlayHeader} />
      <main className={overlayHeader ? "flex-1" : "flex-1 pt-[4.5rem] md:pt-20"}>{children}</main>
      <Footer />
    </div>
  );
};
