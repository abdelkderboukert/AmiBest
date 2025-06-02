"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const items = [
  { title: "Home", link: "/" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
];

const Header = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <header className="fixed top-0 w-full z-50 bg-transparent text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">AmiBest</h1>
        <nav>
          <ul className="flex space-x-4">
            {items.map((item, index) => (
              <motion.li
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  scale:
                    hoveredIndex === null
                      ? 1
                      : hoveredIndex === index
                      ? 1.2
                      : 0.9,
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="list-none"
              >
                <a
                  href={item.link}
                  className="block bg-white/20 px-4 py-2 rounded-md text-white backdrop-blur-md transition"
                >
                  {item.title}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
