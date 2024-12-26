import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto text-center">
            <h1 className="text-2xl font-bold">
              Rick & Morty
            </h1>
            <nav>
              <ul className="flex justify-center space-x-6 mt-4">
                <li>
                  <Link href="/" className="hover:text-yellow-400 transition-all">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-yellow-400 transition-all">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-yellow-400 transition-all">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <p className="text-sm text-gray-400 mt-4">
              © 2024 Rick and Morty™. All Rights Reserved.
            </p>
          </div>
        </footer>
  );
}
