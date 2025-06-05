import React from "react";

const Footer = () => {
  return (
    <div className="grid bg-[#06141D] w-full grid-cols-1 md:grid-cols-5">
      {/* Left Section */}
      <div className="relative flex h-56 w-full overflow-hidden text-white md:col-span-2">
        <div className="relative h-full w-full">
          <div className="absolute -left-12 -top-16 h-48 w-48 rounded-full bg-teal-950 blur-3xl"></div>
        </div>
        <div className="absolute inset-0 z-10 bg-transparent">
          <div className="flex flex-1 flex-col items-center justify-center">
            <h1 className="flex flex-col text-3xl font-bold text-stone-800">
              Boukert <br /> Abdelkader
              <p className="text-xs font-light text-zinc-400">
                software engineer / web developer
              </p>
            </h1>
          </div>
        </div>
      </div>

      {/* Center Section */}
      <div className="flex h-44 w-full items-center justify-center p-4">
        <div className="flex h-36 w-36 items-center justify-center rounded-xl bg-blue-500 lg:w-3/4"></div>
      </div>

      {/* Right Section */}
      <div className="relative flex h-56 w-full overflow-hidden text-white md:col-span-2">
        <div className="relative h-full w-full">
          <div className="absolute -bottom-16 -right-12 h-48 w-48 rounded-full bg-teal-950 blur-3xl"></div>
        </div>
        <div className="absolute inset-0 z-10 bg-transparent">
          <div className="flex h-full w-full flex-1 items-center justify-center">
            <p className="flex items-center justify-center text-black">
              <a
                className="text-xs text-zinc-400 no-underline select-none md:text-base"
                href="tel:+213656906049"
              >
                +213 656 90 60 49
              </a>
              <br />
              <a
                className="text-xs text-zinc-400 no-underline select-none md:text-base"
                href="mailto:abdelkaderboukart@gmail.com"
              >
                abdelkaderboukart@gmail.com
              </a>
              <br />
              <a
                className="text-xs text-zinc-400 no-underline select-none md:text-base"
                href="http://www.hygindust.com"
              >
                www.hygindust.com
              </a>
              <br />
              <a
                className="text-xs text-zinc-400 no-underline select-none md:text-base"
                href="https://maps.app.goo.gl/1WmExqpN6KkHp6YKA"
              >
                Village benramdan lot 102 nÂ°2 Chebli Blida
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
