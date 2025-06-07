"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import localFont from "next/font/local";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import CountUp from "react-countup";

const RoughSplash = localFont({
  src: "../public/fonts/Rough Splash.ttf",
});

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["20%", "200%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.h1
        style={{ y: textY }}
        className={`font-bold text-white/70 text-5xl md:text-9xl relative z-10 ${RoughSplash.className} tracking-widest`}
      >
        AMIBEEST
      </motion.h1>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/img/image-full.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(/img/image-bottom.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
      {/* <div className="abdolute inset-0 z-30 justify-center items-center text-6xl text-amber-400">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-[80dvw] lg:w-[50dvw] h-max min-h-36 lg:h-44 mx-auto backdrop-blur-xs bg-white/20 rounded-lg lg:rounded-2xl flex flex-col"
        >
          <div className="w-full h-1/3 p-3 justify-start text-white text-xl">
            Our Achievements
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="size-full grid grid-cols-1 sm:grid-cols-3 gap-4 px-2"
          >
            <div className="relative bg-white/50 h-28 text-white rounded-lg overflow-hidden">
              <div className="flex items-center justify-center h-full text-6xl font-bold">
                <CountUp start={0} end={100} duration={5} />
              </div>
              <div className="absolute bottom-1 right-2 text-sm text-[#06141D] opacity-80">
                Project
              </div>
            </div>
            <div className="relative bg-white/50 h-28 text-white rounded-lg overflow-hidden">
              <div className="flex items-center justify-center h-full text-6xl font-bold">
                <CountUp start={0} end={50} duration={5} />
              </div>
              <div className="absolute bottom-1 right-2 text-sm text-[#06141D] opacity-80">
                Client
              </div>
            </div>
            <div className="relative bg-white/50 h-28 text-white rounded-lg overflow-hidden">
              <div className="flex items-center justify-center h-full text-6xl font-bold">
                <CountUp start={0} end={7} duration={5} />
              </div>
              <div className="absolute bottom-1 right-2 text-sm text-[#06141D] opacity-80">
                Ans Experions
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div> */}
      <div className="container relative py-24 md:py-32 lg:py-40 z-50">
        <div className="max-w-2xl space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Building Tomorrow's Infrastructure Today
          </h1>
          <p className="text-xl text-gray-200">
            Award-winning civil engineering solutions for commercial,
            residential, and public sector projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg">
              <Link href="/projects">
                <span>View Our Projects</span>
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white hover:bg-white/20"
            >
              <Link href="/services">
                <span>Our Services</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
