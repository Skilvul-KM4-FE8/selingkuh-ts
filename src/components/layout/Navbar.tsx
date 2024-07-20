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
  const isLogged = localStorage.getItem("setlogged");

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <div className="top-0 left-0 w-full flex items-center  p-4 bg-transparent shadow-md dark:bg-zinc-800/50 z-50">
        <div>
          <Image
            src={Logo}
            alt="Selingkuh"
            className="  justify-start w-10 h-10"
          />
        </div>
        <div className="flex items-center justify-end gap-10">
          {isLogged ? (
            <div className="md:flex items-center gap-10 ">
              <a
                href="/contact"
                className="text-white dark:text-gray-400 text-black"
              >
                Contact
              </a>
              <a
                href="/chat"
                className="text-white dark:text-gray-400 text-black"
              >
                Chat
              </a>
            </div>
          ) : (
            <div className="md:flex items-center gap-4">
              <a
                href="/login"
                className="text-white dark:text-gray-400 text-black"
              >
                Login
              </a>
              <Button className="btn-selingkuh">
                <a
                  href="/register"
                  className="text-white dark:text-gray-400 text-black"
                >
                  Register
                </a>
              </Button>
            </div>
          )}
        </div>

        {/* <div className="md:hidden flex items-center">
          <Button onClick={() => setDrawerOpen(true)} className="btn-selingkuh">
            Menu
          </Button>
        </div> */}
      </div>
    </div>
  );
}
