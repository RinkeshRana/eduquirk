import React from "react";
import Feedback from "./Feedback";

function Feedbacks() {
  return (
    <div>
      <h3 className="text-center text-white text-xl md:text-3xl tracking-wider my-10 flex-row ">
        Client love us & we love them
      </h3>
      <div className="flex overflow-hidden lg:mx-56 relative ">
        <div className="w-full flex ">
          <Feedback />
          <Feedback />
          <Feedback />
          <Feedback />
        </div>
      </div>
    </div>
  );
}

export default Feedbacks;
