"use client";
import Header from "@/components/Header";
import MultiLayerParallax from "@/components/MultiLayerParallax";
import { Inter } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const ref = useRef(null);
  return (
    <>
      <Header />
      <main className={inter.className}>
        <MultiLayerParallax />
        {/* <div className="w-full bg-[#06141D]">
          <div className="max-w-lg space-y-4 mx-auto py-24 text-neutral-300">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              quae earum nobis quasi repellat. Amet facere nulla dolorum
              accusantium sit dolores odio excepturi facilis laboriosam officiis
              dolorem, nobis reprehenderit molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              quae earum nobis quasi repellat. Amet facere nulla dolorum
              accusantium sit dolores odio excepturi facilis laboriosam officiis
              dolorem, nobis reprehenderit molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              quae earum nobis quasi repellat. Amet facere nulla dolorum
              accusantium sit dolores odio excepturi facilis laboriosam officiis
              dolorem, nobis reprehenderit molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              quae earum nobis quasi repellat. Amet facere nulla dolorum
              accusantium sit dolores odio excepturi facilis laboriosam officiis
              dolorem, nobis reprehenderit molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              quae earum nobis quasi repellat. Amet facere nulla dolorum
              accusantium sit dolores odio excepturi facilis laboriosam officiis
              dolorem, nobis reprehenderit molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              quae earum nobis quasi repellat. Amet facere nulla dolorum
              accusantium sit dolores odio excepturi facilis laboriosam officiis
              dolorem, nobis reprehenderit molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              quae earum nobis quasi repellat. Amet facere nulla dolorum
              accusantium sit dolores odio excepturi facilis laboriosam officiis
              dolorem, nobis reprehenderit molestiae.
            </p>
          </div>
        </div> */}
        {/* <section className="w-full bg-[#06141D] h-screen flex justify-center items-center flex-col">
          <h1 className="text-5xl text-neutral-300">About As</h1>
          <p className="text-neutral-300 mx-auto text-center w-[80%] mt-4">
            At AmiBest, we are dedicated to delivering high-quality solutions
            that simplify and enhance your everyday life. Founded with a passion
            for innovation and customer satisfaction, our company combines
            technology, creativity, and expertise to bring you reliable and
            user-friendly products and services.
          </p>
        </section> */}
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
                className="w-full h-4/5 bg-black bg-cover bg-no-repeat bg-current"
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
      </main>
    </>
  );
}
