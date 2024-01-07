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
    <html lang="en">
      <body>
        <NavBar />
        <main className="max-w-screen-xl mx-auto my-0 w-full px-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
