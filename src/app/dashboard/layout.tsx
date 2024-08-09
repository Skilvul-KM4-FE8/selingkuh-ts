import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import "tailwindcss/tailwind.css";
import { Poppins as FontSans } from "next/font/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "600",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      {children}

      <Footer />
    </>
  );
}

// ====================================
