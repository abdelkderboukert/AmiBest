import Header from "@/components/Header";
import React from "react";

const Page = () => {
  return (
    <div className="bg-[#06141D] size-full min-h-screen">
      <Header />
      <div className="size-full grid grid-cols-1 sm:grid-cols-2 gap-4 px-2">
        <div className="size-full min-h-screen justify-start items-start flex flex-col">
          <h1
            className={`font-bold text-teal-200/70 text-5xl md:text-9xl relative z-10 tracking-widest text-start mt-14`}
          >
            Beauty in the details
          </h1>
          <p className="mt-2 md:w-1/2">
            At AmiBest, we take pride in offering a comprehensive suite of
            high-quality services designed to support your goals from start to
            finish. Whether you&apos;re launching a new project, optimizing existing
            operations, or seeking innovative solutions, our team is here to
            help every step of the way. With a strong focus on precision,
            creativity, and client satisfaction, we transform ideas into
            impactful results. From strategic planning and design to seamless
            execution and ongoing support, AmiBest delivers excellence with
            efficiency — so you can focus on what matters most.
          </p>
        </div>
        <div className="bg-amber-500 size-full min-h-screen">fndfhgnhgm</div>
      </div>
    </div>
  );
};

export default Page;
