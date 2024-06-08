"use client";

import { useState } from "react";
import {
  Drawer,
  // DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  // DrawerClose,
} from "../ui/drawer";
import { Button } from "../ui/button";
import Logo from "../../../public/logoipsum-223.svg";
import Image from "next/image";

export default function Navbar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-transparent shadow-md dark:bg-zinc-800/50 z-50">
        <div className="flex items-center gap-10">
          <Image src={Logo} alt="Selingkuh" className="w-10 h-10" />
          <div className="hidden md:flex items-center gap-10">
            <a href="/contact" className="text-white dark:text-gray-400">
              Contact
            </a>
            <a href="/chat" className="text-white dark:text-gray-400">
              Chat
            </a>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a href="/login" className="text-white dark:text-gray-400">
            Login
          </a>
          <Button className="btn-selingkuh">
            <a href="/register" className="text-white dark:text-gray-400">
              Register
            </a>
          </Button>
        </div>
        <div className="md:hidden flex items-center">
          <Button onClick={() => setDrawerOpen(true)} className="btn-selingkuh">
            Menu
          </Button>
        </div>
      </nav>
      {/* 
      <Drawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <DrawerClose />
          </DrawerHeader>

          <a href="/contact" className="text-white dark:text-gray-400 mb-2">
            Contact
          </a>
          <a href="/chat" className="text-white dark:text-gray-400 mb-2">
            Chat
          </a>
          <a href="/login" className="text-white dark:text-gray-400 mb-2">
            Login
          </a>
          <Button className="btn-selingkuh w-full mt-2">
            <a href="/register" className="text-white dark:text-gray-400">
              Register
            </a>
          </Button>
        </DrawerContent>
      </Drawer> */}
    </div>
  );
}
