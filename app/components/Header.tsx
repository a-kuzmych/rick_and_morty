import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold">
          <Link href="/" className="hover:text-yellow-400 transition-all duration-300 ease-in-out">
            Rick & Morty
          </Link>
        </h1>

        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="hover:text-yellow-400 transition-all duration-300 ease-in-out"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/characters"
                className="hover:text-yellow-400 transition-all duration-300 ease-in-out"
              >
                Characters
              </Link>
            </li>
            <li>
              <Link
                href="/episodes"
                className="hover:text-yellow-400 transition-all duration-300 ease-in-out"
              >
                Episodes
              </Link>
            </li>
            <li>
              <Link
                href="/locations"
                className="hover:text-yellow-400 transition-all duration-300 ease-in-out"
              >
                Locations
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
