// import React from "react";
import one from "../../public/1.jpg";
import two from "../../public/2.jpg";
import three from "../../public/3.png";
import four from "../../public/4.jpg";
import five from "../../public/5.jpg";
import six from "../../public/6.jpg";
import seven from "../../public/7.jpg";
import eight from "../../public/8.jpg";
import nine from "../../public/9.jpg";
import Image from "next/image";

const FeaturedImages = () => {
  return (
    <div className="grid grid-cols-3 justify-items-center w-4/5 items-center gap-5 mx-auto">
      <Image src={one} alt="one" className="w-full h-full object-cover" />
      <Image src={two} alt="one" className="w-full h-full object-cover" />
      <Image src={three} alt="one" className="w-full h-full object-cover" />
      <Image src={four} alt="one" className="w-full h-full object-cover" />
      <Image src={five} alt="one" className="w-full h-full object-cover" />
      <Image src={six} alt="one" className="w-full h-full object-cover" />
      <Image src={seven} alt="one" className="w-full h-full object-cover" />
      <Image src={eight} alt="one" className="w-full h-full object-cover" />
      <Image src={nine} alt="one" className="w-full h-full object-cover" />
    </div>
  );
};

export default FeaturedImages;
