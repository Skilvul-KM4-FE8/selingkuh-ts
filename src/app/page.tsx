"use client ";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="flex flex-col sm:items-start md:items-start lg:items-center xl:items-center 2xl:items-center justify-center min-h-screen py-2 bg-selingkuh">
        <h1 className="md:text-6xl lg:items-center xl:items-center text-4xl text-white font-bold mx-5 ">
          Welcome to Selingkuh
        </h1>
        <p className="mt-3 font-light mx-5 text-xl text-white">
          The best place to find a partner for your affair
        </p>
        <Button className="mt-5 mx-5" variant="outline">
          <a href="/login"> Get Started</a>
        </Button>
      </div>

      <Footer />
    </>
  );
}
