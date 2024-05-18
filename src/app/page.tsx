"use client ";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
        <h1 className="text-6xl font-bold">Welcome to Selingkuh</h1>
        <p className="mt-3 text-2xl">
          The best place to find a partner for your affair
        </p>
      </div>
      <Footer />
    </>
  );
}
