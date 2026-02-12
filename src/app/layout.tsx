import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // eslint-disable-line @typescript-eslint/no-unused-vars
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import DesktopNav from "@/components/DesktopNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Machine Learning & Data Analytics",
  description: "Professional portfolio showcasing ML and Data Analysis projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pb-20 md:pb-0 md:pt-20`}
      >
        <DesktopNav />
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
