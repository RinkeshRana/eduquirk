// import React from "react";

import Image from "next/image";

const FeaturedImages = () => {
  const images = [
    "1.jpg",
    "2.jpg",
    "3.png",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
  ];

  return (
    <div>
      <h3 className="text-center dark:text-white text-xl md:text-3xl tracking-wider mb-10 flex-row ">
        Past works we have done...
      </h3>
      <div className="grid grid-cols-3 justify-items-center w-4/5 items-center gap-5 mx-auto">
        {images.map((image, index) => (
          <div key={index} className="">
            <img
              src={`${image}`}
              alt={`Work ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedImages;
