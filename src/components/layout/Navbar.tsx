export default function Navbar() {
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-white shadow-md dark:bg-zinc-800/50">
        <div className="flex items-center gap-4">
          <a
            href="/"
            className="font-bold text-lg text-gray-800 dark:text-gray-100"
          >
            Selingkuh
          </a>
          <a href="/about" className="text-gray-600 dark:text-gray-400">
            About
          </a>
          <a href="/contact" className="text-gray-600 dark:text-gray-400">
            Contact
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="/login" className="text-gray-600 dark:text-gray-400">
            Login
          </a>
          <a href="/register" className="text-gray-600 dark:text-gray-400">
            Register
          </a>
        </div>
      </nav>
    </div>
  );
}
