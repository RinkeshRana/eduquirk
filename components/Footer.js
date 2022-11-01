import React from "react";

function Footer() {
  return (
    <div className="text-white mt-32 py-20">
      <div className="text-center text-3xl md:text-5xl">Feeling in love? </div>
      <div className="text-center text-xl my-4">
        Don&apos;t hesitate to contact us.
      </div>
      <div className="flex justify-center">
        <button className="md:ml-6 text-lg tracking-wider bg-orange-500 text-white px-2 py-1 md:px-8 md:py-4 rounded-full border-2 border-[#2E2E2E]/30 duration-700 hover:bg-yellow-400 hover:text-black font-semibold ">
          CONTACT NOW
        </button>
      </div>
    </div>
  );
}

export default Footer;
