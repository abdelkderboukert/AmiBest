"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function WelcomePage() {
  const router = useRouter();

  useEffect(() => {
    // Always wait 10s and then set hasVisited
    const timer = setTimeout(() => {
      localStorage.setItem("hasVisited", "true");
      router.replace("/");
    }, 2500); // 2 seconds

    return () => clearTimeout(timer);
  }, [router]);

  return (
    // <div className="h-screen flex justify-center items-center bg-black text-white">
    //   <motion.h1
    //     initial={{ opacity: 0, scale: 0.8 }}
    //     animate={{ opacity: 1, scale: 1 }}
    //     transition={{ duration: 2 }}
    //     className="text-4xl font-bold"
    //   >
    //     👋 Welcome to AmiBest!
    //   </motion.h1>
    // </div>
    <div className="relative w-screen h-screen overflow-hidden">
      {/* 🔹 Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/wel.jpg')" }}
      />

      {/* 🔹 Black Overlay */}
      <div className="absolute inset-0 bg-black flex items-center justify-center px-4">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-extrabold text-transparent bg-clip-text bg-white bg-cover bg-center leading-tight whitespace-nowrap"
        >
          {/* Move from left to center, then scale */}
          <motion.span
            initial={{ x: 0, scale: 1 }}
            animate={{ x: "20vw", scale: 50 }}
            transition={{
              x: { delay: 1.5, duration: 1.5, ease: "easeInOut" },
              scale: { delay: 2, duration: 1.5, ease: "easeInOut" },
            }}
            className="inline-block origin-center text-white"
          >
            A
          </motion.span>

          {/* Fade out "miBest" after delay */}
          <motion.span
            animate={{ opacity: 0 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="inline-block origin-center text-white"
          >
            miBest
          </motion.span>
        </motion.h1>
      </div>
    </div>
  );
}
