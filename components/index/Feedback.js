import React from "react";

function Feedback() {
  return (
    <div className="bg-[#212121] min-w-[512px] m-4 font-semibold float-left">
      <h5 className="text-white p-5 md:p-12 text-xl">Customer Support</h5>
      <p className="text-gray-400 px-5 md:px-12">
        Themexriver has been providing excellent support. There might be some
        timezone issues but that&apos;s out of his control. Very professional
        and efficient in providing support with all of my inquiries. This guys
        deserves a raise! All the best mate! Cheers, Victor | Managing Director
        @ yesSMS.me
      </p>
      <div className="text-white p-5 md:p-12 text-xl">
        Virtual Hotelier{" "}
        <span className="text-orange-500">@virtualhotelier</span>
      </div>
    </div>
  );
}

export default Feedback;
