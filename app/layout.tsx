import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.scss";
import { cn } from "@/lib/utils";
import { AppStateProvider } from './AppStateContext';


const IBMPlex = IBM_Plex_Sans({ subsets: ["latin"], weight:['400','500','600','700'], variable: "--font-ibm-plex" });

// Metadata
export const metadata: Metadata = {
  title: "Soundscape",
  description: "Music streaming website using weather conditions and mood",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <AppStateProvider>
    <html lang="en">
      <body className={cn("font-IBMPlex antialiased", IBMPlex.variable )}>{children}</body>
    </html>
  </AppStateProvider>
  );
}
