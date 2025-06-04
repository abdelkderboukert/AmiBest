import Header from "@/components/Header";
import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="bg-[#06141D] size-full min-h-screen">
      <Header />
      <div className="size-full grid grid-cols-1 sm:grid-cols-2 gap-4 px-2">
        <div className="size-full h-max justify-start items-start flex flex-col">
          <h1
            className={`font-bold text-teal-200/70 text-5xl md:text-9xl relative z-10 tracking-widest text-start mt-14`}
          >
            Beauty in the details
          </h1>
          <p className="mt-2 md:w-2/3">
            At AmiBest, we take pride in offering a comprehensive suite of
            high-quality services designed to support your goals from start to
            finish. Whether you&apos;re launching a new project, optimizing
            existing operations, or seeking innovative solutions, our team is
            here to help every step of the way. With a strong focus on
            precision, creativity, and client satisfaction, we transform ideas
            into impactful results. From strategic planning and design to
            seamless execution and ongoing support, AmiBest delivers excellence
            with efficiency — so you can focus on what matters most.
          </p>
        </div>
        <div className="size-full min-h-screen p-10">
          <div className="relative w-full h-full">
            {" "}
            {/* Added a relative container */}
            <Image
              src="/img/Group 12.png" // Use a public path or import static image
              alt="Description of image"
              layout="fill" // Essential for filling the parent
              objectFit="cover" // Equivalent to Tailwind's object-cover
              className="absolute" // Makes it absolute within the relative parent
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
