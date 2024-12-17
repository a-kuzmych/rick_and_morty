import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white shadow-md py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 space-y-6 md:space-y-0">
        <h1 className="text-3xl font-bold">
          <Link href="/" className="hover:text-yellow-400 transition-all duration-300 ease-in-out">
            Rick & Morty
          </Link>
        </h1>

        <nav>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <li>
              <Link href="/" className="hover:text-yellow-400 transition-all duration-300 ease-in-out">
                About
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-yellow-400 transition-all duration-300 ease-in-out">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-yellow-400 transition-all duration-300 ease-in-out">
                Licensing
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-yellow-400 transition-all duration-300 ease-in-out">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400">
        <p className="text-sm">© 2024 Rick and Morty™. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
