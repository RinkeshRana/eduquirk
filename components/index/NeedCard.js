import React from "react";
import { BsChatDotsFill } from "react-icons/bs";

function NeedCard() {
  return (
    <div className=" font-gordita rounded-2xl duration-300 hover:shadow-xl hover:scale-105 md:px-8 py-10 border border-zinc-800 text-center font-semibold max-w-[500px] m-3 flex bg-[#181818]">
      <div className="text-purple-500 text-3xl mx-3 mt-5">
        <BsChatDotsFill />
      </div>
      <div className="text-start px-3">
        <div className="text-white text-lg md:text-2xl">Chat & Messaging</div>
        <div className="text-gray-400 py-1 md:py-4 text-sm">
          Chat section is as signifacant as other sections on your website and
          it works best for your customers.
        </div>
        <div className="group text-white transition-all duration-300 ease-in-out w-fit">
          <button className="bg-left-bottom bg-gradient-to-l from-orange-500 to-orange-200 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Learn more &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default NeedCard;
