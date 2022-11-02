import React from "react";

function Navbar() {
  return (
    <div className=" bg-[#171717] flex justify-between items-center py-6 px-6 md:px-9 font-semibold text-white tracking-[4px] text-sm">
      <div className="relative">
        <h1 className=" tracking-widest font-pompador text-xl md:text-2xl lg:text-4xl duration-500 hover:text-white hover:bg-gray-500/20 px-2 rounded-full cursor-pointer">
          Stalwart<span className="text-red-500 ">.</span>
        </h1>
      </div>
      <div className="hidden md:block">
        {/* <div className="flex space-x-6 font-sans">
          <div className="duration-500 hover:text-white hover:underline underline-offset-4 cursor-pointer ">
            ABOUT
          </div>
          <div className="duration-500 hover:text-white hover:underline underline-offset-4 cursor-pointer">
            SERVICES
          </div>
          <div className="duration-500 hover:text-white hover:underline underline-offset-4 cursor-pointer">
            FEEDBACK
          </div>
        </div> */}
      </div>
      <div className="flex space-x-2">
        <button className="text-xs tracking-wider text-[#BAC1D4] bg-[#1C1D1D] px-2 py-1 md:px-4 md:py-2 rounded-full border-2 border-[#2E2E2E]/30 duration-700 hover:bg-yellow-500 hover:text-black">
          CONTACT US
        </button>
        {/* <button className="hidden md:block md:ml-6 text-xs tracking-wider text-[#BAC1D4] bg-[#1C1D1D] px-2  py-1 md:px-4 md:py-2 rounded-full border-2 border-[#2E2E2E]/30 duration-700 hover:bg-yellow-500 hover:text-black">
          PAYMENT
        </button> */}
      </div>
    </div>
  );
}

export default Navbar;
