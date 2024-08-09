"use client";
import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "600",
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body
          suppressHydrationWarning={true}
          className={cn(
            "min-h-screen bg-background font-sans antialiased mx-auto",
            fontSans.variable
          )}
        >
          {children}
     
        </body>
      </QueryClientProvider>
    </html>
  );
}
