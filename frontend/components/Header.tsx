import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-transparent text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">AmiBest</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
