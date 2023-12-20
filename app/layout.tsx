import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Combat Connect",
  description: "Lookin' for a fight?",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className=" bg-slate-500 w-full">
        <div className="max-w-7xl mx-auto my-0 px-6">
          <NavBar />
        </div>
      </nav>

      <main className="flex flex-col max-w-7xl mx-auto my-0 px-6 min-h-[calc(100vh-160px)]">
        <div className="flex-1">{children}</div>
      </main>

      <footer className=" bg-slate-50 w-full">
        <div className="max-w-7xl mx-auto my-0 px-6">
          <Footer />
        </div>
      </footer>
    </>
  );
}
