"use client";

import { useState, useEffect } from "react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/button";
import Logo from "../../../public/logoipsum-223.svg";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setIsLogged(!!localStorage.getItem("setlogged"));
  }, []);

  const setLogout = () => {
    localStorage.removeItem("setlogged");
  };

  return (
    <div className=" top-0 left-0 w-full flex items-center p-4 bg-transparent shadow-md dark:bg-zinc-800/50 z-50">
      <div className="flex items-center">
        <Image src={Logo} alt="Selingkuh" className="w-10 h-10" />
      </div>
      <div className="flex-grow flex items-center justify-end gap-10">
        {isLogged ? (
          <div className="md:flex items-center gap-10">
            <a href="/contact" className="text-white dark:text-gray-400">
              Contact
            </a>
            <a href="/chat" className="text-white dark:text-gray-400">
              Chat
            </a>
          </div>
        ) : (
          <div className="md:flex items-center gap-4">
            <a href="/login" className="text-white dark:text-gray-400">
              Login
            </a>
            <Button className="btn-selingkuh">
              <a href="/register" className="text-white dark:text-gray-400">
                Register
              </a>
            </Button>
          </div>
        )}
      </div>

      {/* Uncomment this if you need the drawer for mobile view  */}
      <div className="md:hidden flex items-center">
        <Button onClick={() => setDrawerOpen(true)} className="btn-selingkuh">
          Menu
        </Button>
      </div>

      <Drawer open={isDrawerOpen} onClose={() => setDrawerOpen(false)}>
        <DrawerContent>
          <DrawerHeader className=" flex flex-col justify-center items-center">
            <DrawerTitle>Navigation?</DrawerTitle>
            <DrawerDescription>
              Click one for your destination
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            {isLogged ? (
              <div className="flex items-center justify-center gap-2 mb-6">
                <Link
                  href="dashboard/contact"
                  onClick={() => setDrawerOpen(false)}
                  className="btn-selingkuh py-2 px-4"
                >
                  Contact
                </Link>

                <Link
                  onClick={() => setDrawerOpen(false)}
                  className="btn-selingkuh py-2 px-4"
                  href="dashboard/chat"
                >
                  Chat
                </Link>
                <Link
                  onClick={() => setLogout()}
                  href="/"
                  className="btn-selingkuh py-2 px-4"
                >
                  Logout
                </Link>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <Link
                  href="/login"
                  onClick={() => {
                    setDrawerOpen(false);
                  }}
                  className="btn-selingkuh py-2 px-4"
                >
                  Login
                </Link>
                <Link
                  onClick={() => setDrawerOpen(false)}
                  href="/register"
                  className="btn-selingkuh py-2 px-4"
                >
                  Register
                </Link>
              </div>
            )}{" "}
            <DrawerClose>
              <Button variant="outline" onClick={() => setDrawerOpen(false)}>
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
