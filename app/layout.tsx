import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
      <main className="max-w-screen flex flex-col items-start ">
        {children}
      </main>
    </html>
  );
}
