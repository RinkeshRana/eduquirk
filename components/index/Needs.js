import React from "react";
import { BsChatDots, BsChatDotsFill } from "react-icons/bs";
import { FaOpencart } from "react-icons/fa";
import { GoCreditCard } from "react-icons/go";
import { SiClockify } from "react-icons/si";
import NeedCard from "./NeedCard";

function Needs() {
  return (
    <div className=" mt-10 font-gordita">
      <div className="text-4xl md:text-5xl lg:text-6xl text-center dark:text-white ">
        Stalwart for every business <div>you need.</div>
      </div>

      <div className="flex justify-center">
        <div className="md:w-3/4 md:p-10 rounded-3xl flex justify-center flex-wrap mt-16">
          <div className=" rounded-2xl duration-300 hover:shadow-xl hover:scale-105 md:px-8 py-10 border border-zinc-800 text-center font-semibold max-w-[500px] m-3 flex dark:bg-[#181818]">
            <div className="text-purple-500 text-3xl mx-3 mt-5">
              <BsChatDots />
            </div>
            <div className="text-start px-3">
              <div className="dark:text-white text-lg md:text-2xl">
                Chat & Messaging
              </div>

              <div className="dark:text-gray-400 py-1 md:py-4 text-sm">
                Chat section is as signifacant as other sections on your website
                and it works best for your customers.
              </div>
              {/* <div className="group dark:text-white transition-all duration-300 ease-in-out w-fit">
                <button className="bg-left-bottom bg-gradient-to-l from-purple-500 to-purple-200 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Learn more &gt;
                </button>
              </div> */}
            </div>
          </div>
          <div className=" rounded-2xl duration-300 hover:shadow-xl hover:scale-105 md:px-8 py-10 border border-zinc-800 text-center font-semibold max-w-[500px] m-3 flex dark:bg-[#181818]">
            <div className="text-green-500 text-3xl mx-3 mt-5">
              <FaOpencart />
            </div>
            <div className="text-start px-3">
              <div className="dark:text-white text-lg md:text-2xl">
                eCommerce
              </div>
              <div className="dark:text-gray-400 py-1 md:py-4 text-sm">
                Build an online store that rank higher & sell more and integrate
                easily to enhance the quality
              </div>
              {/* <div className="group dark:text-white transition-all duration-300 ease-in-out w-fit">
                <button className="bg-left-bottom bg-gradient-to-l from-green-500 to-green-200 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Learn more &gt;
                </button>
              </div> */}
            </div>
          </div>

          <div className=" rounded-2xl duration-300 hover:shadow-xl hover:scale-105 md:px-8 py-10 border border-zinc-800 text-center font-semibold max-w-[500px] m-3 flex dark:bg-[#181818]">
            <div className="text-cyan-500 text-3xl mx-3 mt-5">
              <GoCreditCard />
            </div>
            <div className="text-start px-3">
              <div className="dark:text-white text-lg md:text-2xl">
                Payment Gateway
              </div>
              <div className="dark:text-gray-400 py-1 md:py-4 text-sm">
                Payment gateways are a service that helps merchants initiate
                ecommerce point of sale payments for a broad variety of payment
                methods.
              </div>
              {/* <div className="group dark:text-white transition-all duration-300 ease-in-out w-fit">
                <button className="bg-left-bottom bg-gradient-to-l from-cyan-500 to-cyan-200 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Learn more &gt;
                </button>
              </div> */}
            </div>
          </div>
          <div className=" rounded-2xl duration-300 hover:shadow-xl hover:scale-105 md:px-8 py-10 border border-zinc-800 text-center font-semibold max-w-[500px] m-3 flex dark:bg-[#181818]">
            <div className="text-orange-500 text-3xl mx-3 mt-5">
              <SiClockify />
            </div>
            <div className="text-start px-3">
              <div className="dark:text-white text-lg md:text-2xl">
                Appointments
              </div>
              <div className="dark:text-gray-400 py-1 md:py-4 text-sm">
                A powerful scheduling platform to grow and manage time for your
                business in single user interface.
              </div>
              {/* <div className="group dark:text-white transition-all duration-300 ease-in-out w-fit">
                <button className="bg-left-bottom bg-gradient-to-l from-orange-500 to-orange-200 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Learn more &gt;
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Needs;
