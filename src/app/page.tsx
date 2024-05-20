"use client ";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-start justify-center min-h-screen py-2 bg-selingkuh">
        <h1 className="md:text-6xl text-4xl text-white font-bold mx-5 ">
          Welcome to Selingkuh
        </h1>
        <p className="mt-3 md:text-2xl mx-5 text-2xl text-white">
          The best place to find a partner for your affair
        </p>
        <Button className="mt-5 mx-5" variant="outline">
          Get Started
        </Button>
      </div>

      <Footer />
    </>
  );
}
