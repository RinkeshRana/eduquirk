import React from "react";

function Hero() {
  return (
    <div className="">
      <div className="flex justify-center items-center h-[600px] md:h-[700px]">
        <div className="text-4xl md:text-6xl lg:text-8xl text-center dark:text-white font-gordita">
          <h2>
            <div>
              Building websites<span className="text-5xl">,</span>
            </div>

            <div>
              <span className="text-rose-500">ideas</span>
              <span className="text-5xl">,</span>
              <span className="text-yellow-400"> visions</span> &
            </div>
            <div>experiences</div>
          </h2>
          <div className="flex justify-center text-base mt-8 dark:text-white px-3">
            <div className="md:w-3/4">
              <h3 className="bg-purple-500 opacity-20 absolute blur-3xl  w-12 md:w-56  h-56 rotate-45 transition-colors overflow-hidden " />
              Transforming concepts into stunning sites. We build your brand
              online, hassle-free. Ensuring your web presence stays consistently
              on-brand.
            </div>
            <div></div>
          </div>
          <button className="md:ml-6 text-lg tracking-wider border-2  px-2 py-1 md:px-7 md:py-3 rounded-full  duration-700 hover:bg-yellow-400 hover:text-black font-semibold ">
            GET IN TOUCH &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
