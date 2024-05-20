import { Button } from "../ui/button";
import Logo from "../../../public/logoipsum-223.svg";
import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-transparant shadow-md dark:bg-zinc-800/50">
        <div className="flex items-center gap-4">
          <Image src={Logo} alt="Selingkuh" className="w-10 h-10" />

          <a href="/contact" className="text-white dark:text-gray-400">
            Contact
          </a>
          <a href="/contact" className="text-white dark:text-gray-400">
            Chat
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="/login" className="text-white dark:text-gray-400">
            Login
          </a>
          <Button className="btn-selingkuh">
            <a href="/register" className="text-white dark:text-gray-400">
              Register
            </a>
          </Button>
        </div>
      </nav>
    </div>
  );
}
