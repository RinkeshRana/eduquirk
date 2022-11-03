import React from "react";
import {
  AiOutlineFieldTime,
  AiOutlineDesktop,
  AiOutlineMobile,
  AiOutlineRightSquare,
  AiOutlineSmile,
} from "react-icons/ai";

function Features() {
  return (
    <div className="">
      <h3 className="text-center dark:text-white text-xl md:text-3xl tracking-wider mb-10 flex-row ">
        Our impressive features
      </h3>
      <div className="p-2 flex justify-center flex-wrap">
        <div className="rounded-2xl border border-zinc-800 text-center py-7 max-w-[350px] m-3    hover:bg-blue-500/10 dark:hover:bg-yellow-50/5">
          <div className="text-orange-500 flex justify-center text-4xl">
            <AiOutlineFieldTime />
          </div>
          <div className="dark:text-white text-2xl my-4">Fast performance</div>
          <div className="dark:text-gray-400 p-5">
            Stalwart is the best Website Builder, Create beautiful sites and
            pages.
          </div>
        </div>
        <div className="rounded-2xl border border-zinc-800 text-center  py-7 max-w-[350px] m-3 hover:bg-blue-500/10 dark:hover:bg-yellow-50/5">
          <div className="text-orange-500 flex justify-center text-4xl">
            <AiOutlineDesktop />
            <AiOutlineMobile />
          </div>
          <div className="dark:text-white text-2xl my-4">Responsive ready</div>
          <div className="dark:text-gray-400 p-5">
            Your site will always looks cool and great on any mobile device or
            bvrowsers.
          </div>
        </div>
        <div className="rounded-2xl border border-zinc-800 text-center  py-7 max-w-[350px] m-3 hover:bg-blue-500/10 dark:hover:bg-yellow-50/5">
          <div className="text-orange-500 flex justify-center text-4xl">
            <AiOutlineRightSquare />
          </div>
          <div className="dark:text-white text-2xl my-4">
            Well documented code
          </div>
          <div className="dark:text-gray-400 p-5">
            The code will be awesome well documented. It will be upgraded very
            easily
          </div>
        </div>
        <div className="rounded-2xl border border-zinc-800 text-center  py-7 max-w-[350px] m-3 hover:bg-blue-500/10 dark:hover:bg-yellow-50/5">
          <div className="text-orange-500 flex justify-center text-4xl">
            <AiOutlineSmile />
          </div>
          <div className="dark:text-white text-2xl  my-4">Fast support</div>
          <div className="dark:text-gray-400 p-5">
            We provides Best Quality support for all clients. You can contact
            without hesitation.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
