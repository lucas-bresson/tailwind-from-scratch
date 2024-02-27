import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import ThemeClient from "./ui/ThemeProvider";
import NavigationBar from "./ui/components/NavigationBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tailwind CSS",
  description: "Tailwind CSS From Scratch: Learn by doing Projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className}`}>
        <ThemeClient>
          <NavigationBar />
          {children}
        </ThemeClient>
      </body>
    </html>
  );
}
