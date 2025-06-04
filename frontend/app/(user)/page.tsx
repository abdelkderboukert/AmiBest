"use client";
import Header from "@/components/Header";
import MultiLayerParallax from "@/components/MultiLayerParallax";
import { Inter } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const items = [
  { title: "Servis 1", link: "", icon: "/icons8-commerce-91.png" },
  { title: "Servis 2", link: "/#about", icon: "/icons8-commerce-91.png" },
  { title: "Servis 3", link: "/#contact", icon: "/icons8-commerce-91.png" },
];

export default function Home() {
  const ref = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <>
      <Header />
      <main className={inter.className}>
        <MultiLayerParallax />
        <section
          ref={ref}
          className="w-full h-screen bg-[#06141D] flex justify-center items-center flex-row lg:px-24"
          id="about"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.9 } }}
            className="w-1/5 h-4/6 grid grid-rows-2"
          >
            <div
              className="w-full h-full bg-cover bg-no-repeat bg-right"
              style={{ backgroundImage: "url('/img/img2.jpg')" }}
            ></div>
            <div
              className="w-full h-full bg-cover bg-no-repeat bg-right mt-1"
              style={{ backgroundImage: "url('/img/img1.jpg')" }}
            ></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.75 } }}
            className="w-2/3 md:w-1/2 lg:w-1/3 h-5/6 bg-teal-950 mx-1 p-4 flex flex-col justify-center"
          >
            <h1 className="text-blue-100 text-2xl px-5">
              About&nbsp;<span className="text-cyan-800">Us</span>
            </h1>
            <p className="my-5 text-sm text-white px-5">
              At AmiBest, we are dedicated to delivering high-quality solutions
              that simplify and enhance your everyday life. Founded with a
              passion for innovation and customer satisfaction, our company
              combines technology, creativity, and expertise to bring you
              reliable and user-friendly products and services.
            </p>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-3/5 mx-5 h-11 flex bg-teal-700 rounded-lg justify-center items-center text-blue-50 font-bold select-none"
            >
              <Link href={"/about"}>Rede More</Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            className=" hidden lg:block h-3/5 w-1/3 flex-row"
          >
            <div className="h-full w-4/5 flex flex-col">
              <Link
                href={"https://maps.app.goo.gl/JrMJBhnWmdkMSTf8A"}
                className="w-full h-4/5 bg-black bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/img/local.png')" }}
              ></Link>
              <div className="w-0 lg:w-full h-1/5 flex items-start justify-start mt-1 p-3">
                <p className="text-white">
                  <span className="text-[#003913] text-xl font-bold">
                    localisation
                  </span>
                  sbsh bqdh ethsdnhs shsrh hshr dhdsbsg
                </p>
              </div>
            </div>
            <div className="h-full w-1/5"></div>
          </motion.div>
        </section>
        {/* <section className="size-full grid grid-cols-1 sm:grid-cols-4 gap-4 px-2">
          <div className="relative h-56 ">
            <div className="absolute inset-0 flex p-1 z-0 bg-transparent">
              <div className="text-lg p-2 size-full font-bold text-black">
                <div className="size-full inset-0 bg-amber-400">test</div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full z-10 h-28 px-6 py-2 text-white font-semibold bg-blue-600 [clip-path:polygon(5%_60%,100%_5%,100%_100%,0%_100%)]">
              Trapezoid Chip
            </div>
          </div>
        </section> */}
        <section className="w-full h-screen bg-[#06141D] justify-center items-center flex flex-col">
          <motion.h1
            className={`font-bold text-white/70 text-5xl md:text-7xl relative z-10 tracking-widest text-center`}
          >
            WHAT WE OFFER?
          </motion.h1>
          <p className="text-white text-center w-1/2 mb-9">
            At AmiBest, we offer a wide range of top-notch services tailored to
            meet your every need. From concept to execution, we ensure quality,
            efficiency, and satisfaction.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-[80dvw] lg:w-[50dvw] h-max min-h-36 lg:h-56 mx-auto rounded-lg lg:rounded-2xl flex flex-col items-center justify-center md:flex-row gap-8"
          >
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="size-full grid grid-cols-1 sm:grid-cols-3 gap-4 px-2"
            > */}
            {items.map((item, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => (window.location.href = item.link)}
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
                className="h-56 w-52 rounded-2xl bg-teal-950  justify-center items-center flex flex-col text-white cursor-pointer shadow-2xl"
              >
                <img src={item.icon} alt="" className="size-3/5" />
                {item.title}
              </motion.div>
            ))}

            {/* </motion.div> */}
          </motion.div>
        </section>
      </main>
    </>
  );
}
